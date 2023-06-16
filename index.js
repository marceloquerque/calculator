let displayTop = document.querySelector(".display-top")
let displayBottom = document.querySelector(".display-bottom")
const clearButton = document.querySelector(".clear")
const delButton = document.querySelector(".delete")
const equalButton = document.querySelector(".equal")
const operatorsButton = document.querySelectorAll(".operator")
const numbersButton = document.querySelectorAll(".number")

let numberTop = ""
let numberBottom = ""
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
    if (num === "." && numberBottom.includes(".")) return

    numberBottom += num
    displayBottom.textContent = numberBottom
}

function handleOperator(op) {
    if (numberBottom === "") return

    if (numberTop !== "") {
        operate()
    }

    operator = op
    numberTop = numberBottom
    displayTop.textContent = numberTop + "" + op
    numberBottom = ""
    displayBottom.textContent = numberBottom
}

equalButton.addEventListener("click", operate)
function operate() {
    let result = ""

     numberTop = Number(numberTop)
     numberBottom = Number(numberBottom)

    if (isNaN(numberTop) || isNaN(numberBottom)) return

     if (operator === "+") {
        result = numberTop + numberBottom
     } else if (operator === "-") {
        result = numberTop - numberBottom
     } else if (operator === "×") {
        result = numberTop * numberBottom
     } else if (operator === "÷"){
        result = numberTop / numberBottom
     }

     numberBottom = result
     operator = ""
     numberTop = ""
     displayBottom.textContent = result
     displayTop.textContent = ""
}


clearButton.addEventListener("click", clearDisplay)
function clearDisplay() {
    numberTop = ""
    numberBottom = ""
    operator = ""
    displayTop.textContent = ""
    displayBottom.textContent = ""
}

delButton.addEventListener("click", deleteNumber)
function deleteNumber() {
    numberBottom = numberBottom.toString().slice(0, -1)
    displayBottom.textContent = numberBottom
}