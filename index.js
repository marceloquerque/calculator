let displayTop = document.querySelector(".display-top")
let displayBottom = document.querySelector(".display-bottom")
const clearButton = document.querySelector(".clear")
const delButton = document.querySelector(".delete")
const equalButton = document.querySelector(".equal")
const operatorsButton = document.querySelectorAll(".operator")
const numbersButton = document.querySelectorAll(".number")

let firstNumber = ""
let secondNumber = ""
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
    secondNumber += num
    displayBottom.textContent = secondNumber
}

function handleOperator(op) {
    operator = op
    firstNumber = secondNumber
    displayTop.textContent = firstNumber + "" + op
    secondNumber = ""
    displayBottom.textContent = ""
}

equalButton.addEventListener("click", operate)
function operate() {
     firstNumber = Number(firstNumber)
     secondNumber = Number(secondNumber)

     if (operator === "+") {
        firstNumber += secondNumber
     } else if (operator === "-") {
        firstNumber -= secondNumber
     } else if (operator === "x") {
        firstNumber *= secondNumber
     } else if (operator === "/"){
        firstNumber /= secondNumber
     }

     displayTop.textContent = ""
     displayBottom.textContent = firstNumber
}

function clearDisplay() {

}

function deleteNumber() {

}