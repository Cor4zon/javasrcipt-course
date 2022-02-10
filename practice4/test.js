let sumUp = function() {
    let sum = 0;
    for (const elem of arguments) {
        sum += elem;
    }
    return sum;
}


let substruct = (... nums) => {
    let sum = 0;
    for (const num of nums) {
        sum -= num;
    }
    return sum;
}

console.log(sumUp(1, 2 , 3))
console.log(sumUp(1, 2 , 33, 4, 4))
console.log(substruct(1, 2 , 33, 4, 4))
console.log(substruct(1, 2))