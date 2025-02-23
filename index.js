// Hoisting

// var num;
// console.log(num);
// var num = 20;//  output : undefined

// num = 20;
// console.log(num);//these type of syntax can only applicable in "var".
// var num;


// num1 = 34;
// console.log(num1);// output : it shows error.
// let num1;

// Operators

// 1. Arithmetic Operators
  
let a = 18;
let b = 90;
let c = (a+b);
console.log(c);


let x = 29;
let y = -28;
let z = (x-y);
console.log(z);

// Comparison Operators

let p = 34;
let q = 45;
let r = p !==q;
console.log(r);


let m = 23;
let n = "23";
let o = m !==n;


let s = 28;
let t = 29;
let u = s ===t;
console.log(u);



let d = 234566;
let result = Math.floor(d/10);// Math.floor() rounds a number DOWN to the nearest integer.
console.log(result);


let g = 1234567// Math.ceil() rounds a number UP to the nearest integer.
let result1 = Math.ceil(g/1000);
console.log(result1);