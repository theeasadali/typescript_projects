import inquirer from 'inquirer';

const inputTaker = await inquirer.prompt([
    {
        message: "Enter First Number: ",
        type: "number",
        name: "firstNumber"
    },
    
    {
        message: "Select an operator from the below list.",
        type: "list",
        name: "operator",
        choices: ["add", "subtract", "multiply", "divide", "remainder"]
    },

    {
        message: "Enter Second Number: ",
        type: "number",
        name: "secondNumber"
    }
]);

inputTaker.operator === "add" ? console.log(inputTaker.firstNumber + inputTaker.secondNumber) :
inputTaker.operator === "subtract" ? console.log(inputTaker.firstNumber - inputTaker.secondNumber) :
inputTaker.operator === "multiply" ? console.log(inputTaker.firstNumber * inputTaker.secondNumber) :
inputTaker.operator === "divider" ? console.log(inputTaker.firstNumber / inputTaker.secondNumber) :
console.log(inputTaker.firstNumber % inputTaker.secondNumber);