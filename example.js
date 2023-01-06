"use strict";

namedFunction();

const example = "Dindo's\"";

function addTwoNumber(x, y) {
  const firstNumber = x;
  const secondNumber = y;

  console.log(firstNumber + secondNumber);
}

function multiplyTwoNumber(x, y) {
  const firstNumber = x;
  const secondNumber = y;

  console.log(firstNumber * secondNumber);

  2030 - 1992 > 2030 - 2018;
}

addTwoNumber(3, 6);

addTwoNumber(4, 5);

multiplyTwoNumber(2, 3);

const first = "jonas";
const last = "schmetnab";
console.log(first + " " + last);

const me = `I'm ${first}`;

const birthYear = 1998;

// exist
let century;

if (birthYear <= 2000) {
  century = 20;
  console.log("hello");
} else {
  century = 21;
  console.log("world");
}

// if condition statement
if (century < 21) {
  // if condition is true, it will go here
} else {
  // if condition is false it will go here
}

console.log(century);

const something = undefined;

let user;
if (!user) {
  // fetch user
  user = "fetched-user";
}

// const year = prompt("what year?");
const year = 2022;
console.log("year variable", year);
console.log("truthy/falsy", year === 2020);
console.log("prompt", prompt);

if (year === 2020) {
  const year2 = Number(year);
  console.log("if");
} else {
  console.log("else");
}

function add(s) {
  if (s === 2) {
    return s + "";
  }
  return s + 2;
}

const xe = add();
//

let userA = "sadsad";

if (!userA) {
  userA = "user";
} else {
  console.log("user is already logged in");
}

const a = true;
const b = true;
const c = false;
// && === AND
// || === OR
console.log(a && b); // true
console.log(a && c); // false
console.log(!c && a); // true
console.log(a || c); // true
console.log(c || c); // false
console.log((a && c) || (c && c)); // false
console.log(((!c || c) && a && b) || a); // true
console.log((c && a) || b); // true

const hisName = "duterte";
const profession = "president";
const age = 70;
const appearance = "tinawong";
const bad = false;

// the clients wants a president named duterte
// the client wants a president with the age below 50
// if president is handsome, acccept
// if not bad, accept

if (
  (hisName === "duterte" && profession === "president" && age < 50) ||
  appearance !== "handsome" ||
  !bad
) {
  console.log("dawat");
} else {
  console.log("sorry");
}

// console.log(userA);

// && === AND
// || === OR
// ! === NOT
const e = true;
const f = true;
const g = false;

console.log(e && f); //
console.log(!e && !g); //

const averageDolp = 9.1;
const averageKoal = 9.2;

// if dolphin has higher, dolphin wins
if (averageDolp > averageKoal && averageDolp >= 100) {
  console.log("Dolphin wins");
  // if koala has higher, koala wins
} else if (averageKoal > averageDolp && averageKoal >= 100) {
  console.log("Koala wins");
  // if both are the same, and both are above 100, draw
} else if (
  averageDolp === averageKoal &&
  averageDolp >= 100 &&
  averageKoal >= 100
) {
  console.log("draw");
  // if no one is above 100, all lose
} else {
  console.log("no one wins");
}

const day = "monday";
// if monday === mon
if (day === "monday") {
  console.log("mon");
}
// if tuesday === tue
else if (day === "tuesday") {
  console.log("tue");
}
// if wednesday ug thursday === 'wed or thur'
else if (day === "wednesday" || day === "thursday") {
  console.log("wed or thur");
}
// if friday === 'fri'
else if (day === "friday") {
  console.log("fri");
}
// if sat or sunday === 'weekend'
else if (day === "saturday" || day === "sunday") {
  console.log("weekend");
}

const fruit = "apple";
let colorYellow;

colorYellow = fruit === "mango" ? true : false;

const thisNumberEqualTrue = 0;

// TERNARY
const p = thisNumberEqualTrue === 5 ? console.log("five") : console.log("");

if (fruit === "mango") {
  colorYellow = true;
} else {
  colorYellow = false;
}

const cat = "Tiger";
// expression: "yes" || "no"
const isThisATiger = cat === "Tiger" ? "yes" : "no";

console.log(isThisATiger);

const billValue = 275;

const tipPercent = billValue >= 50 && billValue <= 300 ? 15 : 20;

const tipValue = billValue * (tipPercent / 100); // 0.15 or 0.20

const finalValue = billValue + tipValue;

console.log(
  `The bill was ${billValue}, and the tip was ${tipValue}, and the total value ${finalValue}`
);

async function thisWillFetch(text, number, boolean) {
  try {
    const data = await fetch("http://server.com");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// A. get the bill value
const bill = 275;

// B. get the tip value (20, 15)
// 1. get tip percent
// 2. to get percent, divide tip percent by 100, will result to either 0.20 or 0.15;
// B.1 identify if bill is taxed 15% or 20%
const tip = bill >= 50 && bill <= 300 ? 15 : 20;
const tipPercentx = tip / 100;
// 3. multiply bill value to tip percent to get the tip value
const tipValuex = bill * tipPercentx;

const finalValuex = tipValuex + bill;
// C. get final value by adding bill + tip

// calculate how many electron in an atom
function add(num1, num2) {
  return num1 + num2;
}

function addAnotherNumbers(num1, num2, num3, num4) {
  return add(num1, num2) + add(num3, num4);
}

const thisIsAFunction = () => {};

const catchThisFunction = () => {};

add(2, 3);

function printThis(name1, name2) {
  console.log("name1 = ", name1);
  console.log("name2= ", name2);
}

printThis("Dindo", "Rafa");
printThis("Maelkit", "Kitkat");
printThis("Guada", "Prinvess");

add(20, 5);
add(39, 6);

function anotherFunction() {
  return "hello";
}

function logThisValue(nameParameter) {
  // nameParameter === 'Kitkat'
  const helloStringVariable = anotherFunction();
  const sentence = `${helloStringVariable} ${nameParameter}`;
  return sentence;
}

const xx = logThisValue("Kitkat");
console.log(xx);

// make a function that will take a string as parameter, add the word ", hi" to the string then return it
function printThisName(nameValue) {
  return `${nameValue}, hi`;
}

const nameVariable = printThisName("Vivo");

console.log(nameVariable);

const x = function xx(params) {
  console.log(params);
};

if (
  function xx(params) {
    console.log(params);
  }
) {
  console.log("here");
}

x("hellloo");

// use the function and add any string as arguments, and put the return value of that function in a variable

// print the variable in the console

function namedFunction() {
  console.log("name");
}

const boggart = function boggart2() {
  console.log("boggart");
};

boggart();

// function() {}
// () => {}
const arrF = () => {};
const arrF2 = function () {};

const getTeamByCompanyId = async (companyId, next) => {
  try {
    const currentUserTeam = await findOne({ companyId });

    if (!currentUserTeam) {
      throw new ErrorResponse("No user found", 404);
    }

    return currentUserTeam;
  } catch (e) {
    next(e);
    return null;
  }
};
