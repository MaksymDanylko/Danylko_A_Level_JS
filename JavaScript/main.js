// // blocks
// let a = 10
// {
//     let b = 20
//     {
//         let c = 30
//         //які тут будуть значення змінних a, b, c, d
        
//         b++
//         a *= 10
//     }
//     {
//         let c = 50
//         //які тут будуть значення змінних a, b, c, d
//         b += 500
//     }
//     {
//         const a = 100500
//         const d = "value"
//         //які тут будуть значення змінних a, b, c, d
//         {
//             let a = -50
//             b     = 1000
//             //які тут будуть значення змінних a, b, c, d
//         }
//         //які тут будуть значення змінних a, b, c, d
//     }
//     //які тут будуть значення змінних a, b, c, d
// }
// //які тут будуть значення змінних a, b, c, d

// comparison if

const age = +prompt("Скільки вам років?", "");
if (age < 0) {
  alert("негативний вік");
} else if (age < 18) {
  alert("школяр");
} else if (age > 18 && age < 30) {
  alert("молодь");
} else if (age > 30 && age < 45) {
  alert("зрілість");
} else if (age > 45 && age < 60) {
  alert("захід сонця");
} else if (age > 60) {
  alert("як пенсія?");
} else {
  alert("чи кіборг, чи KERNESS");
}

// switch: sizes
const size = 20;
switch (size) {
  case 6:
    alert("s");
    break;
  case 8:
  case 9:
  case 10:
  case 11:
    alert("m");
    break;
  case 12:
  case 13:
  case 14:
  case 15:
    alert("l");
    break;
  case 16:
  case 17:
  case 18:
  case 19:
    alert("xl");
    break;
  case 20:
    alert("xxl");
    break;
  default:
    alert("no size");
}
// switch: if
const color = prompt("Введіть колір", "");

if (color) {
  if (color === "red" || color === "black") {
    document.write("<div style='background-color: red;'>червоний</div>");
    document.write(
      "<div style='background-color: black; color: white;'>чорний</div>"
    );
  } else if (color === "blue" || color === "green") {
    document.write("<div style='background-color: blue;'>синій</div>");
    document.write("<div style='background-color: green;'>зелений</div>");
  } else {
    document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
  }
}
// noswitch

const noSwitch = (key, cases, defaultKey = "default") => {
  if (cases.hasOwnProperty(key) && typeof cases[key] === "function") {
    return cases[key]();
  } else if (
    cases.hasOwnProperty(defaultKey) &&
    typeof cases[defaultKey] === "function"
  ) {
    return cases[defaultKey]();
  } else {
    console.log("Шото я не зрозумів");
  }
};

const drink = prompt("Що ви любите пити");

noSwitch(
  drink,
  {
    воду: () => console.log("Найздоровіший вибір!"),
    чай: () =>
      console.log("Смачна та корисна штука. Не перестарайтеся з цукром"),
    пиво: () => console.log("Добре влітку, та в міру"),
    віскі: () => console.log("Та ви, батечку, естет! Не забудьте лід і сигару"),
  },
  "default"
);



// closure calc
fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("btn-container");
    const { rates } = data;

    for (const cur in rates) {
      const btn = document.createElement("button");
      btn.innerText = cur;

      container.append(btn);

      btn.addEventListener("click", () => {
        const amount = +prompt("Enter number");
        const result = amount / rates[cur];

        console.log("cur =>", result.toFixed(2));
      });
    }
    console.log(data);
  });

const fillSelect = (rates, fromSelect, toSelect) => {
  for (const cur in rates) {
    const option = document.createElement("option");
    option.innerText = cur;
    option.value = cur;
    const optionClone = option.cloneNode(true);

    fromSelect.append(option);
    toSelect.append(optionClone);
  }
};

// closure calc2
fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    const { rates } = data;
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");
    const input = document.getElementById("amount");
    const resultDiv = document.getElementById("result");
    const rateDiv = document.getElementById("rate");

    fillSelect(rates, fromSelect, toSelect);

    const convertCur = (e) => {
      const fromCur = fromSelect.value;
      const toCur = toSelect.value;
      const amount = +input.value;
      const exRate = rates[toCur] / rates[fromCur];
      const result = amount * exRate;
      resultDiv.innerText = result.toFixed(2);
      rateDiv.innerText = rates[toCur].toFixed(2);
    };

    fromSelect.addEventListener("change", convertCur);
    toSelect.addEventListener("change", convertCur);
    input.addEventListener("input", convertCur);
  });

const createOptions = (data, parent) => {
  for (const country of data) {
    const option = document.createElement("option");
    option.innerText = country;
    option.value = country;
    parent.append(option);
  }
};

// countries and cities
fetch(
  "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json"
)
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("country-container");
    const countrySelect = document.createElement("select");
    const citySelect = document.createElement("select");
    container.append(countrySelect);
    container.append(citySelect);

    createOptions(Object.keys(data), countrySelect);
    createOptions(data["Afghanistan"], citySelect);

    countrySelect.addEventListener("change", (e) => {
      const value = e.target.value;
      citySelect.innerText = "";
      createOptions(data[value], citySelect);
    });
  });

