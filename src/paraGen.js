const fs = require("fs");

let wordsArray = fs
  .readFileSync("./src/englishTopThousand.txt", "utf-8")
  .split("\n");

let topTwenty = wordsArray.slice(0, 20);
let twentyWeight = new Array(10).fill(topTwenty).flat();

let topHundred = wordsArray.slice(0, 100);
let hundredWeight = new Array(5).fill(topHundred).flat();

wordsArray = wordsArray.concat(twentyWeight, hundredWeight);

let randomNumber = (max) => Math.floor(Math.random() * max);

let getWord = () => wordsArray[randomNumber(wordsArray.length)];

export function generatePara(numberOfWords) {
  let paragraph = [];

  for (let i = 0; i < numberOfWords; i++) {
    paragraph.push(getWord());
  }

  return paragraph.join(" ");
}
