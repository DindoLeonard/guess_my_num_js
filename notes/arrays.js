"use strict";

console.log("FROM ARRAY.js");

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 555, 213123,
  213123, 123123,
];

console.log(arr.length);
const lastIndex = arr.length - 1;
console.log(arr[lastIndex]);

//

function returnLastIndexOfArrayFunction(array) {
  return array[array.length - 1];
}

const result = returnLastIndexOfArrayFunction(arr);
console.log("here", result);

function firstFunction(whatIsThis) {
  return whatIsThis[2];
}

function callAnotherFunction(thisValue) {
  return thisValue;
  //   return thisValue;
}

const thisFn = callAnotherFunction(firstFunction);
const result2 = thisFn(["a", "b", "c"]);
console.log(result2);

// const varname1 = firstFunction("sadjsakdj");
// firstFunction(["sad", "asdsa"]);
// firstFunction(null);
// firstFunction();

function exampleFn(v, m, num, x) {
  console.log("v", v);
  console.log("m", m);
  console.log("num", num);
  console.log("x", x);
  if (x === "z") {
    return;
  }
  const firstNum = v[2];
  console.log("firstNum", firstNum);
  const secondNum = m[1];
  console.log("secondNum", secondNum);
  const thirdNum = num;
  console.log("thirdNum", thirdNum);

  return firstNum + secondNum - thirdNum;
}

const result3 = exampleFn([3, 6, 4], [6, 8], 5, null);
console.log("answer", result3);

function thisFunction(a, b, c, d) {
  console.log("1");
  if (typeof a === "string") {
    console.log("2");
    return;
  }
  console.log("3");
  if (typeof b === "object") {
    console.log("4");
    return;
  }
  console.log("5");
  if (typeof c === "number") {
    console.log("6");
    return;
  }
  console.log("7");
  if (typeof d === "string") {
    console.log("8");
    return;
  }
  console.log("9");
  return "goal";
}

const res = thisFunction(1, "john", "number", 4);
console.log(res); // goal

//

const arrThis = ["a", "b", "c"];

// change the value of the 2nd index to 'x'
console.log("original", arrThis);
arrThis[1] = "x"; // change value of element base on index
arrThis[arrThis.length] = "y"; // add last element
arrThis.push("z"); // add last element
arrThis.unshift("p"); // add first
console.log("mutated", arrThis);

arrThis.push();

const bills = [125, 555, 44, 66, 99];
const tips = [];
const total = [];

const calcTipWithTotal = (bill) => {
  if (bill > 50 && bill < 300) {
    const tipValue = bill * 0.15;
    tips.push(tipValue);
    const billWithTip = bill + tipValue;
    total.push(billWithTip);
    return;
  }

  const tipValue = bill * 0.2;
  tips.push(tipValue);
  const billWithTip = bill + tipValue;
  total.push(billWithTip);
};

calcTipWithTotal(bills[0]);
calcTipWithTotal(bills[1]);
calcTipWithTotal(bills[2]);

console.log("tips", tips);
console.log("total", total);
