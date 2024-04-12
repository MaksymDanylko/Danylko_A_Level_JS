// // Confirms
// {
//   const arr = [
//     confirm('Вам подобається JS?'),
//     confirm('Вам подобається HTML?'),
//     confirm('Ви вмієте програмувати ?')
//   ];
//   console.log(arr);
// }

// // Prompts
// {
//   const arr = [];

//   arr[0] = prompt(`Як вас звати?`);
//   arr[1] = prompt(`Як у вас справи?`);
//   arr[2] = prompt(`Скільки вам років?`);

//   console.log(arr)
// }

// // Item access ЗРОБИВ ЧЕРЕЗ GPT БО НЕ ДУЖЕ ЗРОЗУМІВ ЯК ЙОГО РОБИТИ, БУДУ ДУЖЕ ВДЯЧНИЙ ЯКЩО ОБЯСНИШ
// {
//   const arr = ["audi", "bmw", "porsche", "mercedes"];

//   const index = prompt('Введіть індекс у масиві:');

//   if (index === 'length') {
//     console.log(array.length);
//   }
//   else {
//     const numericIndex = parseInt(index);
//     if (!isNaN(numericIndex) && numericIndex >= 0 && numericIndex < array.length) {
//       console.log(array[numericIndex]);
//     } else {
//       console.log('Неправильний індекс');
//     }
//   }
// }

// // Item change ТАКОЖ ЧЕРЕЗ GPT, БУДУ ДУЖЕ ВДЯЧНИЙ ЯКЩО ОБЯСНИШ ЯК ЙОГО РОБИТИ
// {
//   let array = ["audi", "bmw", "porsche", "grmercedesape"];

//   const index = prompt("Введіть індекс у масиві:");
//   const value = prompt("Введіть значення для цього індексу:");

//   const numericIndex = parseInt(index);
//   if (
//     !isNaN(numericIndex) &&
//     numericIndex >= 0 &&
//     numericIndex < array.length
//   ) {
//     array[numericIndex] = value;
//     console.log("Значення успішно змінено");
//   } else {
//     console.log("Неправильний індекс");
//   }

//   console.log(array);
// }

// // Multiply table
// {
//   const multiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16],
//   ];

//   console.log(multiplyTable);
// };

// // Multiply table slice
// {
//   const multiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16],
//   ];

//   console.log(multiplyTable);

//   const mTableNoZeros = []

//   for (let i = 1; i <= 5; i++) {
//     const row = [];
//     for (let j = 1; j <= i; j++){
//       row.push(i * j);
//     }
//     mTableNoZeros.push(row)
//   }
//   console.log(mTableNoZeros)
// };

// // IndexOf Word
// {
//   const sentence = prompt("Введіть рядок із кількох слів:");
//   const word = prompt("Введіть слово, яке потрібно знайти:");
//   const words = sentence.split(" ");
//   let index = words.indexOf(word);
//   if (index !== -1) {
//     console.log(`Слово "${word}" знаходиться на позиції ${index + 1} у рядку.`);
//   } else {
//     console.log(`Слово "${word}" не знайдено у рядку.`);
//   }
// }

// // Reverse
// {
//   const arr = [];
//   const revArr = [];

//   for (let el = 0; el < 5; el++) {
//     const element = prompt(`Введіть ${el + 1}-й елемент:`);
//     arr.push(element);
//   }
//   while (arr.length > 0) {
//     revArr.push(arr.pop())
//   }
//   console.log(`початковий:`,arr);
//   console.log(`зворотній:`,revArr);
// }

// // Reverse 2
// {
//   const arr = [];
//   const revArr = [];
//   const reversedArray = [];

//   for (let el = 0; el < 5; el++) {
//     const element = prompt(`Введіть ${el + 1}-й елемент:`);
//     arr.push(element);
//   }
//   while (revArr.length > 0) {
//     reversedArray.unshift(revArr.shift());
//   }

//   console.log("Початковий:", arr);
//   console.log("Зворотній:", reversedArray);
// }

// // Copy
// {
//   const multiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16],
//   ];
//   const multiplyTableCopy = [...multiplyTable];
  // console.log(`no copy`, multiplyTable);
  // console.log(`copy`,multiplyTableCopy);
// }

// // Deep Copy
// {
//   const multiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16],
//   ];

//   const deepCopy = multiplyTable.map(row => row.slice())
//     console.log(`no copy`, multiplyTable);
//     console.log(`deep copy`, deepCopy);
// }

// // Array Equals
// {
//   const arr = [1, 2, 3];
//   const arr2 = arr.slice();

//   console.log(arr === arr2);
//   console.log(arr);
//   console.log(arr2);
// }

// // Flat
// {
//   const multiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16],
//   ];

//   const flatArr = [].concat(...multiplyTable);
//   console.log(flatArr);
// }

// // Destruct
// {
//   const inpStr = prompt();
//   const [first, , , , fifth, , , , ninth] = inpStr;
//   console.log("Перша літера:", first);
//   console.log("П'ята літера:", fifth);
//   console.log("Дев'ята літера:", ninth);
// }

// // Destruct default
// {
//   const inpStr = prompt("Введіть рядок:");
//   const [first = "!", , second = "!", , fourth = "!", fifth = "!"] = inpStr;
//   console.log("Друга літера:", second);
//   console.log("Четверта літера:", fourth);
//   console.log("П'ята літера:", fifth);
// }

// // Multiply table rest
// {
//   const multiplyTable = [
//     [0, 0, 0, 0, 0],
//     [0, 1, 2, 3, 4],
//     [0, 2, 4, 6, 8],
//     [0, 3, 6, 9, 12],
//     [0, 4, 8, 12, 16],
//   ];

//   const [[, ...row1], [, ...row2], [, ...row3], [, ...row4], [, ...row5]] =
//     multiplyTable;
//   const resArr = [row1, row2, row3, row4, row5].map(row => row.filter(num => num !== 0));
//   console.log(resArr);
// }

// // For Alert
// {
//   const names = ["John", "Paul", "George", "Ringo"];
//   for (const name of names) {
//       alert(name);
//   };
// }

// // For Select Option
// {
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
// for (const currency of currencies) {
// str += `<option value="${currency}">${currency}</option>`;
// }
// str += "</select>";
// document.write(str);
// }

// // For Table Horizontal
// {
// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table style='border: 1px solid black;'><tr>";
// for (const name of names) {
//   str += `<td style='border: 1px solid black;'>${name}</td>`;
// }
// str += "</tr ></table>";
// document.write(str);
// }

// // For Table Vertical
// {
// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table style='border: 1px solid black;'><tr>";
// for (const name of names) {
//   str += "<tr><td style='border: 1px solid black;'>" + name + "</td></tr>";
// }
// str += "</tr ></table>";
// document.write(str);
// }

// // For Table Letters
// {
//   const currencies = ["USD", "EUR", "GBP", "UAH"];
//   let str =
//     "<table style='border-collapse: collapse; border: 1px solid black;'>";

//   for (let i = 0; i < currencies.length; i++) {
//     if (i % 4 === 0) {
//       str += "<tr>";
//     }

//     for (const letter of currencies[i]) {
//       str +=
//         "<td style='border: 1px solid black; padding: 5px;'>" +
//         letter +
//         "</td>";
//     }
//     if ((i + 1) % 1 === 0) {
//       str += "</tr>";
//     }
//   }

//   str += "</table>";

//   document.write(str);
// }

// // For Multiply Table
// {
//   const multiplyTable = [
//   [0, 0, 0, 0, 0],
//   [0, 1, 2, 3, 4],
//   [0, 2, 4, 6, 8],
//   [0, 3, 6, 9, 12],
//   [0, 4, 8, 12, 16],
// ];

// document.write('<table border="1">');
// for (const row of multiplyTable) {
//   document.write("<tr>");
//   for (const num of row) {
//     const bgColor = num % 2 === 0 ? "lightblue" : "lightgreen";
//     document.write(`<td style="background-color: ${bgColor};">${num}</td>`);
//   }
//   document.write("</tr>");
// }
//   document.write("</table>");
// }

// // Function Capitalize
//   const capitalize = (str) => {
//     if (!str) return "";
//     const result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//     return result;
//   };

// console.log(capitalize("cANBerRa")); // Canberra

// //Map Capitalize
// {
// const capitalize = (str) => {
//   if (!str) return "";
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// };

// const userInput = prompt("Введіть рядок:");

// if (userInput) {
//   const words = userInput.split(" ");
//   const capitalizedWords = words.map(capitalize);

//   const result = capitalizedWords.join(" ");

//   console.log(result);
// } else {
//   console.log("Рядок порожній.");
// }
// }

// // Filter Lexics
// {
//   const arrWords = ["блін", "капець", "чортик"];

//   const userInput = prompt("Введіть рядок:");

//   if (userInput) {
//     const words = userInput.split(" ");
//     const filteredWords = words.filter((word) => !arrWords.includes(word));

//     const result = filteredWords.join(" ");

//     console.log(result);
//   } else {
//     console.log("Рядок порожній.");
//   }
// }

// // Beep Lexics
// {
//   const arrWords = ["блін", "капець", "чортик"];

//   const userInput = prompt("Введіть рядок:");

//   if (userInput) {
//     const words = userInput.split(" ");
//     const result = words
//       .map((word) => (arrWords.includes(word) ? "BEEP" : word))
//       .join(" ");

//     console.log(result);
//   } else {
//     console.log("Рядок порожній.");
//   }
// }

// // Reduce HTML
// {
//   const currencies = ["USD", "EUR", "GBP", "UAH"];
//   let str = "<select>";

//   str += currencies.reduce(
//     (accumulator, currentValue) =>
//       accumulator + `<option>${currentValue}</option>`,
//     ""
//   );

//   str += "</select>";

//   document.write(str);
// }

// // For Brackets Hell Check
// {
// const line = prompt();
// const bracketsStack = [];
// let i = 0;

// for (const character of line) {
//     if (character === '[' || character === '{' || character === '(') {
//         bracketsStack.push({ bracket: character, index: i });
//     } else if (character === ']' || character === '}' || character === ')') {
//         if (bracketsStack.length === 0) {
//             console.log(`Error: Extra closing bracket at position ${i}`);
//             break;
//         }

//         const lastBracket = bracketsStack.pop();
//         if (
//             (character === ']' && lastBracket.bracket !== '[') ||
//             (character === '}' && lastBracket.bracket !== '{') ||
//             (character === ')' && lastBracket.bracket !== '(')
//         ) {
//             console.log(`Error: Mismatched brackets at position ${i}`);
//             break;
//         }
//     }
//     i++;
// }

// if (bracketsStack.length === 0) {
//     console.log('No bracket errors found!');
// } else {
//     console.log(`Error: Unclosed bracket at position ${bracketsStack[0].index}`);
// }
// }


// Дуже тяжко було робити це дз потрібно або повторити весь материал або в масивах розібратися