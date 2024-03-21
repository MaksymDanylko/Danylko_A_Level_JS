  // String: greeting
  {
    let userName = prompt(`Будь ласка, введіть своє ім'я:`);
    alert(`Привіт `+ userName +`! Як справи?`);
  }

  // String: gopni4ek
  {
    let inputString = prompt("Будь ласка, введіть рядок:");

    // inputString.replaceAll(",", "блін, ") що тут не так?

    // це чат gpt допоміг
    let modifiedString = inputString.split(",").join("блін, ");

    alert("Результат: " + modifiedString);
  }

  // String: capitalize;
  {
    let str = "cANBerRa";
    let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    console.log(result);
  }

  // String: word count
  {
    let inputString = prompt("Будь ласка, введіть рядок:");
    let wordsArray = inputString.split(" ");
    let wordCount = wordsArray.length;

    console.log("Кількість слів у рядку:", wordCount);
  }

  // String: credentials
  {
    String.prototype.capitalize = function () {
      return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    };

    let firstName = prompt("Будь ласка, введіть ваше ім'я:");
    let lastName = prompt("Будь ласка, введіть ваше прізвище:");
    let middleName = prompt("Будь ласка, введіть ваше по батькові:");

    firstName = firstName.trim().capitalize();
    lastName = lastName.trim().capitalize();
    middleName = middleName.trim().capitalize();

    let fullName = firstName + " " + lastName + " " + middleName;

    console.log(fullName);
  }

  // String: beer
  {
    let str = "Було жарко. Василь пив пиво вприкуску з креветками";
    let result = str.split('пиво').join('чай');

    console.log(result);
  }
  // String: no tag
  // не впевнений що вірно зробив(
  {
    let str =(`.br`);
    let tagStartIndex = str.indexOf("<");
    let tagEndIndex = str.indexOf(">");
    let result = str.slice(0, tagStartIndex) + str.slice(tagEndIndex + 1);

    console.log(result);
  }
  // String: big tag
  // я так розумыю я щось не правильно зробив знову(
  {
    let str = `.br`;
    let tagStartIndex = str.indexOf("<");
    let tagEndIndex = str.indexOf(">");
    let tag = str.slice(tagStartIndex, tagEndIndex + 1);
    let result =
      str.slice(0, tagStartIndex) +
      tag.toUpperCase() +
      str.slice(tagEndIndex + 1);

    console.log(result); 
  }
  // String: new line
  {
    let input = prompt("Будь ласка, введіть рядок з використанням '\\n' для нового рядка:");

    let multiLineText = input.split("\\n").join("\n");

    console.log(multiLineText);
  }
// String: youtube
// і да тут також щось не так а я не розумію що
{
  const youtubeRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  let userInput = prompt("Будь ласка, введіть текст із посиланням на YouTube:");
  let videoId = userInput.match(youtubeRegex)[1];
  let embeddedVideoHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
  document.write(embeddedVideoHTML);
}
// Тарас Можна буде з тобою поспілкуватися один на один після заннятя буду вдячний