const buttons = document.querySelectorAll("#btn")
const display = document.getElementById("display")
const lastDisplay = document.getElementById("last-display") 
const clearButton = document.getElementById('clear-button')

let firstNumber = ''
let firstCheck = false
let secondNumber = ''
let operator = ''

// need "." numbers to be functional

for (btn of buttons) {
    btn.addEventListener("click", function(e) {
        const targetClass = e.target.classList

    // Check if #1 exists and displays number 2
    if (firstCheck === true && targetClass.contains("number")){
        secondNumber += parseFloat(e.target.value);
        display.textContent = secondNumber


        lastDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`
    }
    // Needed to fix if you press an operator multiple times
    else if (firstCheck === true && secondNumber) {
        if (e.target.value === "+" || 
            e.target.value === "-" || 
            e.target.value === '*' || 
            e.target.value === '/' ) {
                const calcValue = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber))
                firstNumber = calcValue
                display.textContent = calcValue
                secondNumber = ''
                operator = ''
                firstCheck = false


                lastDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`
        }
    }
    // Check if second number exists, if not then check if it's an operator, if not then its the first number
    if (!secondNumber) {
        if (targetClass.contains("number") === true) {
            firstNumber += parseFloat(e.target.value)
            display.textContent = firstNumber


            lastDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`
        }
        else if (targetClass.contains("operator") === true && firstNumber){
                firstCheck = true
                operator = e.target.value 


                lastDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`
        } 
    }

    // Calculates and resets values if equal is pressed and number 2 exists)
    if (e.target.value === '=' && secondNumber) {
        const calcValue = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber))
        firstNumber = calcValue
        display.textContent = calcValue
        secondNumber = ''
        operator = ''
        firstCheck = false

        lastDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`
    }

    if (e.target.value === "clear") {
       clearDisplay()
    }
    }
    
)}

// Calculations
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
    if (b === 0) {
        result = display.textContent = "No!"
    } else {
     result = Math.round(a / b * 100) / 100
    }
    return result
}

// Functions needed to calculate
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
        return calc
    }
}


// Clear
function clearDisplay() {
firstNumber = ''
    secondNumber = ''
    firstCheck = false
    operator = ''
    display.textContent = 0
    lastDisplay.textContent = " "
}
