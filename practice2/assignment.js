const task3Element = document.getElementById('task-3');

function one() {
    alert("some text");
}

function two(name) {
    alert(name);
}


// one();
// two("Monya");

task3Element.addEventListener('click', one);

function three(stringOne, stringTwo, stringThree) {
    return stringOne + stringTwo + stringThree;
}

alert(three("help", "i need", "somebody help"));