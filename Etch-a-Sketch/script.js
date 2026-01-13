const container = document.querySelector(".container");
const button = document.querySelector(".create")

function createDiv() {
    const div = document.createElement("div");
    div.textContent = "hi"
    div.style.border = "2px solid black"
    div.style.maxHeight = "50px"
    div.style.maxWidth = "50px"
    container.append(div)
    console.log("Div Created!")
}

button.addEventListener("click", () => {
    size = prompt("Enter The Size of Grid Wanted (Max 100)")
    if (size > 100) {
        alert("Max Size Reached")
        size === 10
    } else {
        createGrid(size)
    }
})

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        createDiv(size)
    }
}
