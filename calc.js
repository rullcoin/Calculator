const buttons = document.querySelectorAll("#btn")
const display = document.getElementById("display")
const clearButton = document.getElementById('clear-button')

let firstNumber = ''
let secondNumber = ''
let operator = ''

let equal = '='

for (btn of buttons) {
    btn.addEventListener("click", function(e) {

    // if (firstNumber && operator) {
    //     const calcValue = operate(operator, parseInt(firstNumber), parseInt(secondNumber))

    //     console.log(calcValue);
    //     firstNumber = calcValue
    //     console.log(firstNumber);
    // }

    if (e.target.value === "+" || e.target.value === "-" || e.target.value === '*' || e.target.value === '/' ){
        operator = e.target.value
    } else if (firstNumber === "") {
        firstNumber += e.target.value;
        console.log(firstNumber);
    } else if (operator){
        secondNumber += parseInt(e.target.value);
        console.log(secondNumber);
    }

    if (e.target.value === equal) {
        const calcValue = operate(operator, parseInt(firstNumber), parseInt(secondNumber))
        firstNumber = calcValue
        display.innerHTML = calcValue
        secondNumber = ''
        console.log(calcValue);
    }

    if (e.target.value === "clear") {
       clearDisplay()
    } else {
        //display.innerHTML = 0
    }
    }
)}

function add(a, b) {
    result = a + b
    return result
}

function subtract(a, b) {
    result = a - b
    return result
}

function multiply(a, b) {
    result = a * b
    return result
}

function divide(a, b) {
    result = a / b
    return result
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiply(a, b) 
    } else if (operator === "/") {
        return divide(a, b)
    }
}

function clearDisplay() {
    firstNumber = ''
    secondNumber = ''
    operator = ''
    display.innerHTML = 0
}
