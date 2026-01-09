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
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        computerScore++
        return "You Lost To A Computer Lmao"
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        return "You Won Yay with " + humanChoice
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        computerScore++
        return "You Lost To A Computer Lmao"
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        humanScore++
        return "You Won YAY " + humanChoice
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++
        return "You Lost To A Computer Lmao"
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        humanScore++
        return "You Won YAY " + humanChoice
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
