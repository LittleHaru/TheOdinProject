let humanScore = 0
let computerScore = 0
let tie = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else if (choice == 2) {
        return "scissor"
    }
}

function getHumanChoice() {
    input = prompt("Enter your Choice").toLocaleLowerCase()
    return input
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

function playGame() {
    n = 0
    while (n != 5) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        let play = playRound(humanChoice,computerChoice)
        console.log(play)
        n++
    } return "Game Over: " + humanScore + " : " + computerScore + " Tied Score: " + tie
}
console.log(playGame())
