function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2)
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2) {
    return Number(num1) / Number(num2)
}

var prompt = require("prompt-sync")();
const num1 = prompt("Enter the first number: ")
const operator = prompt("Choose an operator: ")
const num2 = prompt("Enter the second number: ")

function handleInput(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2)
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply(num1, num2)
    } else if (operator === "/") {
        return divide(num1, num2)
    }
}

const result = handleInput(operator, num1, num2)
console.log(result)
console.log("hi")