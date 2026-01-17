const displayArea = document.querySelector(".screen")
const numberButton = document.querySelectorAll(".number")
const opButton = document.querySelectorAll(".op")
const equalButton = document.querySelector(".equal")
const clearButton = document.querySelector(".clear")
let numbers = ""
let concatNumbers = []
let operator
let display = ""

numberButton.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.value;
        display += buttonValue
        numbers += buttonValue
        displayArea.textContent = display 
    })
});

opButton.forEach(button => {
    button.addEventListener("click", (e) => {
        if (concatNumbers.length > 0) {
            if (numbers !== "") {
                concatNumbers.push(Number(numbers))
                numbers = ""

                let total = operate(operator, concatNumbers)

                const buttonValue = e.target.value;
                operator = buttonValue

                concatNumbers = [total]
                
                display = total.toFixed(1) + operator
                displayArea.textContent = display 
            } else {
                const buttonValue = e.target.value;
                operator = buttonValue
                display = display.slice(0,-1) + operator
                displayArea.textContent = display 
            }
        } else {
            if (numbers === "") {
                const buttonValue = e.target.value;
                operator = buttonValue
                display = display.slice(0,-1) + operator
                displayArea.textContent = display 
            } else {
                const buttonValue = e.target.value;
                operator = buttonValue

                concatNumbers.push(Number(numbers))
                numbers = ""

                display += operator
                displayArea.textContent = display
            }
        }
    })
})

function clearUP() {
    numbers = ""
    concatNumbers.splice(0 , concatNumbers.length)
    display = ""
    displayArea.textContent = display
}

clearButton.addEventListener("click", () => clearUP())

const add = function(arr) {
    const sum = arr.reduce((total, current) => {
        return total + current
    });
    return sum
}

const subtract = function(arr) {
    const sum = arr.reduce((total, current) => {
        return total - current
    });
    return sum
}

const multiply = function(arr) {
    const sum = arr.reduce((total, current) => {
        return total * current
    });
    return sum
}

const divide = function(arr) {
    const sum = arr.reduce((total, current) => {
        if (current === 0) {
            alert("Cannot Divide By Zero Dipshit")
            clearUP()
            return 0
        } else {
            return total / current
        }
    });
    return sum
}

const operate = function(operator, nums) {
    switch(operator) {
    case '+':
        let addition = add(nums)
        return addition
    case '-':
        let minus = subtract(nums)
        return minus
    case '*':
        let multiple = multiply(nums)
        return multiple
    case '/':
        let division = divide(nums)
        return division
    case ' ':
        return nums
    }
}

equalButton.addEventListener("click", () => {
    if (numbers === "" || concatNumbers.length === 0) {
        return
    } else {
        concatNumbers.push(Number(numbers))
        numbers = ""
        let total = operate(operator , concatNumbers)
        concatNumbers.splice(0 , concatNumbers.length)
        display = String(total.toFixed(1))
        displayArea.textContent = display
        display = ""
    }
})


//to do next
//add keyboard support
//add decimal button and lock to only 1 decimal point
//add backspace