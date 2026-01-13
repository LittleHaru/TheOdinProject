let humanScore = 0
let computerScore = 0
let tie = 0

function getComputerChoice() {
    var choices = ["paper","rock","scissor"]
    var word_index = Math.floor(Math.random()*choices.length)
    return choices[word_index]
}

function playRound(humanChoice,computerChoice) {
    if (humanChoice == computerChoice){
        tie++
        return "You Guys Tied!"
    }
    const outcomes = {
        rock: "scissor",
        paper: "rock",
        scissor: "paper"
    }

    if (outcomes[humanChoice] === computerChoice) {
        humanScore++;
        return "You Won!"
    } else {
        computerScore++;
        return "You Lost to a Computer Lmao!"
    }
}

const buttons = document.querySelectorAll("button")
const board = document.querySelector("#score")
const outcome = document.createElement("div")
const score = document.createElement("div")
board.appendChild(score)
score.textContent = "0 vs 0"
board.appendChild(outcome)
outcome.textContent = "Click A Button To Start The Game!"
outcome.style.marginBottom = "10px"

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice()
        let humanChoice = button.value
        result = playRound(humanChoice,computerChoice)
        outcome.textContent = result
        score.textContent = humanScore + " VS " + computerScore + " Tie: " + tie
        if (humanScore === 5) {
            alert("Game is Over, You Win!")
        } else if (computerScore === 5) {
            alert("Game is Over, Computer Wins!")
        }
    })
})





