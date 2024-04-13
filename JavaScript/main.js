// // Literals
// {
//   const person = {
//     name: "Maksym",
//     age: 19,
//     gender: "Male"
//   };
//   console.log(person);

  // const car = {
  //   brand: "Audi",
  //   model: "RS7",
  //   year: 2021,
  //   color: "black"
  // };
  // console.log(car);
// }

// // Literals expand
// {
//   {
//     const person = {
//       name: "Maksym",
//       age: 19,
//       gender: "Male",
//     };
    
//     const newPropertyName1 = prompt("Введіть назву першої властивості:");
//     const newPropertyValue1 = prompt("Введіть значення для першої властивості:");
//     person[newPropertyName1] = newPropertyValue1;
    
//     const newPropertyName2 = prompt("Введіть назву другої властивості:");
//     const newPropertyValue2 = prompt("Введіть значення для другої властивості:");
//     person[newPropertyName2] = newPropertyValue2;
//     console.log(person);
//   };
//   {
//     const car = {
//       brand: "Audi",
//       model: "RS7",
//       year: 2021,
//       color: "black",
//     };
    
//     const newPropertyName1 = prompt("Введіть назву першої властивості:");
//     const newPropertyValue1 = prompt("Введіть значення для першої властивості:");
//     car[newPropertyName1] = newPropertyValue1;
    
//     const newPropertyName2 = prompt("Введіть назву другої властивості:");
//     const newPropertyValue2 = prompt("Введіть значення для другої властивості:");
//       car[newPropertyName2] = newPropertyValue2;
//       console.log(car);
//   };
// }

// // Literals copy
// {
//     const person = {
//       name: "Maksym",
//       age: 19,
//       gender: "Male",
//     };
    
//     const newPropertyName1 = prompt("Введіть назву першої властивості:");
//     const newPropertyValue1 = prompt("Введіть значення для першої властивості:");
//     person[newPropertyName1] = newPropertyValue1;
    
//     const newPropertyName2 = prompt("Введіть назву другої властивості:");
//     const newPropertyValue2 = prompt("Введіть значення для другої властивості:");
//     person[newPropertyName2] = newPropertyValue2;
  
//     const newPropertyName3 = prompt("Введіть назву третьої властивості:");
//     const newPropertyValue3 = prompt("Введіть значення для третьої властивості:");
//     person[newPropertyName3] = newPropertyValue3;

//   const newPerson = Object.assign({}, person);
//     console.log(newPerson);
// }

// // Html tree
// {
//   const htmlTree = {
//     tagName: "body",
//     children: [
//       {
//         tagName: "div",
//         children: [
//           {
//             tagName: "span",
//             children: ["Enter a data please:"],
//           },
//           {
//             tagName: "br",
//           },
//           {
//             tagName: "input",
//             attrs: {
//               type: "text",
//               id: "name",
//             },
//           },
//           {
//             tagName: "input",
//             attrs: {
//               type: "text",
//               id: "surname",
//             },
//           },
//         ],
//       },
//       {
//         tagName: "div",
//         children: [
//           {
//             tagName: "button",
//             attrs: {
//               id: "ok",
//             },
//             children: ["OK"],
//           },
//           {
//             tagName: "button",
//             attrs: {
//               id: "cancel",
//             },
//             children: ["Cancel"],
//           },
//         ],
//       },
//     ],
//   };

//   const cancelButtonText = htmlTree.children[1].children[1].children[0];
//   console.log(cancelButtonText);

//   const surnameInputId = htmlTree.children[0].children[3].attrs.id;
//   console.log(surnameInputId);
// }

// // Parent
// {
//   const htmlTree = {
//     tagName: "body",
//     children: [
//       {
//         tagName: "div",
//         parent: "body",
//         children: [
//           {
//             tagName: "span",
//             parent: "div",
//             children: ["Enter a data please:"],
//           },
//           {
//             tagName: "br",
//             parent: "div",
//           },
//           {
//             tagName: "input",
//             parent: "div",
//             attrs: {
//               type: "text",
//               id: "name",
//             },
//           },
//           {
//             tagName: "input",
//             parent: "div",
//             attrs: {
//               type: "text",
//               id: "surname",
//             },
//           },
//         ],
//       },
//       {
//         tagName: "div",
//         parent: "body",
//         children: [
//           {
//             tagName: "button",
//             parent: "div",
//             attrs: {
//               id: "ok",
//             },
//             children: ["OK"],
//           },
//           {
//             tagName: "button",
//             parent: "div",
//             attrs: {
//               id: "cancel",
//             },
//             children: ["Cancel"],
//           },
//         ],
//       },
//     ],
//   };

//   function setParent(obj, parentName) {
//     if (obj.children) {
//       obj.children.forEach((child) => {
//         child.parent = parentName;
//         setParent(child, obj.tagName);
//       });
//     }
//   }

//   setParent(htmlTree, null);
//   console.log(htmlTree);
// }

// // Change OK
// {
//   const attributeName = prompt("Enter the attribute name:");
//   const attributeValue = prompt("Enter the attribute value:");
//   const htmlTree = {
//     tagName: "body",
//     children: [
//       {
//         tagName: "div",
//         parent: "body",
//         children: [
//           {
//             tagName: "span",
//             parent: "div",
//             children: ["Enter a data please:"],
//           },
//           {
//             tagName: "br",
//             parent: "div",
//           },
//           {
//             tagName: "input",
//             parent: "div",
//             attrs: {
//               type: "text",
//               id: "name",
//             },
//           },
//           {
//             tagName: "input",
//             parent: "div",
//             attrs: {
//               type: "text",
//               id: "surname",
//             },
//           },
//         ],
//       },
//       {
//         tagName: "div",
//         parent: "body",
//         children: [
//           {
//             tagName: "button",
//             parent: "div",
//             attrs: {
//               id: "ok",
//               [attributeName]: attributeValue,
//             },
//             children: ["OK"],
//           },
//           {
//             tagName: "button",
//             parent: "div",
//             attrs: {
//               id: "cancel",
//             },
//             children: ["Cancel"],
//           },
//         ],
//       },
//     ],
//   };

//   function setParent(obj, parentName) {
//     if (obj.children) {
//       obj.children.forEach((child) => {
//         child.parent = parentName;
//         setParent(child, obj.tagName);
//       });
//     }
//   }

//   setParent(htmlTree, null);
//   console.log(htmlTree);
// }

// // Destructure
// const htmlTree = {
//   tagName: "body",
//   children: [
//     {
//       tagName: "div",
//       children: [
//         {
//           tagName: "span",
//           children: ["Enter a data please:"],
//         },
//         {
//           tagName: "br",
//         },
//         {
//           tagName: "input",
//           attr: {
//             type: "text",
//             id: "name",
//           },
//         },
//         {
//           tagName: "input",
//           attr: {
//             type: "text",
//             id: "surname",
//           },
//         },
//       ],
//     },
//     {
//       tagName: "div",
//       children: [
//         { tagName: "button", attr: { id: "ok" }, children: ["Ok"] },
//         { tagName: "button", attr: { id: "cancel" }, children: ["Cancel"] },
//       ],
//     },
//   ],
// };

// {
//   const {
//     children: [
//       {
//         children: [
//           {
//             children: [text],
//           },
//         ],
//       },
//     ],
//   } = htmlTree;
//   console.log("span=>", text);


//   const {
//     children: [
//       ,
//       {
//         children: [
//           ,
//           {
//             children: [btnText],
//           },
//         ],
//       },
//     ],
//   } = htmlTree;
//   console.log("btn=>", btnText);


//   const {
//     children: [
//       {
//         children: [
//           ,
//           ,
//           ,
//           {
//             attr: { id },
//           },
//         ],
//       },
//     ],
//   } = htmlTree;
//   console.log("input=>", id);
// }

// // Destruct array
// let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
// let [odd1, even1, odd2, even2, odd3, ...letters] = arr;
// console.log(even1, even2);
// console.log(odd1, odd2, odd3);
// console.log(letters);

// // Destruct string
// let arr = [1, "abc"];
// let [number, [s1, s2, s3]] = arr;
// console.log(number, s1, s2, s3);

//   // Destruct 2
// {
//   const obj = {
//     name: "Ivan",
//     surname: "Petrov",
//     children: [{ name: "Maria" }, { name: "Nikolay" }],
//   };

//   const {
//     children: [{ name: name1 }, { name: name2 }],
//   } = obj;
//   console.log("names =>", name1, name2);
// }

// // Destruct 3
// {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 10];
//   let [a, b, lenght] = arr;
//   console.log(a, b, lenght);
// }

// // Copy delete
// {
//   const car = {
//     brand: "Audi",
//     model: "RS7",
//     year: 2021,
//     color: "black",
//   };

//   const { brand, ...rest } = car;
//   console.log(rest);
// }


// // Currency real rate
// {
//   fetch("https://open.er-api.com/v6/latest/USD")
//     .then((res) => res.json())
//     .then((data) => {
//       const inputCurrency = prompt("Enter input Currency").toUpperCase();
//       const outputCurrency = prompt("Enter output Currency").toUpperCase();
//       const amount = +prompt("Enter amount");
//       const { rates } = data;
//       const inputRate = rates[inputCurrency];
//       const outputRate = rates[outputCurrency];
//       if (inputRate && outputRate && !isNaN(amount)) {
//         const result = (amount * inputRate) / outputRate;
//         console.log("🚀 ~ .then ~ result==>>", result.toFixed(2));
//       } else {
//         console.log("Please enter correct data");
//       }
//     });
// }

// // Currency drop down
// {
// fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     const { rates } = data;
//     const currencyDropdown = document.createElement("select");
//     Object.keys(rates).forEach((currency) => {
//       const option = document.createElement("option");
//       option.value = currency;
//       option.textContent = currency;
//       currencyDropdown.appendChild(option);
//     });
//     document.body.appendChild(currencyDropdown);
//   });
// }

// // Currency table Виконав не вірно ((
// {
//   fetch("https://open.er-api.com/v6/latest/USD")
//   .then((res) => res.json())
//   .then((data) => {
//     const { rates } = data;
//     const currencies = Object.keys(rates);
//     const exchangeTable = document.createElement("table");
//     const headerRow = document.createElement("tr");
    
//     currencies.forEach((currency) => {
//       const headerCell = document.createElement("th");
//       headerCell.textContent = currency;
//       headerRow.appendChild(headerCell);
//     });
//     exchangeTable.appendChild(headerRow);
    
//     currencies.forEach((currency1) => {
//       const row = document.createElement("tr");
//       currencies.forEach((currency2) => {
//         const cell = document.createElement("td");
//         if (currency1 === currency2) {
//           cell.textContent = "1.00";
//         } else {
//           const rate = (rates[currency2] / rates[currency1]).toFixed(4);
//           cell.textContent = rate;
//         }
//         row.appendChild(cell);
//       });
//       exchangeTable.appendChild(row);
//     });
    
//     document.body.appendChild(exchangeTable);
//   });
// }

// // Form
// {
// const car = {
//   Name: "chevrolet chevelle malibu",
//   Cylinders: 8,
//   Displacement: 307,
//   Horsepower: 130,
//   Weight_in_lbs: 3504,
//   Origin: "USA",
//   in_production: false,
// };

// const form = document.createElement("form");

// for (const key in car) {
//   const label = document.createElement("label");
//   label.textContent = `${key}: `;
//   const input = document.createElement("input");
//   input.setAttribute(
//     "type",
//     typeof car[key] === "number"
//       ? "number"
//       : typeof car[key] === "boolean"
//       ? "checkbox"
//       : "text"
//   );
//   input.setAttribute("value", car[key]);
//   label.appendChild(input);
//   form.appendChild(label);
// }

// document.body.appendChild(form);
// }

// // Table
// {
// const persons = [
//   {
//     name: "Марія",
//     fatherName: "Іванівна",
//     surname: "Іванова",
//     sex: "female",
//   },
//   {
//     name: "Миколай",
//     fatherName: "Іванович",
//     surname: "Іванов",
//     age: 15,
//   },
//   {
//     name: "Петро",
//     fatherName: "Іванович",
//     surname: "Іванов",
//     married: true,
//   },
// ];

// const table = document.createElement("table");
// table.setAttribute("border", "1");

// const headerRow = document.createElement("tr");
// for (const key in persons[0]) {
//   const th = document.createElement("th");
//   th.textContent = key;
//   headerRow.appendChild(th);
// }
// table.appendChild(headerRow);

// for (const person of persons) {
//   const row = document.createElement("tr");
//   for (const key in person) {
//     const td = document.createElement("td");
//     td.textContent = person[key];
//     row.appendChild(td);
//   }
//   table.appendChild(row);
// }

// document.getElementById("table-container").appendChild(table);
// }