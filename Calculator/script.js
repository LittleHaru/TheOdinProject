const displayArea = document.querySelector(".screen")
const numberButton = document.querySelectorAll(".number")
const opButton = document.querySelectorAll(".op")
const equalButton = document.querySelector(".equal")
let numbers = []
let concatNumbers = []
let operator

numberButton.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.value;
        numbers.push(buttonValue)
        console.log(numbers)
    })
});

opButton.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.value;
        operator = buttonValue
        number = Number(numbers.join(""))
        numbers.splice(0, numbers.length)
        concatNumbers.push(number)
        console.log(concatNumbers)
    })
})

const add = function(numbers) {
    const sum = numbers.reduce((total, current) => {
        return total + current
    }, 0);
    return sum
}

const subtract = function(numbers) {
    const sum = numbers.reduce((total, current) => {
        return total - current
    }, 0);
    return sum
}

const multiply = function(numbers) {
    const sum = numbers.reduce((total, current) => {
        return total * current
    }, 0);
    return sum
}

const divide = function(numbers) {
    const sum = numbers.reduce((total, current) => {
        return total / current
    }, 0);
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
            let multiple = multiple(nums)
            return multiple
        case '/':
            let division = divide(nums)
            return division
    }
}

equalButton.addEventListener("click", () => {
    let total = operate(operator,concatNumbers)
    concatNumbers.splice(0,concatNumbers.length)
    console.log(total)
})
