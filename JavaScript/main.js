// odd
{
  const userNumber = prompt("введіть число: ");
  let number = parseFloat(userNumber);
  if (!isNaN(number)) {
    if (number % 2 === 0) {
      alert("Введене число є парним.");
    } else {
      alert("Введене число є непарним.");
    }
  } else {
    alert("Помилка: Введіть коректне число.");
  }
}

// lexics
{
  const text = prompt(`введіть текст: `)

  if (text.indexOf(`блін`) !== -1) {
    alert(`текст містьть слово: блін`);
  } if (text.indexOf(`капець`) !== -1) {
    alert(`текст містьть слово: капець`);
  } if (text.indexOf(`кака`) !== -1) {
    alert(`текст містьть слово: кака`);
  } else {
    alert("Текст не містить некоректних слів.");
  }
}

// Boolean
{
  const answer = confirm(`Так чи ні`);
  const text = answer ? `Так` : `Ні`;
  alert(text);
  if (answer) {
    alert(Так);
  } else {
    alert(Ні);
  }
}

// if
{
  const isFemale = confirm(`Ви жінка?`);
  const text = isFemale ? `Так` : `Ні`;
  alert(text);

  if (isFemale) {
    alert("Ви жінка");
  } else {
    alert("Ви чоловік");
  }
}

// sizes
{
  const size = +prompt(`введіть свій розмір: `);
  if (size < 6) {
    alert(`XS`);
  }
  if (size >= 6 && size <= 7) {
    alert(`S`);
  }
  if (size >= 8 && size <= 12) {
    alert(`M`);
  }
  if (size >= 13 && size <= 16) {
    alert(`L`);
  }
  if (size >= 17 && size <= 20) {
    alert(`XL`);
  }
  if (size > 20) {
    alert(`XXL`);
  }
}

// Ternary
{
  const answer = confirm(`Ви жінка чи чоловік`);
  const text = answer ? `Ви жінка` : `Ви чоловік`;
  alert(text);
  if (answer) {
    alert(Жінка);
  } else {
    alert(Чоловік);
  }
}

// // Training
// // bool type cast
// console.log(!!2); // true
// console.log(!!0); // false
// console.log(!!1); // true

// // or
// console.log(2 || 1); // 2
// console.log(2 || 0); // 2

// //and
// console.log(2 && 1); // 1
// console.log(1 && 2); // 2
// console.log(0 && 2); // 0

// // or and and difference
// console.log(0 || 1 || 2); // 1
// console.log(0 && 1 && 2); // 0
// console.log(2 || 1 || 0); // 2
// console.log(2 && 1 && 0); // 0

// console.log(confirm('left') || confirm('right'));
// console.log(confirm('left') && confirm('right'));

// //null, undefined, so on
// console.log(null || 2); // 2
// console.log(undefined && 1); // undefined

// console.log(alert("Hello") && confirm('Are you sexy?'));
// console.log(alert("Hello") || confirm('Are you drunk?'));

// //brackets and complex expressions
// console.log((undefined || 2) && (3 || 0)); // 2
// console.log((2 && 1) || (null && 0)); // 1
// console.log((2 > 1) && "greater"); // "greater"
// console.log((2 < 1) && null); // null
// console.log(null && (2 < 1)); // null

// // ternary operator
// console.log(1 ? "one" : "not one"); // "one"
// console.log(0 ? "zero" : "not zero"); // "not zero"
// console.log("0" ? "\"zero\"" : "not `zero`"); // "\"zero\""
// console.log(parseInt("0") ? 'true' : 'false'); // "false"
// console.log(("" || 2) && (3 || "3.5") || (4 && 5)); // 3
// console.log((-1 + 1) && "zero"); // "zero"
// console.log("-1" + 1 && "oups"); // "oups"
// console.log(typeof null === 'object') ? "null is object" : "null is null"; // "null is object"

// // ternary && ||
// console.log(Math.random() < 0.5 && 'less' || 'more'); // 'less' or 'more'
// const a = Math.random();
// console.log((a < 0.5) && ('less: ' + a) || ('more: ' + a)); // 'less: a' or 'more: a'

// // in for array
// console.log([2, 3, 5, 7, 11].indexOf(7) > -1 ? 'prime' : 'not found'); // 'prime'

// or
{
  const age = prompt("Введіть ваш вік:") || "";
!age && alert("Помилка: Ви не ввели вік або натиснули 'Скасувати'.") || alert(`Ваш вік: ` +age);
}

// or this days
{
  const shopping = confirm(`Шопінг?`) || false;
!shopping && alert("Ти - бяка!") || alert(`поїхали`);
}

// if this days
{
  const shopping = confirm(`Шопінг?`) || false;

  if (!shopping) {
    alert(`Ти - бяка!`);
  } else {
    alert(`Поїхали`);
  }
}

// or
{
  const lastName = prompt("Введіть ваше прізвище:") || "Іванов";
  const firstName = prompt("Введіть ваше ім'я:") || "Іван";
  const middleName = prompt("Введіть ваше по батькові:") || "Іванович";

  alert(`ПІБ: ${lastName} ${firstName} ${middleName}`)
}

// if
{
  let lastName = prompt("Введіть ваше прізвище:");
  if (!lastName) {
    lastName = "Іванов";
  }

  let firstName = prompt("Введіть ваше ім'я:");
  if (!firstName) {
    firstName = "Іван";
  }
  let middleName = prompt("Введіть ваше по батькові:");
  if (!middleName) {
    middleName = "Іванович";
  }

  alert(`ПІБ: ${lastName} ${firstName} ${middleName}`)
}

// Login and password
{
  const login = prompt("Введіть логін:");

  if (login === "admin") {
    const password = prompt("Введіть пароль:");

    if (password === "qwerty") {
      alert("Ласкаво просимо!");
    } else {
      alert("Помилка: невірний пароль.");
    }
  } else {
    alert("Помилка: невірний логін.");
  }
}

//  Currency exchange
{
  const currency = prompt(
    "Введіть валюту (наприклад, USD, EUR):").toUpperCase();
  const isBuying = confirm("Ви хочете купити?");

  let rate;

  if (currency === "USD") {
    rate = isBuying ? 27.5 : 27.0;
  } else if (currency === "EUR") {
    rate = isBuying ? 32.0 : 31.5;
  } else {
    alert("Ви ввели непідтримувану валюту.");
  }

  if (rate) {
    const amount = parseFloat(prompt("Введіть суму для обміну:"));
    if (!isNaN(amount)) {
      const result = isBuying ? amount * rate : amount / rate;
      alert(`Результат обміну: ${result.toFixed(2)} ${currency}`);
    } else {
      alert("Ви ввели некоректну суму.");
    }
  }
}

// Scissors Зробив за допомогою GPT бо щось з масивом запутвся
const userChoice = prompt("Введіть ваш вибір (камінь, ножиці або папір):").toLowerCase();

const choices = ["камінь", "ножиці", "папір"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

alert(`Вибір комп'ютера: ${computerChoice}`);

let winner;
if (userChoice === computerChoice) {
    winner = "Нічия";
} else if (
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір") ||
    (userChoice === "папір" && computerChoice === "камінь")
) {
    winner = "Користувач";
} else {
    winner = "Комп'ютер";
}

alert(`Переможець: ${winner}`);