/* DATENSTRUKTUREN */

// Primitives

let a // Definition oder Deklaration

// Wertzuweisung, Assignment
a = true; //boolean (true, false)
a = "Hello"; //datentyp String
a = 2; // datentyp Number

console.log(typeof a); // welche typ
console.log (a); 

// Arrays
let arr;
arr = new Array();
arr = []; // leeres Array
arr = [true,false,false,true]; // Array mit boolean Werten

// Index beginnt mit 0
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[arr.length]); //lenght of Array
console.log(arr[arr.length-1]);
console.log(arr[5]);

/* Array -Info, nicht klausurrelevant*/
// let arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

// Objekte
let obj = {};//leeres Objekt

obj = {x:10, y:"Hi"};
console.log(obj.x); // Dot-Syntax
console.log(obj.y); 

obj = {
    val0: 10,
    sub1: {
    val1: "hi",
    val2: 2
    }
}

console.log(obj);
console.log(obj.val0);
console.log(obj.sub1.val1);
console.log(obj.sub1.val2);  //nested object


 /*DOM*/
// DOM  --> Modell der HTMl-Struktur
// DOM --> Document Object Model
// DOM --> nach dem Parsen / Laden der HTML-Seite  

// console.log(document);
// console.log(document.body);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerText = "Hi";
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML = "Hallo Text!"

// Entscheidungsstrukturen, Control Flow

let cond; 

cond = true;
cond = (6 > 4);
cond = (6 < 4);
cond = (4 == "4");

if (cond) {
    console.log("Aussage wahr");
} else {
    console.log("Aussage falsch");
}

// Oder

switch (key) {
    case value:
        
        break;

    default:
        break;
}