#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select any one following oprator to perform the operation",
    type: "list",
    name: "oprator",
    choices: ["Division", "Multiplication", "Addition", "Subtraction"],
  },
]);
//console.log(answer);
 
//conditional statements
if(answer.oprator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if(answer.oprator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.oprator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.oprator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}``