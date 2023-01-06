"use strict";

const exampleObject = {
  firstName: "dindo",
  lastName: "paran",
  age: 2022 - 1992,
  job: "dev",
  friends: ["Boggart", "Boggartina", "Bruno", "Eudora"],
};

("___ has __ friends, and his/her best friend is called ___");

console.log(
  `${exampleObject.firstName} has ${exampleObject.friends.length} friends, and his/her bestfriend is called ${exampleObject["friends"][0]}`
);
exampleObject.friends[0];
exampleObject["friends"][0];

console.log(exampleObject);

const keyValues = ["firstName", "lastName", "age"];

// keyValues.forEach((element) => {
//   console.log(exampleObject[element]);
// });

// use prompt to get the string key
// use key to access object and get value

// const keyString = prompt("Enter key");
// console.log(keyString);
// console.log(exampleObject[keyString]);

const dog = {
  name: "Soju",
  birthYear: 2018,
  bark: function () {
    console.log("Arf arf");
  },

  sit: function () {
    console.log("Soju is sitting");
  },

  bite: function () {
    console.log("I'm a good boy, I won't");
  },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
  },

  addAge: function () {
    this.age = this.age + 1;
  },
};

const dogName = dog.name;
console.log(dogName);

dog.bark();
dog.sit();
dog.bite();

console.log("before", dog.age);
dog.calcAge(); // calculate and put property named age
console.log("after", dog.age);
dog.addAge(); // + 1
dog.addAge(); // + 1
console.log("after-adding", dog.age);

const markMiller = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  },
};
const johnSmith = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  },
};

if (markMiller.calcBMI() > johnSmith.calcBMI()) {
  console.log(
    `${markMiller.fullName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.fullName}'s (${johnSmith.BMI})`
  );
} else {
  console.log(
    `${markMiller.fullName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.fullName}'s (${johnSmith.BMI})`
  );
}

// make a function that takes on an object with properties of name and friends

// name is a string, friends is an array of string

// print a string that will input "I am <name>, and I have <number_of_friends>"
