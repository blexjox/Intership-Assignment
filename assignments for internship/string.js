let a1 = "hi"
let a2 = "hello"
let a3 = "world"
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a1+a2+a3);
console.log(a1+" "+a2+" "+a3);

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

let longText = "This is a very long product description that needs truncation for UI display.";
let a = longText.length
console.log(a);

let x = "John";
    let y = new String("zohn");
    console.log(x);
    console.log(y);

let firstName = "John";
let lastName = "Doe";
let texts = `Welcome ${firstName}, ${lastName}!`;
console.log(texts);

let txt = "HELLO WORLD";
let char = txt.charAt(7);
console.log(char);

let ext = "HELLO WORLD";
let charAt = ext.charAt(0);
console.log(charAt);

const name = "W3Schools";
let letter = name.at(2);
console.log(letter);

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

let tt = "Apple, Banana, Kiwi";
let part = tt.slice(0, 20);
console.log(part);

let str = "Apple, Banana, Kiwi";
let parts = str.substring(7, 13);
console.log(parts);

let text11 = "hello world!";
let text21 = text11.toUpperCase();
console.log(text21);

let text01 = "HELLO WORLD!";
let text12 = text01.toLowerCase();
console.log(text12);

let tet = "Please locate where 'locate' occurs!";
let index = tet.indexOf("locate");
console.log(index);

let extt = "Please locate where 'locate' occurs!";
let indx = extt.lastIndexOf("John");
console.log(indx);

let text0 = "The rain in SPAIN stays mainly in the plain";
text0.match("ain");
console.log(text0);

function person(first, last, age, eye) {
}
console.log(typeof(person));
console.log(person);
