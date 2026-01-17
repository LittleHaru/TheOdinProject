const displayArea = document.querySelector(".screen")
const numberButton = document.querySelectorAll(".number")
const opButton = document.querySelectorAll(".op")
let numbers = []
let concatNumbers = []
let number1
let operator

numberButton.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.value;
        arr.push(buttonValue)
    })
});

opButton.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.value;
        operator = buttonValue
        number = Number(arr.join(""))
        numbers.splice(0, arr.length)
        concatNumbers.push(number)
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

const operate = function(operator, ...nums) {
    switch(operator) {
        case '+':
            let addition = add(nums)
            return addition
        case '-':
            let minus = subtract(nums)
            return minus
        case 'x':
            let multiple = multiple(nums)
            return multiple
        case '/':
            let division = divide(nums)
            return division
    }
}

// need to figure out how to take value operand
// pass numbers thur the operand