let i = 1;
console.log("=== 1 to 5 (do-while) ===");
do {
    console.log(i);
    i++;
} while(i <= 5);


let roll, rolls = 0;
console.log("=== Roll until 6 ===");
do {
    roll = Math.floor(Math.random() * 6) + 1;
    rolls++;
    console.log(`Roll ${rolls}: ${roll}`);
} while(roll !== 6);
console.log(` Got 6 in ${rolls} rolls!`);


let count = 0;
console.log("=== Special Countdown ===");
do {
    console.log("T-minus " + count + "...");
    count++;
} while(count < 3);


console.log("=== Shopping Cart ===");
do {
    item = prompt("Add item (or 'done'):") || "";
    if(item !== "done" && item !== "") {
        cart.push(item);
        console.log(`✅ Added: ${item}`);
    }
} while(item !== "done");
console.log("Final cart:", cart.join(", "));


let balance = 1000, amount = 0;
console.log("=== ATM ===");
do {
    console.log(`Balance: ₹${balance}`);
    amount = parseInt(prompt("Withdraw (0=exit):")) || 0;
    if(amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(` Withdrew ₹${amount}`);
    } else if(amount > balance) {
        console.log(" Insufficient funds");
    }
} while(amount !== 0);


let password = "", tries = 0, maxTries = 3;
let correct = "admin123";
console.log("=== Secure Login ===");
do {
    password = prompt("Enter password:") || "";
    tries++;
    if(password !== correct) {
        console.log(` Wrong! ${maxTries - tries} tries left`);
    }
} while(password !== correct && tries < maxTries);
if(password === correct) {
    console.log(" Login Successful!");
} else {
    console.log(" Account Locked!");
}



let choice = "";
console.log("=== Restaurant Menu ===");
do {
    console.log("\n1. Pizza  2. Burger  3. Exit");
    choice = prompt("Choose (1-3):") || "0";
    switch (choice) {
        case "1": console.log(" Pizza ordered!"); break;
        case "2": console.log(" Burger ordered!"); break;
        case "3": console.log(" Goodbye!"); break;
        default: console.log(" Invalid choice");
    }
} while (choice !== "3");


