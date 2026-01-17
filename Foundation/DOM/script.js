const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm Red!"

const header = document.createElement("h3");
header.style.color = "blue";
header.textContent = "I'm Blue h3!";

const divContainer = document.createElement("div");
divContainer.setAttribute("id","div-container");
divContainer.style.border = "1px solid black";
divContainer.style.background = "pink"

const header1 = document.createElement("h1");
header1.textContent = "I'm in a DIV!"

const para = document.createElement("p");
para.textContent = "ME TOO!"

container.appendChild(content);
container.appendChild(redText);
container.appendChild(header);
container.appendChild(divContainer);
divContainer.appendChild(header1);
divContainer.appendChild(para);

const button = document.querySelector("#button");
button.onclick = () => alert("Hello World!")

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {alert("Hello World");});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue"
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
