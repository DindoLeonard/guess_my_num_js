"use strict";

console.log("loop");

const exampleArr = ["a", "d", "e", "f", "i", "n", "o", "p", "u", "z"];

// for (<counter>; <condition>; <incrementor>)
// will loop as long as condition is true
// for (let i = 0; i < exampleArr.length; i = i + 1) {
//   console.log(exampleArr[i]);
//   console.log(exampleArr);
//   if (exampleArr = 'a') {
//     //
//   }
// }

console.log(exampleArr);

// make array of lowercased alphabet letters
// loop through array, change the element of array if the element is vowel, capitalize the element

// divisible by 2

// coding_challenge: FIZZBUZZ
// loop from 1 to 100,
// if the loop counter is divisible by 3, print "Fizz" in the console
// if the loop counter is divisible by 5, print "Buzz" in the console
// if the loop counter is divisible by both 3 and 5, print "FizzBuzz" in the console
// if the rules does not apply, just print the counter number in the console

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

for (let i = 1; i <= 100; i++) {
  let message;

  if (i % 3 === 0 && i % 5 === 0) {
    message = "FizzBuzz";
  } else if (i % 5 === 0) {
    message = "Buzz";
  } else if (i % 3 === 0) {
    message = "Fizz";
  } else if (i % 7 === 0) {
    message = "Bazz";
  } else {
    message = String(i);
  }
}

const forBreakAndContinue = [1, 2, 3, 4, 5];

console.log("CONTINUE EXAMPLE");
for (let i = 0; i < forBreakAndContinue.length; i++) {
  // if it is number 3 it will skip and continue to the next iteration
  if (forBreakAndContinue[i] === 3) {
    continue;
  }
  console.log(forBreakAndContinue[i]);
}

console.log("BREAK EXAMPLE");
for (let i = 0; i < forBreakAndContinue.length; i++) {
  // if it is number 2, it will break and exit the loop
  if (forBreakAndContinue[i] === 2) {
    break;
  }
  console.log(forBreakAndContinue[i]);
}

// CREATE ARRAY OF EXERCISES
// example:
//    const exercises = ['jog', 'jumping jacks', 'pushups']
// LOOP THROUGH ARRAY AND PRINT THE EXERCISE
// CREATE 5 REPS USING ANOTHER LOOP INSIDE EACH EXERCISE ITERATION
/*
RESULT IN CONSOLE
jog
rep 1
.
.
rep5
jumping jacks
rep 1
.
.
rep 5
.
.
.

*/

// Math.random()
// numbers from 0.00000000001 -> 0.9999999999

// while loop example
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`end - ${dice}`);
  }
}

// for loop
// each iteration: calcTip(element)
// inside calcTip:
//    => get tip, push to tips
//    => get total, push totals

// bonus: totals must be completed
// create calcAverage function that takes array as argument
/*

calcAverage(arr) {
  let sum;
  let arrLength = arr.length

  for loop the arr
  -> sum += element of arr

  once for loop is done
  -> sum already has value
  -> average = sum/arrLength
  -> return average
}

*/

const bills = [124, 431, 12, 44, 11];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  if (bill > 50 && bill < 300) {
    const tip = bill * 0.15;
    const total = tip + bill;
    tips.push(tip);
    totals.push(total);
  } else {
    const tip = bill * 0.2;
    const total = tip + bill;
    tips.push(tip);
    totals.push(total);
  }
};

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]); // call function
}

console.log(tips);
console.log(totals);

const calcAverage = (arrOfBill) => {
  const arrLength = arrOfBill.length;
  let sum = 0;

  for (let i = 0; i < arrOfBill.length; i++) {
    sum = sum + arrOfBill[i];
  }

  const average = sum / arrLength;
  console.log(average);
};

calcAverage(bills);
