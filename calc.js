const buttons = document.querySelectorAll("#btn")
const display = document.getElementById("display")
const clearButton = document.getElementById('clear-button')

let firstNumber = ''
let firstCheck = false
let secondNumber = ''
let operator = ''
let operatorCheck = false

for (btn of buttons) {
    btn.addEventListener("click", function(e) {
        const targetClass = e.target.classList

    if (firstCheck === true && targetClass.contains("number")){
        secondNumber += parseInt(e.target.value);
        display.innerHTML = secondNumber
        console.log(secondNumber);

    } 
    // Needed to fix if you press an operator multiple times
    else if (firstCheck === true && secondNumber) {
        if (e.target.value === "+" || e.target.value === "-" || e.target.value === '*' || e.target.value === '/' && operator === '' ) {
            console.log("+ was pressed after second number");
            const calcValue = operate(operator, parseInt(firstNumber), parseInt(secondNumber))
            firstNumber = calcValue
            display.innerHTML = calcValue
            secondNumber = ''
            operator = ''
            firstCheck = false
            console.log(calcValue);
        }
    }
    // Check if second number exists, if not then check if it's an operator, if not then its the first number
    if (!secondNumber) {
            if (e.target.value === "+" || e.target.value === "-" || e.target.value === '*' || e.target.value === '/' ){
                firstCheck = true
                operatorCheck === true
                console.log("Operator check true");
                operator = e.target.value 
            
        } else if (targetClass.contains("number") === true) {
            firstNumber += parseInt(e.target.value)
            display.innerHTML = firstNumber
            console.log(firstNumber);
        }
    }

    // Calculates and resets values if equal is pressed (Doesn't care if #1 & #2 are pressed)
    if (e.target.value === '=' && secondNumber) {
        const calcValue = operate(operator, parseInt(firstNumber), parseInt(secondNumber))
        firstNumber = calcValue
        display.innerHTML = calcValue
        secondNumber = ''
        operator = ''
        firstCheck = false
        console.log(calcValue);
    }

    if (e.target.value === "clear") {
       clearDisplay()
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
    if (a === 0 || b === 0) {
        result = display.innerHTML = "No!"
    } else {
     result = a / b
    }
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
    firstCheck = false
    operator = ''
    display.innerHTML = 0
}

function resetState() {
    firstNumber = ''
    secondNumber = ''
    firstCheck = false
    operator = ''
}
