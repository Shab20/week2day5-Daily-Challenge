let num = prompt("Enter a number of bottles to begin counting down:");

for (let i = num; i >= 0; i--) {
    if (i > 1) {
        console.log(i + " bottles of beer on the wall");
        console.log(i + " bottles of beer");
        console.log("Take " + (num - i + 1) + " down, pass them around");
        console.log(i - 1 + " bottles of beer on the wall");
    } else if (i === 1) {
        console.log(i + " bottle of beer on the wall");
        console.log(i + " bottle of beer");
        console.log("Take " + (num - i + 1) + " down, pass it around");
        console.log(i - 1 + " bottles of beer on the wall");
    } else {
        console.log("No more bottles of beer on the wall");
    }
}



