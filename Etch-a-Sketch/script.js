const container = document.querySelector(".container");
const button = document.querySelector(".create")

button.addEventListener("click", () => {
    size = prompt("Enter The Size of Grid Wanted (Max 100)")
    if (size > 100) {
        alert("Max Size Reached")
        size === 0
    } else {
        createGrid(size)
    }
})

function createGrid(size) {
    for (let i = 0; i < size; i++) { // columns
        const column = document.createElement("div");
        column.style.maxHeight = "100px"
        column.style.maxWidth = "100px"
        column.classList.add("column")
        for (let j = 0; j < size; j++) {
            const row = document.createElement("div");
            row.style.border = "2px solid black"
            row.style.maxHeight = "100px"
            row.style.maxWidth = "100px"
            row.style.padding = "50px"
            row.classList.add("column")
            column.appendChild(row)
        }
        container.append(column)
    }
}
