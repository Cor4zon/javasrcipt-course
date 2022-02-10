
let j = 0;

outerLoop: do {
    console.log("hi");
    for (let i = 0; i < 3; i++) {
        console.log(i);
        mew: if (i === 2) {
            break outerLoop;
        }
    }
    j++;
} while (j < 3);