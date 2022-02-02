const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 10;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt("Maximum life for you and the monster", '100');

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(enteredValue) || enteredValue <= 0) {
    chosenMaxLife = 100;
}

let currentMosterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

let logHistory = []


function writeToLog(event, value, playerLife, monsterLife) {
    let logEntry = {
        event: event,
        value: value,
        playerLife: playerLife,
        monsterLife: monsterLife,
    }
    if (
        event === EVENT_PLAYER_ATTACK ||
        event === EVENT_PLAYER_STRONG_ATTACK ||
        event === EVENT_PLAYER_HEAL
    ) {
        logEntry.target = "PLAYER";
    }
    else if (event === EVENT_MONSTER_ATTACK) {
        logEntry.target = "MONSTER";
    }
    logHistory.push(logEntry);
}

function reset() {
    currentMosterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(EVENT_MONSTER_ATTACK, playerDamage, currentPlayerHealth, currentMosterHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(currentPlayerHealth);
        alert("Bonus life saved you!");
    }

    if (currentMosterHealth <= 0 && currentPlayerHealth <= 0) {
        writeToLog(EVENT_GAME_OVER, 'DRAW', currentPlayerHealth, currentMosterHealth);
        alert("DRAW");
    } else if (currentMosterHealth <= 0) {
        writeToLog(EVENT_GAME_OVER, 'WIN', currentPlayerHealth, currentMosterHealth);
        alert("You won");
    } else if (currentPlayerHealth <= 0) {
        writeToLog(EVENT_GAME_OVER, 'LOSE', currentPlayerHealth, currentMosterHealth);
        alert("You lost");
    }

    if (currentMosterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : null;

    let logEvent;
    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
        logEvent = EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = EVENT_PLAYER_STRONG_ATTACK;
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMosterHealth -= damage;
    writeToLog(
        logEvent,
        damage,
        currentPlayerHealth,
        currentMosterHealth
    )
    endRound();
}

function attackHandler() {
    attackMonster("ATTACK");
}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK");
}

function healHandler() {
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}

function printEventHistory(){
    console.log(logHistory);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', printEventHistory);

adjustHealthBars(chosenMaxLife);
