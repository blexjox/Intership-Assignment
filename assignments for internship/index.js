// declare using let
let y
//assign value
y = 12
console.log(y)
//re  declare
y = 13
console.log(y)

//arathemitic values 
let a = 30;
let b = 20;
let c = a + b;
console.log(c)

let d = 30;
let e = 20;
let f = d - e;
console.log(f)

let g = 30;
let h = 20;
let pi = g / h;
console.log(pi)

let j = 3;
let k = 2;
let l = j * k;
console.log(l)

let m = 3;
let n = 2;
let o = m ** n;
console.log(o)

let aa = 15;
let bb = 20;

console.log(aa == bb);
console.log(aa === bb);
console.log(aa > 5);
console.log(aa <= 10);
console.log(aa !== bb);

let z = "12ABC";
console.log(z == z)
console.log(z === z)
console.log(typeof (z))

let mm = "5" + 2 + 3
let nn = 2 + 3 + "6"
console.log(mm)
console.log(nn)
console.log(typeof (mm))
console.log(typeof (nn))

let info;
console.log(typeof (info))

let text1 = "hi"
let text2 = "maneesh"
console.log(text1 + text2)
console.log(text1 + " " + text2)

let inf = "good morning"
inf = "good morning have a great day"
console.log(inf)
console.log(typeof (inf))

let age = 18;
let text = "You can Not drive";

if (age >= 18) {
    text = "You can drive";
};
console.log(text)

let age0 = 16;
let tex = "You can Not drive";

if (age0 >= 18) {
    tex = "You can drive";
};
console.log(tex)

let age1 = 19;
let country = "USA";
let tet = "You can Not drive!";

if (country == "USA") {
    if (age1 >= 16) {
        tet = "You can drive!";
    }
}
console.log(tet)

let age2 = 10;
let countrye = "USsr";
let texts = "You can Not drive!";

if (countrye == "USA") {
    if (age1 >= 16) {
        texts = "You can drive!";
    }
}
console.log(texts)

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day)

const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(hour)

const md = new Date("2026-01-16");
console.log(md)

const q = new Date("2026-01-16");
q.getFullYear();
console.log(q)

let num1 = 1009;
let num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
