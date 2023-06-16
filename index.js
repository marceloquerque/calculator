let topDisplay = document.querySelector(".calculator__display-top")
let bottomDisplay = document.querySelector(".calculator__display-bottom")
const clearButton = document.querySelector(".calculator__clear")
const deleteButton = document.querySelector(".calculator__delete")
const equalButton = document.querySelector(".calculator__equal")
const operatorButtons = document.querySelectorAll(".calculator__operator")
const numberButtons = document.querySelectorAll(".calculator__number")

// global variables
let currentTopNumber = ""
let currentBottomNumber = ""
let currentOperator = ""

// clear display when initialize 
topDisplay.textContent = ""
bottomDisplay.textContent = ""

// add click event to number buttons
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", (e) => {
        handleNumberClick(e.target.textContent)
    })
})

// add click event to operator buttons
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", (e) => {
        handleOperatorClick(e.target.textContent)
    })
})

// function to handle when a number is clicked
function handleNumberClick(num) {
    if (num === "." && currentBottomNumber.includes(".")) return

    currentBottomNumber += num
    bottomDisplay.textContent = currentBottomNumber
}

// function to handle when an operator is clicked
function handleOperatorClick(op) {

    // check if there is no number in the bottom display
    if (currentBottomNumber === "") return

    // check if there is already a nunmber in the top display
    if (currentTopNumber !== "") {
        performCalculation()
    }

    // store the current values
    currentOperator = op
    currentTopNumber = currentBottomNumber

    // display he current number and operator
    topDisplay.textContent = currentTopNumber + "" + op
    currentBottomNumber = ""
    bottomDisplay.textContent = currentBottomNumber
}

equalButton.addEventListener("click", performCalculation)
function performCalculation() {
    let result = ""

    currentTopNumber = Number(currentTopNumber)
    currentBottomNumber = Number(currentBottomNumber)

    if (isNaN(currentTopNumber) || isNaN(currentBottomNumber)) return

    if (currentOperator === "+") {
        result = currentTopNumber + currentBottomNumber
    } else if (currentOperator === "-") {
        result = currentTopNumber - currentBottomNumber
    } else if (currentOperator === "×") {
        result = currentTopNumber * currentBottomNumber
    } else if (currentOperator === "÷") {
        result = currentTopNumber / currentBottomNumber
    }

    currentBottomNumber = result
    currentOperator = ""
    currentTopNumber = ""
    bottomDisplay.textContent = result
    topDisplay.textContent = ""
}

clearButton.addEventListener("click", clearDisplay)
function clearDisplay() {
    currentTopNumber = ""
    currentBottomNumber = ""
    currentOperator = ""
    topDisplay.textContent = ""
    bottomDisplay.textContent = ""
}

deleteButton.addEventListener("click", deleteNumber)
function deleteNumber() {
    currentBottomNumber = currentBottomNumber.toString().slice(0, -1)
    bottomDisplay.textContent = currentBottomNumber
}
