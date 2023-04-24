/** @returns string */
const test = function (inputString) {
  const list = new Set(["so", "ko", "ta", "qa", "goo"]);
  const regex = /ta'([a-zA-Z]+) ([0-9]+)/g;
  inputString = inputString.toLowerCase();

  const currentString = inputString.match(regex);

  if (currentString) {
    const [str, num] = currentString[0].split(" ");
    const imp = str.slice(3, str.length);

    return `${imp} ${num}`;
  } else {
    return "0";
  }
};

console.log(test("DUN 'Ej QAD Je pAtLh TLhOQ ta'tAasdadsadads 4941313132 PuS WoVBe' SICh HuD,"));
