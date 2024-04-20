// Temperature
  function convertTemperature(value, fromUnit, toUnit) {
    if (
      fromUnit.toLowerCase() === "celsius" &&
      toUnit.toLowerCase() === "fahrenheit"
    ) {
      return (value * 9) / 5 + 32;
    } else if (
      fromUnit.toLowerCase() === "fahrenheit" &&
      toUnit.toLowerCase() === "celsius"
    ) {
      return ((value - 32) * 5) / 9;
    } else {
      throw new Error("Invalid temperature conversion.");
    }
  }

  let tempInFahrenheit = convertTemperature(20, "Celsius", "Fahrenheit");
  let tempInCelsius = convertTemperature(68, "Fahrenheit", "Celsius");


// RGB
function rgbToHex(r, g, b) {
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
  
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    return `#${hexR}${hexG}${hexB}`;
}

let colorHex = rgbToHex(30, 250, 40);

// Flats
function findFlatDetails(flatNumber, flatsPerFloor, floorsPerEntrance) {
    const flatsPerEntrance = flatsPerFloor * floorsPerEntrance;
    const entrance = Math.ceil(flatNumber / flatsPerEntrance);
    const flatIndexInEntrance = (flatNumber - 1) % flatsPerEntrance;
    const floor = Math.floor(flatIndexInEntrance / flatsPerFloor) + 1;

    return { entrance, floor };
}

let flatDetails = findFlatDetails(15, 3, 6);
console.log(flatDetails);

// Credentials
function capitalize(string) {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    return '';
}

function collectCredentials() {
    const name = prompt("Введіть ваше ім'я");
    const surname = prompt('Введіть ваше прізвище:');
    const fatherName = prompt('Введіть ваше по батькові:');

    const fullName = `${capitalize(surname)} ${capitalize(name)} ${capitalize(fatherName)}`;

    return {
        name: capitalize(name),
        surname: capitalize(surname),
        fatherName: capitalize(fatherName),
        fullName: fullName
    };
}
const credentials = collectCredentials();
console.log(credentials);

// New line
function addNewLine(text) {
  return text.replace(/\\n/g, "\n");
}

const inputText = "Цей рядок містить \\n спеціальні символи для \\n переносів.";
const formattedText = addNewLine(inputText);
console.log(formattedText);

// Prompt OR
const promptOr = (message, defaultValue) =>
  prompt(message, defaultValue) || defaultValue;

// Login And Password
function loginAndPassword(correctLogin, correctPassword) {
  let enteredLogin = prompt("Enter your login:");
  let enteredPassword = prompt("Enter your password:");

  if (enteredLogin === correctLogin && enteredPassword === correctPassword) {
    return true;
  } else {
    return false;
  }
}

let correctLogin = "user123";
let correctPassword = "password123";

let isLoggedIn = loginAndPassword(correctLogin, correctPassword);

if (isLoggedIn) {
  console.log("You are logged in!");
} else {
  console.log("Login or password is incorrect.");
}

// For Table
function multiplyTable(tableData) {
  let htmlString = "<table>";

  for (let i = 0; i < tableData.length; i++) {
    htmlString += "<tr>";
    for (let j = 0; j < tableData[i].length; j++) {
      htmlString += "<td>" + tableData[i][j] + "</td>";
    }
    htmlString += "</tr>";
  }

  htmlString += "</table>";

  return htmlString;
}

// Filter Lexics
function filterLexics(inputString, bannedWords) {
  const words = inputString.split(" ");
  const filteredWords = words.filter(function (word) {
    return !bannedWords.includes(word.toLowerCase());
  });
  return filteredWords.join(" ");
}

const inputString = "Це рядок із некоректними словами бляха та муха";
const bannedWords = ["бляха", "муха", "пляшка", "шабля"];
const filteredString = filterLexics(inputString, bannedWords);
console.log(filteredString);

// Currency Table
function currencyTable() {
  let data = [
    ["USD", "EUR", "GBP", "UAH"],
    [27.12, 33.02, 29.83, 1],
    [0.037, 0.03, 0.034, 1],
  ];

  forTable(data);
}

function forTable(data) {
  let table = "<table border='1'>";
  for (let i = 0; i < data.length; i++) {
    table += "<tr>";
    for (let j = 0; j < data[i].length; j++) {
      table += "<td>" + data[i][j] + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  document.write(table);
}

currencyTable();

// Form
function createForm(data) {
  let form = "<form>";

  for (let key in data) {
    form +=
      "<label>" +
      key +
      ": <input type='text' value='" +
      data[key] +
      "'/></label><br>";
  }

  form += "</form>";
  document.write(form);
}

let formData = {
  name: "Maks",
  age: 19,
  email: "maks@gmail.com",
};

createForm(formData);

// Array of objects sort
function sort(arr, key, ascending = true) {
    if (!arr || !Array.isArray(arr) || arr.length === 0 || !key || typeof key !== 'string') {
        console.log("Invalid input");
        return;
    }

    function compare(a, b) {
        let comparison = 0;
        if (a[key] > b[key]) {
            comparison = 1;
        } else if (a[key] < b[key]) {
            comparison = -1;
        }
        return ascending ? comparison : -comparison;
    }
    arr.sort(compare);

    console.log(arr);
}

let persons = [
    {name: "Іван", age: 17},
    {name: "Марія", age: 35},
    {name: "Олексій", age: 73},
    {name: "Яків", age: 12}
];

sort(persons, "age");
sort(persons, "name", false);

// Table
function sort(arr, key, ascending = true) {

    if (!arr || !Array.isArray(arr) || arr.length === 0 || !key || typeof key !== 'string') {
        console.log("Invalid input");
        return;
    }

    function compare(a, b) {
        let comparison = 0;
        if (a[key] > b[key]) {
            comparison = 1;
        } else if (a[key] < b[key]) {
            comparison = -1;
        }
        return ascending ? comparison : -comparison;
    }

    arr.sort(compare);
}

function Table(data, sortBy, sortOrder = 'ascending') {
    if (!data || !Array.isArray(data) || data.length === 0 || !sortBy || typeof sortBy !== 'string') {
        console.log("Invalid input");
        return;
    }

    const sortedData = [...data];

    sort(sortedData, sortBy, sortOrder === 'ascending');

    let tableHTML = '<table>';
    tableHTML += '<tr>';
    for (const key in sortedData[0]) {
        tableHTML += `<th>${key}</th>`;
    }
    tableHTML += '</tr>';
    sortedData.forEach(obj => {
        tableHTML += '<tr>';
        for (const key in obj) {
            tableHTML += `<td>${obj[key]}</td>`;
        }
        tableHTML += '</tr>';
    });
    tableHTML += '</table>';

    document.write(tableHTML);
}

let persons = [
    {name: "Іван", age: 17},
    {name: "Марія", age: 35},
    {name: "Олексій", age: 73},
    {name: "Яків", age: 12}
];

Table(persons, "age", "ascending");
Table(persons, "name", "descending");

// Divide
 const firstNumber = document.getElementById("firstNumber");
 const secondNumber = document.getElementById("secondNumber");
 const divisionResult = document.getElementById("divisionResult");

 const calcResult = () => {
   const first = parseFloat(firstNumber.value);
   const second = parseFloat(secondNumber.value);
   if (!isNaN(first) && !isNaN(second) && second !== 0) {
     divisionResult.innerHTML = "Результат ділення: " + first / second;
   } else {
     divisionResult.innerHTML = "Некоректні дані для ділення";
   }
 };

 firstNumber.addEventListener("input", calcResult);
secondNumber.addEventListener("input", calcResult);
 
// Calc Func
function calculateRectangleArea(length, width) {
  const area = length * width;
  return area;
}

const length = parseFloat(prompt("Введіть довжину прямокутника:"));
const width = parseFloat(prompt("Введіть ширину прямокутника:"));

const result = calculateRectangleArea(length, width);
alert("Площа прямокутника: " + result);

// Calc Live
 function calculateResult(a, b) {
   return a / b;
 }

 function updateResult() {
   const firstNumber = parseFloat(document.getElementById("firstNumber").value);
   const secondNumber = parseFloat(
     document.getElementById("secondNumber").value
   );
   const resultDiv = document.getElementById("divisionResult");

   if (!isNaN(firstNumber) && !isNaN(secondNumber) && secondNumber !== 0) {
     const result = calculateResult(firstNumber, secondNumber);
     resultDiv.innerHTML = "Результат: " + result;
   } else {
     resultDiv.innerHTML = "Некоректні дані для розрахунку";
   }
 }

 document.getElementById("firstNumber").addEventListener("input", updateResult);
 document
   .getElementById("secondNumber")
   .addEventListener("input", updateResult);