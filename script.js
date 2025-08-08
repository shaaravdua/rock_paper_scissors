function getComputerChoice() {
    let nbRandom = Math.round(Math.random() * 2)
    switch (nbRandom) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        default:
            return "Scissors"
    }
}

function getHumanChoice() {
    let choice = 
prompt("Choose rock, paper, or scissors").toLowerCase()
    return choice.charAt(0).toUpperCase() + choice.slice(1)
}

function playRound(humanChoice, computerChoice) {
    const winText = "You win the round! " + humanChoice + " beats " + computerChoice
    const loseText = "You lose the round! " + computerChoice + " beats " + humanChoice

    if (humanChoice === computerChoice) {
        console.log("It's a tie! You both chose " + humanChoice)
        return 0
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            console.log(loseText)
            return -1
        } else {
            console.log(winText)
            return 1
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log(loseText)
            return -1
        } else {
            console.log(winText)
            return 1
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            console.log(loseText)
            return -1
        } else {
            console.log(winText)
            return 1
        }
    }
}

function playGame(rounds = 5) {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < rounds; i++) {
        let winner = playRound(getHumanChoice(), getComputerChoice())
        
        if (winner == 1)
            humanScore++
        else if (winner == -1)
            computerScore++

        console.log("Score: " + humanScore + "-" + computerScore)
    }

    if (humanScore > computerScore)
        console.log("You won!")
    else if (humanScore < computerScore)
        console.log("You lost!")
    else
        console.log("It's a tie!")
}
console.log("script.js loaded");

playGame()
