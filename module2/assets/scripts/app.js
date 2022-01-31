const defaultResult = 0;
let currentResult = defaultResult;

let historyOfOperations = [];

function getUserInputNumber() {
    return parseInt(userInput.value);
}

function calcAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);

    currentOperation = {
                            "currentResult": resultBeforeCalc,
                            "calcNumber": calcNumber,
                            "operator": operator,
                        };
    addOperationToHistory(currentOperation);
    console.log(historyOfOperations);
}

function addOperationToHistory(operation) {
    historyOfOperations.push(operation);
}

function add() {
    const enteredNumber = getUserInputNumber();
    currentResult += enteredNumber;
    calcAndWriteOutput("+", currentResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserInputNumber();
    currentResult -= enteredNumber;
    calcAndWriteOutput("-", currentResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserInputNumber();
    currentResult *= enteredNumber;
    calcAndWriteOutput("*", currentResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserInputNumber();
    currentResult /= enteredNumber;
    calcAndWriteOutput("/", currentResult, enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);


