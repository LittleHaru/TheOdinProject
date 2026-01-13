const container = document.querySelector(".container");
const createButton = document.querySelector(".create");
const clearButton = document.querySelector(".clear");
const rainbowButton = document.querySelector(".rainbow");
var currentState = 0 

createButton.addEventListener("click", () => {
    size = prompt("Enter The Size of Grid Wanted (Max 100)")
    if (size > 100) {
        alert("Max Size Reached")
        return
    } else {
        createGrid(size)
    }
})

rainbowButton.addEventListener("click", () => {
    currentState = (currentState === 0) ? 1 : 0;
})

clearButton.addEventListener("click", () => {
    console.log("click")
    const allDiv = document.querySelectorAll(".square")
    allDiv.forEach((e) => {
        e.style.backgroundColor = "white"
    })
})

function getRandomNumber() {
    return Math.floor(Math.random() * 256)
}

function createGrid(size) {
    container.innerHTML = ""
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("column")
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square")
            column.appendChild(square)
        }
        container.append(column)
    }
}

container.addEventListener("mouseover", (e) => {
    if (currentState === 0) {
        if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = "grey"
    }} else {
        let r = getRandomNumber()
        let g = getRandomNumber()
        let b = getRandomNumber()
        if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
    }}
})


