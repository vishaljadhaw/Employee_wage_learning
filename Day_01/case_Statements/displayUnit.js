const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (1, 10, 100, 1000, etc.): ", function(num) {
    switch (num) {
        case "1":
            console.log("Unit");
            break;
        case "10":
            console.log("Ten");
            break;
        case "100":
            console.log("Hundred");
            break;
        case "1000":
            console.log("Thousand");
            break;
        case "10000":
            console.log("Ten Thousand");
            break;
        case "100000":
            console.log("Lakh");
            break;
        case "1000000":
            console.log("Ten Lakh");
            break;
        case "10000000":
            console.log("Crore");
            break;
        default:
            console.log("Invalid input! Please enter 1, 10, 100, 1000, etc.");
    }
    rl.close();
});
