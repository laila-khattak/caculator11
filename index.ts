#! /usr/bin/env node 

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "FirstNumber" },
  { message: "enter second number", type: "number", name: "SecondNumber" },
  {
    message: "perform the operation",
    name: "Operation",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
   //conditional statment 

if (answer.Operation === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operation === "Subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operation === "Multiplication"){
  console.log(answer.FirstNumber * answer.SecondNumber);
} 
 if (answer.Operation ==="Division"){
  console.log(answer.FirstNumber / answer.SecondNumber);
 }
  else { console.log("pls select valid operator");}
   