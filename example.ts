interface Human {
  name: string;
  hair: string;
}

function addTwo(num1: number, num2: number, human: Human) {
  console.log(num1 + num2);
}

addTwo(2, 3, { name: "Guada", hair: "blue" });

function exampleFunction(name: string, lastName?: string) {
  console.log(name, lastName);
}

let hasDriver = true;

const maelket: Human = {
  name: "maelkit",
  hair: "black",
};
