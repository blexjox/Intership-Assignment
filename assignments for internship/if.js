let age = 17;
if (age >= 18) {
    console.log(" Eligible to vote");
} else {
    console.log(" Not eligible to vote");
}

let number = 42;
if (number % 2 === 0) {
    console.log(number + " is EVEN");
} else {
    console.log(number + " is ODD");
}

let light = "yellow";
if (light === "green") {
    console.log(" GO");
} else if (light === "yellow") {
    console.log(" SLOW DOWN");
} else if (light === "red") {
    console.log(" STOP");
} else {
    console.log(" Invalid light");
}

let marks = 78;
if (marks >= 90) {
    console.log("Grade: A+ ");
} else if (marks >= 80) {
    console.log("Grade: A ");
} else if (marks >= 70) {
    console.log("Grade: B ");
} else if (marks >= 60) {
    console.log("Grade: C ");
} else if (marks >= 50) {
    console.log("Grade: D ");
} else {
    console.log("Grade: F ");
}

let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a LEAP YEAR ");
} else {
    console.log(year + " is NOT a leap year ");
}

let balance = 500;
let withdraw = 700;
if (balance >= withdraw) {
    console.log(" Withdrawal successful");
    console.log("New balance: $" + (balance - withdraw));
} else {
    console.log(" Insufficient balance");
    console.log("Current balance: $" + balance);
}

let temp = 25;
if (temp >= 30) {
    console.log(" T-shirt & shorts");
} else if (temp >= 20) {
    console.log(" Shirt & jeans");
} else if (temp >= 10) {
    console.log(" Jacket required");
} else {
    console.log(" Winter clothing");
}
