const container = document.querySelector(".container");
const button = document.querySelector(".create")

button.addEventListener("click", () => {
    size = prompt("Enter The Size of Grid Wanted (Max 100)")
    if (size > 100) {
        alert("Max Size Reached")
        return
    } else {
        createGrid(size)
    }
})

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
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = "grey"
    }
})

