// // Arrow to Functions
// // 1 Temperature
// function convertTemperature(value, fromUnit, toUnit) {
//   if (
//     fromUnit.toLowerCase() === "celsius" &&
//     toUnit.toLowerCase() === "fahrenheit"
//   ) {
//     return (value * 9) / 5 + 32;
//   } else if (
//     fromUnit.toLowerCase() === "fahrenheit" &&
//     toUnit.toLowerCase() === "celsius"
//   ) {
//     return ((value - 32) * 5) / 9;
//   } else {
//     throw new Error("Invalid temperature conversion.");
//   }
// }

// let tempInFahrenheit = convertTemperature(20, "Celsius", "Fahrenheit");
// let tempInCelsius = convertTemperature(68, "Fahrenheit", "Celsius");

// // 2 RGB
// function rgbToHex(r, g, b) {
//   r = Math.max(0, Math.min(255, r));
//   g = Math.max(0, Math.min(255, g));
//   b = Math.max(0, Math.min(255, b));

//   const hexR = r.toString(16).padStart(2, '0');
//   const hexG = g.toString(16).padStart(2, '0');
//   const hexB = b.toString(16).padStart(2, '0');

//   return `#${hexR}${hexG}${hexB}`;
// }

// let colorHex = rgbToHex(30, 250, 40);

// // 3 Flats
// function findFlatDetails(flatNumber, flatsPerFloor, floorsPerEntrance) {
//   const flatsPerEntrance = flatsPerFloor * floorsPerEntrance;
//   const entrance = Math.ceil(flatNumber / flatsPerEntrance);
//   const flatIndexInEntrance = (flatNumber - 1) % flatsPerEntrance;
//   const floor = Math.floor(flatIndexInEntrance / flatsPerFloor) + 1;

//   return { entrance, floor };
// }

// let flatDetails = findFlatDetails(15, 3, 6);
// console.log(flatDetails);

// // 4 Credentials
// function capitalize(string) {
//   if (string) {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//   }
//   return '';
// }

// function collectCredentials() {
//   const name = prompt("Введіть ваше ім'я");
//   const surname = prompt('Введіть ваше прізвище:');
//   const fatherName = prompt('Введіть ваше по батькові:');

//   const fullName = `${capitalize(surname)} ${capitalize(name)} ${capitalize(fatherName)}`;

//   return {
//     name: capitalize(name),
//     surname: capitalize(surname),
//     fatherName: capitalize(fatherName),
//     fullName: fullName
//   };
// }
// const credentials = collectCredentials();
// console.log(credentials);

// //5 New line
// function addNewLine(text) {
//   return text.replace(/\\n/g, "\n");
// }

// const inputText = "Цей рядок містить \\n спеціальні символи для \\n переносів.";
// const formattedText = addNewLine(inputText);
// console.log(formattedText);

// // createPerson
// {
//   function createPerson(name, surname) {
//     return {
//       name,
//       surname,
//       getFullName() {
//         let str = "";
//         Object.values(this).forEach((value) => {
//           if (typeof value !== "function") {
//             str += `${value} `;
//           }
//         });
//         return str;
//       },
//     };
//   }

//   const a = createPerson("Вася", "Пупкін");
//   const b = createPerson("Ганна", "Іванова");
//   const c = createPerson("Єлизавета", "Петрова");

//   console.log(a.getFullName()); //Вася Пупкін
//   a.fatherName = "Іванович";
//   console.log(a.getFullName()); //Вася Іванович Пупкін

//   console.log(b.getFullName()); //Ганна Іванова
// }

// // createPersonClosure
// const createPersonClosure = (name, surname) => {
//   let fatherName;
//   let age;

//   function checkText(char) {
//     return !!char.match(/[A-ZА-Я]/);
//   }

//   function getName() {
//     return name;
//   }
//   function getSurname() {
//     return surname;
//   }
//   function getFatherName() {
//     return fatherName;
//   }
//   function getAge() {
//     return age;
//   }
//   function getFullName() {
//     return `${surname} ${name} ${fatherName}`;
//   }
//   function setName(newName) {
//     if (checkText(newName[0])) {
//       name = newName;
//     }
//     return name;
//   }
//   function setSurname(newName) {
//     if (checkText(newName[0])) {
//       surname = newName;
//     }
//     return surname;
//   }
//   function setFatherName(newName) {
//     if (checkText(newName[0])) {
//       fatherName = newName;
//     }
//     return fatherName;
//   }
//   function setAge(newAge) {
//     if (newAge >= 0 && newAge <= 100) {
//       age = age;
//     }
//     return age;
//   }
//   function setFullName(newFullName) {
//     const [newSurname, newName, newFatherName] = newFullName.split(" ");

//     if (checkText(newSurname[0])) {
//       surname = newSurname;
//     }
//     if (checkText(newName[0])) {
//       name = newName;
//     }
//     if (checkText(newFatherName[0])) {
//       fatherName = newFatherName;
//     }
//     return getFullName();
//   }

//   return {
//     getName,
//     getSurname,
//     getFatherName,
//     getAge,
//     getFullName,
//     setName,
//     setSurname,
//     setFatherName,
//     setAge,
//     setFullName,
//   };
// };

// const a = createPersonClosure("Вася", "Пупкін");
// const b = createPersonClosure("Ганна", "Іванова");
// a.setName("Maks");
// console.log(a.getName());
// a.setAge(15);
// a.setAge(150); //не працює

// b.setFullName("Петрова Ганна Миколаївна");
// console.log(b.getFatherName()); //Миколаївна

// // createPersonClosureDestruct
// function createPersonClosureDestruct({ name = "", surname = "" } = {}) {
//   return {
//     name: name,
//     surname: surname,
//     getFullName: function () {
//       return (
//         this.name +
//         " " +
//         (this.fatherName ? this.fatherName + " " : "") +
//         this.surname
//       );
//     },
//   };
// }
// const a = createPersonClosureDestruct(createPerson("Вася", "Пупкін"));
// const b = createPersonClosureDestruct({ name: 'Миколай', age: 75 });

// console.log(a.getFullName()); // Вася Пупкін
// console.log(b.getFullName()); // Миколай

// // isSorted
// function isSorted(...args) {
//   if (args.length < 2) {
//     return true;
//   }
//   for (let i = 1; i < args.length; i++) {
//     if (typeof args[i] !== 'number' || args[i] <= args[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSorted(1, 2, 3, 4, 5)); // true
// console.log(isSorted(5, 4, 3, 2, 1)); // false
// console.log(isSorted(1, 2, 'a', 4, 5)); // false

// // Test isSorted
// const readlineSync = require("readline-sync");

// function isSorted(...args) {
//   if (args.length < 2) {
//     return true;
//   }
//   for (let i = 1; i < args.length; i++) {
//     if (typeof args[i] !== "number" || args[i] <= args[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// function inputArray() {
//   const arr = [];
//   let input;

//   while (true) {
//     input = readlineSync.question("Введіть число (або Enter, щоб завершити): ");

//     if (input === "") {
//       break;
//     }
//     const number = parseFloat(input);
//     if (!isNaN(number)) {
//       arr.push(number);
//     } else {
//       console.log("Введено неправильне число. Спробуйте ще раз.");
//     }
//   }
//   return arr;
// }
// const array = inputArray();
// console.log("Масив:", array);
// console.log("Чи впорядкований масив?", isSorted(...array));

// // personForm
// function personForm(parent, person) {
//   const nameInput = document.createElement("input");
//   const surnameInput = document.createElement("input");
//   const fatherNameInput = document.createElement("input");
//   const ageInput = document.createElement("input");
//   const fullNameInput = document.createElement("input");

//   nameInput.type = "text";
//   surnameInput.type = "text";
//   fatherNameInput.type = "text";
//   ageInput.type = "number";
//   fullNameInput.type = "text";

//   nameInput.value = person.getName();
//   surnameInput.value = person.getSurname();
//   fatherNameInput.value = person.getFatherName();
//   ageInput.value = person.getAge();
//   fullNameInput.value = person.getFullName();

//   parent.appendChild(nameInput);
//   parent.appendChild(surnameInput);
//   parent.appendChild(fatherNameInput);
//   parent.appendChild(ageInput);
//   parent.appendChild(fullNameInput);

//   nameInput.oninput = () => {
//     person.setName(nameInput.value);
//     nameInput.value = person.getName();
//     fullNameInput.value = person.getFullName();
//   };

//   surnameInput.oninput = () => {
//     person.setSurname(surnameInput.value);
//     surnameInput.value = person.getSurname();
//     fullNameInput.value = person.getFullName();
//   };

//   fatherNameInput.oninput = () => {
//     person.setFatherName(fatherNameInput.value);
//     fatherNameInput.value = person.getFatherName();
//     fullNameInput.value = person.getFullName();
//   };

//   ageInput.oninput = () => {
//     person.setAge(ageInput.value);
//     ageInput.value = person.getAge();
//   };

//   fullNameInput.oninput = () => {
//     const [surname, name, fatherName] = fullNameInput.value.split(" ");
//     person.setSurname(surname);
//     person.setName(name);
//     person.setFatherName(fatherName);
//     surnameInput.value = person.getSurname();
//     nameInput.value = person.getName();
//     fatherNameInput.value = person.getFatherName();
//     fullNameInput.value = person.getFullName();
//   };
// }

// const parentElement = document.getElementById("parent");
// const person = createPersonClosure("Ганна", "Іванова");
// person.setAge(15);
// person.setFullName("Петрова Ганна Миколаївна");

// personForm(parentElement, person);

// getSetForm
function getSetForm(parent, getSet) {
  const inputs = {};

  const updateInputs = () => {
    for (const key in inputs) {
      const getValueMethod = `get${key}`;
      const setValueMethod = `set${key}`;
      const input = inputs[key];
      if (getSet.hasOwnProperty(getValueMethod)) {
        input.value = getSet[getValueMethod]();
      }
      input.oninput = () => {
        if (getSet.hasOwnProperty(setValueMethod)) {
          getSet[setValueMethod](input.value);
          input.value = getSet[getValueMethod]();
        }
      };
    }
  };

  for (const key in getSet) {
    if (key.startsWith("get")) {
      const fieldName = key.substring(3);
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = fieldName;
      parent.appendChild(input);
      inputs[fieldName] = input;
    }
  }

  updateInputs();
}

getSetForm(document.body, car);