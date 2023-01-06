"use strict";

const data1 = [17, 21, 23];

function printForecast(arr) {
  let combine = "";

  for (let i = 0; i < arr.length; i++) {
    const decCelcius = `${arr[i]} c`;
    const days = `${i + 1}`;
    const mergedString = `... ${decCelcius} in ${days} days`;
    combine = combine + mergedString;
    console.log(combine);
  }
}

printForecast(data1);
