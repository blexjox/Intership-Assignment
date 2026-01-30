let countdown = 10;
console.log("=== Launch Countdown ===");
while(countdown > 0) {
    console.log(countdown + "...");
    countdown--;
}
console.log("LIFTOFF!");


let n = 5, factorial = 1;
console.log(`=== ${n}! Calculation ===`);
let i = 1;
while(i <= n) {
    factorial *= i;
    console.log(`${i} × ${factorial}`);
    i++;
}
console.log(`${n}! = ${factorial}`); 

const students = ["Alice", "Bob", "Charlie", "Diana"];
let index = 0;
console.log("=== Student Roll Call ===");
while(index < students.length) {
    console.log(`${index + 1}. ${students[index]}`);
    index++;
}


let start = 50;
console.log("=== Numbers 50→1 (step -5) ===");
while(start >= 1) {
    console.log(start);
    start -= 5;
}


let password = "", maxTries = 3, tries = 0;
let correctPass = "secret123";
console.log("=== Login System ===");
while(password !== correctPass && tries < maxTries) {
    password = prompt("Enter password:");
    tries++;
    if(password !== correctPass) {
        console.log(` Wrong! ${maxTries - tries} tries left`);
    }
}
if(password === correctPass) {
    console.log(" Access Granted!");
} else {
    console.log(" Account Locked");
}


let secret = 7, guess = 0, attempts = 0;
console.log("=== Guess the number (1-10) ===");
while(guess !== secret && attempts < 3) {
    Guess = parseInt(prompt("Guess:")) || 0;
    attempts++;
    if(guess < secret) console.log("Higher!");
    else if(guess > secret) console.log("Lower!");
}
if(guess === secret) console.log(" Correct!");
else console.log(" Game Over");

let num = 0, total = 0;
console.log("=== Sum Positives ===");
while(num >= 0) {
    total += num;
    num = parseInt(prompt("Enter number (negative to stop):")) || 0;
}
console.log("Total sum:", total);
