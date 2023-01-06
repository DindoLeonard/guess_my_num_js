"use strict";
/*
const element = document.querySelector(".this-text");

element.classList.add("dark");
console.log(element.textContent);

element.textContent = "Modified text";

console.log(element);

function thisFunction() {
  console.log("click");
  document.querySelector(".dark").textContent = "Clicked";
}

document.querySelector(".dark").addEventListener("click", thisFunction);

const helloElement = document.querySelector("#hello");
console.log(helloElement);

// select using getElementById
const helloElement2 = document.getElementById("hello");
console.log(helloElement2);

helloElement2.addEventListener("click", function () {
  console.log("click2");
  helloElement2.classList.add("blue");

  element.classList.add("white");
  element.textContent = "Initial";
});
*/

// messagehere
const messageElement = document.querySelector(".message-here");
// checkinput
const checkInputElement = document.querySelector(".check-input");
// checkbutton
const checkButtonElement = document.querySelector(".check-button");
// score
const scoreElement = document.querySelector(".hello-class");
// secretNumberElement
const secretElement = document.querySelector(".secret-number");
// again button
const againButtonElement = document.querySelector(".again");
// body element
const bodyElement = document.querySelector("body");
// high score
const highScoreElement = document.querySelector(".high-score");

// state
let secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 20;
let highscore = 0;

scoreElement.textContent = score;
secretElement.textContent = secretNumber;
highScoreElement.textContent = highscore;

checkButtonElement.addEventListener("click", function () {
  const guessNumber = Number(checkInputElement.value);
  if (!checkInputElement.value) {
    messageElement.textContent = "no number";

    return;
  }
  if (guessNumber === secretNumber) {
    messageElement.textContent = "You win";
    bodyElement.style.backgroundColor = "green";
    secretElement.textContent = secretNumber;
    console.log(secretNumber);

    if (score > highscore) {
      highscore = score;
      highScoreElement.textContent = highscore;
    }
    return;
  }

  if (guessNumber !== secretNumber) {
    //
    score = score - 1;
    messageElement.textContent =
      guessNumber > secretNumber ? "Too high" : "Too low";

    scoreElement.textContent = score;

    if (score < 1) {
      messageElement.textContent = "Lose";
      scoreElement.textContent = 0;
      return;
    }
  }
  // if (guessNumber > secretNumber) {
  //   messageElement.textContent = "Too high";
  //   score = score - 1;
  //   console.log("score", score);
  //   scoreElement.textContent = score;
  //   if (score < 1) {
  //     messageElement.textContent = "Lose";
  //     scoreElement.textContent = 0;
  //     return;
  //   }
  //   return;
  // }
  // if (guessNumber < secretNumber) {
  //   messageElement.textContent = "Too low";
  //   score = score - 1;
  //   console.log("score", score);
  //   scoreElement.textContent = score;
  //   if (score < 1) {
  //     messageElement.textContent = "Lose";
  //     scoreElement.textContent = 0;
  //     return;
  //   }
  //   return;
  // }
});
againButtonElement.addEventListener("click", function () {
  // state
  secretNumber = Math.trunc(Math.random() * 100 + 1);
  score = 20;

  // ui
  bodyElement.style.backgroundColor = "#444";
  secretElement.textContent = "?";
  checkInputElement.value = "";
  scoreElement.textContent = score;
});
