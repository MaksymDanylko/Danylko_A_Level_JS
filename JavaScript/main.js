// assign: evaluation
{
  var a = 5;
  var b, c;

  b = (a * 5);
  b = (c = (b / 2));
}

// Number: age
var age = prompt("Скільки вам років?");
if (age !== null) {
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear - parseInt(age);
    alert("Ви народилися у " + birthYear + " році.");
}
else {
    alert("Введення скасовано.");
}

// Number: temperature
var celsius = prompt("Введіть температуру в градусах Цельсія:");
if (celsius !== null) {
  var fahrenheit = (parseFloat(celsius) * 9) / 5 + 32;
  alert(
    celsius +
      " градусів Цельсія дорівнює " +
      fahrenheit.toFixed(2) +
      " градусам Фаренгейта."
  );
} else {
  alert("Введення скасовано.");
}

// Number: divide
var dividend = parseFloat(prompt("Введіть ділене число:"));
var divisor = parseFloat(prompt("Введіть дільник:"));
if (!isNaN(dividend) && !isNaN(divisor) && divisor !== 0) {
    var result = Math.floor(dividend / divisor);
    alert("Результат поділу націло: " + result);
} else if (divisor === 0) {
    alert("Дільник не може бути нулем!");
} else {
    alert("Будь ласка, введіть числа.");
}

// Number: currency
const rate = 27.50;
var amount = parseFloat(prompt("Введіть суму в одній валюті:"));
if (!isNaN(amount)) {
    var exchangedAmount = amount * rate;
    exchangedAmount = exchangedAmount.toFixed(2);
    alert("Сума в іншій валюті: " + exchangedAmount);
} else {
    alert("Будь ласка, введіть правильну суму.");
}

// Number: RGB
var red = parseInt(
  prompt("Введіть значення червоного кольору (від 0 до 255):")
);
var green = parseInt(
  prompt("Введіть значення зеленого кольору (від 0 до 255):")
);
var blue = parseInt(prompt("Введіть значення синього кольору (від 0 до 255):"));
if (
  !isNaN(red) &&
  !isNaN(green) &&
  !isNaN(blue) &&
  red >= 0 &&
  red <= 255 &&
  green >= 0 &&
  green <= 255 &&
  blue >= 0 &&
  blue <= 255
) {
  var colorHex ="#" + red.toString(16).padStart(2, "0") + green.toString(16).padStart(2, "0") + blue.toString(16).padStart(2, "0");
  alert("CSS-колір: " + colorHex);
} else {
  alert("Будь ласка, введіть числа від 0 до 255.");
}

// Number: flats
var numFloors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
var apartmentsPerFloor = parseInt(
  prompt("Введіть кількість квартир на поверсі:")
);
var apartmentNumber = parseInt(prompt("Введіть номер квартири:"));
if (
  !isNaN(numFloors) &&
  !isNaN(apartmentsPerFloor) &&
  !isNaN(apartmentNumber) &&
  numFloors > 0 &&
  apartmentsPerFloor > 0 &&
  apartmentNumber > 0
) {
  var numEntrances = Math.ceil(
    apartmentNumber / (numFloors * apartmentsPerFloor)
  );
  var floor = Math.ceil(
    (apartmentNumber % (numFloors * apartmentsPerFloor)) / apartmentsPerFloor
  );
  var entrance = Math.ceil(
    apartmentNumber / (apartmentsPerFloor * numFloors * numEntrances)
  );
  alert(
    "Квартира №" +
      apartmentNumber +
      " розташована на " +
      floor +
      "-му поверсі " +
      entrance +
      "-го під'їзду."
  );
} else {
  alert("Будь ласка, введіть вірну інформацію.");
}