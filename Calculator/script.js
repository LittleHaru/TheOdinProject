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
        console.log(numbers)
        displayArea.textContent = display 
    })
});

opButton.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.value;
        operator = buttonValue
        concatNumbers.push(Number(numbers))
        numbers = ""
        console.log(concatNumbers)
        display += operator
        displayArea.textContent = display 
    })
})

clearButton.addEventListener("click", () => {
    numbers = ""
    concatNumbers.splice(0 , concatNumbers.length)
    display = ""
    displayArea.textContent = display
})

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
        return total / current
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
    concatNumbers.push(Number(numbers))
    numbers = ""
    console.log(concatNumbers)
    let total = operate(operator,concatNumbers)
    concatNumbers.splice(0,concatNumbers.length)
    displayArea.textContent = total
    display = ""
    console.log(total)
})
