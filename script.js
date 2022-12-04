const computerPlay = (game_values) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomValue = game_values[randomIndex]
    return randomValue
}

const validateInput = (game_values) => {
    let playerSelection = ''
    do {
        playerSelection = prompt('Type your selected value', '').toLowerCase().trim() 
    } while (!game_values.includes(playerSelection));
    return playerSelection
}

const singleRound = (player, computer) => {
    console.log(`You chose: ${player}`);
    console.log(`The computer chose: ${computer}`);
    if (computer == player){
        return 'tie'
    }else if ((computer == 'rock' && player == 'scissors') || (computer == 'paper' && player == 'rock') || (computer == 'scissors' && player == 'paper')){
        return 'computer'
    }else{
        return 'player'
    }
}

const game = () => {
    const game_values = ['rock', 'paper', 'scissors']

    console.log("Let's play rock, paper and scissors");

    let playerWins = 0
    let computerWins = 0
    let tie = 0
    for (let index = 0; index < 5; index++) {
        const player = validateInput(game_values)
        const computer = computerPlay(game_values)
        const roundResult = singleRound(player, computer)
        
        if (roundResult == 'player'){
            playerWins += 1
        } else if (roundResult == 'computer'){
            computerWins += 1
        } else{
            tie += 1
        }

        if (roundResult == 'player' || roundResult == 'computer'){
            console.log('Round Winner:', roundResult);
        } else {
            console.log('It was a tie!');
        }
    }
    console.log(`Score Board: \n You won ${playerWins} rounds, \n The computer won ${computerWins} rounds, \n There were ${tie} ties.`);
}

game()