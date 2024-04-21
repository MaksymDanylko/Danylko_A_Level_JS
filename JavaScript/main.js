// // while confirm
// // solution 1
// while (!confirm()) {}
// // solution 2
// while (true) {
//   if (confirm()) {
//     break;
//   }
// }

// // array fill
// let arrEmpty = [];
// let promptArr;
// while ((promptArr = prompt("Введіть щось "))) {
//   arrEmpty.push(promptArr);
//   console.log(arrEmpty);
// }

// // array fill nopush
// const arr = [];
// let index = 0;
// while (true) {
//   const answer = prompt("Введіть щось ");
//   if (answer) {
//     arr[index] = answer;
//     index++;
//   } else {
//     break;
//   }
// }
// console.log(arr);

// // infinite probability

// let index = 0;
// while (true) {
//   const random = Math.random();
//   if (random > 0.9) {
//     break;
//   }
//   index++;
// }

// console.log(index);

// // empty loop
// while (!confirm()) {}

// progression sum

// const n = +prompt();
// let sum = 0;
// for (let i = 0; i <= n; i += 3) {
//   sum += i;
//   console.log(i);
// }

// // progression sum
// let N = 10;

// let sum = 0;
// for (let i = 1; i <= N; i += 3) {
//   sum += i;
// }

// console.log("Сума арифметичної прогресії від 1 до", N, "з кроком 3:", sum);

// // chess one line
// const length = prompt();

// let str = "";
// for (let i = 0; i < length; i++) {
//     if (i % 2 === 0) {
//         str += "#";
//     } else {
//         str += ".";
//     }
// }

// console.log(str);


// // numbers

// let str = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     str += j;
//   }
//   str += "\n";
// }

// // chess
// const rows = 3;
// const cols = 5;

// let chessboard = "";

// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//         if ((i + j) % 2 === 0) {
//             chessboard += "#";
//         } else {
//             chessboard += ".";
//         }
//     }
//     chessboard += "\n";
// }

// console.log(chessboard);

// // cubes
// const N = prompt("Введіть кількість елементів у масиві:");
// const cubesArray = [];

// for (let i = 0; i < N; i++) {
//   cubesArray.push(i ** 3);
// }

// console.log(cubesArray);

// // multiply table
// const size = 10;
// const multiplicationTable = [];
// for (let i = 0; i < size; i++) {
//   multiplicationTable[i] = [];
//   for (let j = 0; j < size; j++) {
//     multiplicationTable[i][j] = (i + 1) * (j + 1);
//   }
// }

// console.log(multiplicationTable);

// // read array of objects
// function readArrayOfObjects() {
//     let array = []; 
//     let continueInput = true;

//     while (continueInput) {
//         let object = {};

//         while (true) {
//             let key = prompt("Введіть ключ для об'єкта (або натисніть Скасувати для завершення введення)");
//             if (key === null) {
//                 break;
//             }
//             let value = prompt("Введіть значення для ключа '" + key + "'");
//             object[key] = value;
//         }
//         array.push(object);
//         continueInput = confirm("Бажаєте ввести ще один об'єкт?");
//     }

//     return array;
// }

// const arrayOfObjects = readArrayOfObjects();
// console.log(arrayOfObjects);


// // rhombus

// const size = +prompt();

// const halfRow = Math.floor(size / 2);
// let dotsLength = halfRow;
// let cagesLength = 1;

// for (let i = 0; i < halfRow; i++) {
//   const dots = "".padStart(dotsLength, ".");
//   const cage = "".padStart(cagesLength, "#");
//   console.log(dots + cage + dots);
//   cagesLength += 2;
//   dotsLength--;
// }

// for (let j = 0; j < halfRow + 1; j++) {
//   const dots = "".padStart(dotsLength, ".");
//   const cage = "".padStart(cagesLength, "#");
//   console.log(dots + cage + dots);
//   cagesLength -= 2;
//   dotsLength++;
// }

// // DOM: multiply table, DOM: Highlight cross
// const tableContainer = document.getElementById("table");
// const table = document.createElement("table");
// table.style.border = "1px solid black";

// for (let i = 0; i <= 10; i++) {
//   const tr = document.createElement("tr");

//   for (let j = 0; j <= 10; j++) {
//     const cell = document.createElement("td");
//     cell.style.border = "1px solid black";
//     cell.style.padding = "10px";
//     cell.innerText = i === 0 || j === 0 ? j || i : j * i;

//     const highlightCells = (cellColor = "", rowColor = "") => {
//       for (const td of tr.childNodes) {
//         td.style.backgroundColor = rowColor;
//       }
//       for (const tableRow of table.childNodes) {
//         const td = tableRow.childNodes[j];
//         td.style.backgroundColor = rowColor;
//       }
//       cell.style.backgroundColor = cellColor;
//     };

//     cell.addEventListener("mouseover", () => {
//       highlightCells("red", "green");
//     });

//     cell.addEventListener("mouseout", () => {
//       highlightCells();
//     });

//     tr.append(cell);
//   }

//   table.append(tr);
// }

// tableContainer.append(table);