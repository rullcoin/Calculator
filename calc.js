const buttons = document.querySelectorAll("#btn")
const display = document.getElementById("display")
const clearButton = document.getElementById('clear-button')

let firstNumber = ''
let firstCheck = false
let secondNumber = ''
let operator = ''
let operatorCheck = false

// if press operator first, error


for (btn of buttons) {
    btn.addEventListener("click", function(e) {
        const targetClass = e.target.classList
    // Check if #1 exists and displays number 2
    if (firstCheck === true && targetClass.contains("number")){
        secondNumber += parseInt(e.target.value);
        display.innerHTML = secondNumber
    } 
    // Needed to fix if you press an operator multiple times
    else if (firstCheck === true && secondNumber) {
        if (e.target.value === "+" || e.target.value === "-" || e.target.value === '*' || e.target.value === '/' ) {
            console.log("+ was pressed after second number");
            const calcValue = operate(operator, parseInt(firstNumber), parseInt(secondNumber))
            firstNumber = calcValue
            display.innerHTML = calcValue
            secondNumber = ''
            operator = ''
            firstCheck = false
        }
    }
    // Check if second number exists, if not then check if it's an operator, if not then its the first number
    if (!secondNumber) {
        if (targetClass.contains("number") === true) {
            firstNumber += parseInt(e.target.value)
            display.innerHTML = firstNumber
        }

        else if (targetClass.contains("operator") === true && firstNumber){
                firstCheck = true
                operator = e.target.value 
        } 
    }

    // Calculates and resets values if equal is pressed and number 2 exists)
    if (e.target.value === '=' && secondNumber) {
        const calcValue = operate(operator, parseInt(firstNumber), parseInt(secondNumber))
        firstNumber = calcValue
        display.innerHTML = calcValue
        secondNumber = ''
        operator = ''
        firstCheck = false
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
        calc = add(a, b)
        return Math.round(calc * 100) / 100
    } else if (operator === "-") {
        calc = subtract(a, b)
        return Math.round(calc * 100) / 100
    } else if (operator === "*") {
        calc = multiply(a, b)
        return Math.round(calc * 100) / 100
    } else if (operator === "/") {
        calc = divide(a, b)
        return Math.round(calc * 100) / 100
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
