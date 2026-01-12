const list = document.querySelector("ul")
const button = document.querySelector("button")
const input = document.querySelector("input");

button.addEventListener("click", (event) => {
    event.preventDefault();
    const myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.append(listText);
    listText.textContent = myItem;
    listItem.append(listBtn);
    listBtn.textContent = "Delete";
    listBtn.style.marginLeft = "10px"
    list.append(listItem);

    listBtn.addEventListener("click", () => {
        if (confirm("Do you Want to Delete this?")) {
            list.removeChild(listItem)
        } else {
            return
        }
    });
    input.focus()
});