let displayTop = document.querySelector(".display-top")
let displayBottom = document.querySelector(".display-bottom")
const clearButton = document.querySelector(".clear")
const delButton = document.querySelector(".delete")
const equalButton = document.querySelector(".equal")
const operatorsButton = document.querySelectorAll(".operator")
const numbersButton = document.querySelectorAll(".number")

let topOperand = ""
let bottomOperand = ""
let operator = ""

displayTop.textContent = ""
displayBottom.textContent = ""

numbersButton.forEach(number => {
    number.addEventListener("click", (e) => {
        handleNumber(e.target.textContent)
    })
})

operatorsButton.forEach(operator => {
    operator.addEventListener("click", (e) => {
        handleOperator(e.target.textContent)
    })
})

function handleNumber(num) {
    displayBottom.textContent += num
    bottomOperand = displayBottom.textContent
}

function handleOperator(op) {
    displayTop.textContent = displayBottom.textContent + "" + op
    operator = op
}


function clearDisplay() {

}

function deleteNumber() {

}


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

function operate(operator, num1, num2) {
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

// const result = operate(operator, num1, num2)