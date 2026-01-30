let day = 1; // 1=Mon, 7=Sun
switch(day) {
    case 1: console.log("Monday "); break;
    case 2: console.log("Tuesday "); break;
    case 3: console.log("Wednesday "); break;
    case 4: console.log("Thursday "); break;
    case 5: console.log("Friday "); break;
    case 6: console.log("Saturday "); break;
    case 7: console.log("Sunday "); break;
    default: console.log("Invalid day");
}

let num1 = 12, num2 = 4, operator = '*';
let result;
switch(operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num1 / num2; break;
    case '%': result = num1 % num2; break;
    default: result = "Invalid operator";
}
console.log(`${num1} ${operator} ${num2} = ${result}`);

let signal = "green";
switch(signal) {
    case "red":   console.log("STOP"); break;
    case "yellow": console.log("PREPARE TO STOP"); break;
    case "green":  console.log("GO"); break;
    default: console.log(" Invalid signal");
}


let marks = 82;
switch(true) {
    case marks >= 90: console.log("A+ "); break;
    case marks >= 80: console.log("A "); break;
    case marks >= 70: console.log("B "); break;
    case marks >= 60: console.log("C "); break;
    case marks >= 50: console.log("D "); break;
    default: console.log("F ");
}

let month = 2;
switch(month) {
    case 1: case 3: case 5: case 7: 
    case 8: case 10: case 12: 
        console.log("31 days "); break;
    case 4: case 6: case 9: case 11:
        console.log("30 days "); break;
    case 2: console.log("28/29 days (Feb) "); break;
    default: console.log("Invalid month");
}

let char = 'E';
switch(char.toUpperCase()) {
    case 'A': case 'E': case 'I': 
    case 'O': case 'U': 
        console.log(`${char} is VOWEL `); break;
    default: console.log(`${char} is CONSONANT `);
}

let totalBill = 850;
switch(true) {
    case totalBill >= 1000: console.log("10% OFF = ₹" + (totalBill * 0.1)); break;
    case totalBill >= 700:  console.log("7% OFF = ₹" + (totalBill * 0.07)); break;
    case totalBill >= 500:  console.log("5% OFF = ₹" + (totalBill * 0.05)); break;
    default: console.log("No discount ");
}
