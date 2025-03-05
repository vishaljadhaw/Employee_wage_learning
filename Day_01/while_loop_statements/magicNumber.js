const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let low = 1, high = 100;

console.log("Think of a number between 1 and 100.");

function findMagicNumber() {
    if (low > high) {
        console.log("Something went wrong! Try again.");
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);

    rl.question(`Is your number ${mid}? (yes/higher/lower): `, (answer) => {
        if (answer.toLowerCase() === "yes") {
            console.log(`Your magic number is ${mid}! 🎉`);
            rl.close();
        } else if (answer.toLowerCase() === "higher") {
            low = mid + 1;
            findMagicNumber();
        } else if (answer.toLowerCase() === "lower") {
            high = mid - 1;
            findMagicNumber();
        } else {
            console.log("Please answer with 'yes', 'higher', or 'lower'.");
            findMagicNumber();
        }
    });
}

findMagicNumber();
