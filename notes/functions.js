"use strict";

// function declaration can be accessed anywhere in the file if it is in the root
console.log(declaration("Hello"));

// expression
const y = function (params) {
  return params;
};

// declaration
function declaration(params) {
  return params;
}

// arrow
const xx = (params) => {
  return params;
};

// expression
() => {
  console.log("HEy");
};

const returnExample = (params) => {
  if (params === "HELLO") {
    return params + " Hi";
  } else {
    return 123; // exit
  }

  return 456;
};

const what = returnExample("HELLO");
console.log(what);

const addTwoNumber = (num1, num2) => {
  if (num1 === 1) {
    return;
  }
  return num1 + num2;
};

console.log(addTwoNumber(1, 3));

// 1 create arrow function to calculate average
const calcAverage = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
};

// 2 calculate average of both team's score
const averageDolphin = calcAverage(44, 23, 71);
const averageKoala = calcAverage(65, 54, 49);

// 3
const checkWinner = (avgDolph, avgKoal) => {
  if (avgDolph > avgKoal) {
    console.log(`Dolphin Win (${avgDolph} vs. ${avgKoal})`);
    return;
  }

  if (avgKoal > avgDolph) {
    console.log(`Koala Win (${avgDolph} vs. ${avgKoal})`);
    return;
  }

  console.log("No one wins");
};

checkWinner(averageDolphin, averageKoala);

const exampleFunction = (a, b) => {
  //
  return a + b;
};

exampleFunction(1, 2);

const addTwoNumbersValue = exampleFunction(3, 5);
console.log(addTwoNumbersValue); // 8

// where is the function name
// where is the parameters
// where is the arguments
// where is the returned value

/**
 * QUIZ
 */
/*
1. Create a function that takes an array of number as its paramter
2. get the 2nd index of the array and multiply it by 5 and return the value
3. use the function and store the returned value in a variable
4. print/log the variable in the console
*/

const returnSecondIndexOfArrayAndMultiplyByFive = (numberArray) => {
  return numberArray[1] * 5;
};

const numberResult = returnSecondIndexOfArrayAndMultiplyByFive([2, 4, 6, 7]);

console.log("result", numberResult);

// create a function that takes 2 parameters
// - the first parameter is a number
// - the second parameter is an array of numbers
// add condition: if the first parameter is more than 10, return null
// get the first parameter and add 5, store in a variable called "firstResult"
// get the last index of the 2nd parameter, store in a a variable called "secondResult"
// multiply both of variables together and return the value
// print the returned value in the console
// use the function twice using different arguments

const takeTwoParamsFunction = (num, arrNum) => {
  if (num > 10) {
    return null;
  }

  const firstResult = num + 5;
  const secondResult = arrNum[arrNum.length - 1];

  return firstResult * secondResult;
};

const result1 = takeTwoParamsFunction(3, [1, 3, 5]);
const result2 = takeTwoParamsFunction(11, [1, 10]);
console.log(result1, result2);
