const CHOICE_ROCK = 'ROCK';
const CHOICE_PAPER = 'PAPER';
const CHOICE_SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = CHOICE_ROCK;
const RESULT_WIN = 'WIN';
const RESULT_LOSE = 'LOSE';
const RESULT_DRAW = 'DRAW';

const startGameBtn = document.getElementById('start-game-btn');

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${CHOICE_ROCK}, ${CHOICE_PAPER} or ${CHOICE_SCISSORS}?`).toUpperCase();
    if (
        selection !== CHOICE_ROCK &&
        selection !== CHOICE_PAPER &&
        selection !== CHOICE_SCISSORS
    ) {
        alert(`Invalid choice. We chose ${DEFAULT_CHOICE} for you.`);
        return;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomNumber = Math.random();

    if (randomNumber < 0.34) {
        return CHOICE_ROCK;
    } else if (randomNumber < 0.68) {
        return CHOICE_PAPER;
    } else {
        return CHOICE_SCISSORS;
    }
};

const getWinner = (computerChoice, playerChoice) => {
    if (computerChoice === playerChoice) {
        return RESULT_DRAW;
    } else if (
        (playerChoice === CHOICE_ROCK &&
        computerChoice === CHOICE_SCISSORS) ||
        (playerChoice === CHOICE_PAPER &&
        computerChoice === CHOICE_ROCK) ||
        (playerChoice === CHOICE_SCISSORS &&
        computerChoice === CHOICE_PAPER)
    ) {
        return RESULT_WIN;
    }
    else {
        return RESULT_LOSE;
    }
};

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;

    console.log("Game is started");
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const gameResult = getWinner(playerSelection, computerSelection);

    alert(`you picked ${playerSelection}, computer picked ${computerSelection}. so it's ${gameResult}`);
    gameIsRunning = false;
});


