console.log("=== 1 to 10 ===");
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum 1-10 =", sum); 

console.log("=== Even Numbers ===");
for(let i = 0; i <= 20; i += 2) {
    console.log(i);
}

const fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log("=== Fruits List ===");
for(let i = 0; i < fruits.length; i++) {
    console.log(`${i+1}. ${fruits[i]}`);
}

let tableNum = 7;
console.log(`=== ${tableNum} Table ===`);
for(let i = 1; i <= 10; i++) {
    console.log(`${tableNum} × ${i} = ${tableNum * i}`);
}

console.log("=== Countdown 10-1 ===");
for(let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Liftoff! ");

console.log("=== Star Pattern ===");
for(let i = 1; i <= 5; i++) {
    let stars = "*".repeat(i);
    console.log(stars);
}

