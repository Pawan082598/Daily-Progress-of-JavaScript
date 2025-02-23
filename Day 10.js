// Functions: Functions are "self contained" modules of code that accomplish a specific task. Functions usually "take in" data, process it, and "return" a result. Once a function is written, it can be used over and over and over again. Functions can be "called" from the inside of other functions.

// modules: Modules are reusable pieces of code that can be exported from one program and imported for use in another program. 

// We have various types of functions in JavaScript:
// 1. Named function: A function with a name is called a named function. It is defined with the function keyword followed by the name of the function and the parameters in the parentheses. The function body is enclosed in curly braces. 

// Example: function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet('John'));// Output: Hello, John!


// 2. Anonymous function: A function without a name is called an anonymous function. It is defined with the function keyword followed by the parameters in the parentheses. The function body is enclosed in curly braces. Anonymous functions are often used as event handlers or as arguments to higher-order functions.

// Example: const greet = function(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet('John'));// Output: Hello, John!

// 3. Arrow function: An arrow function is a shorter syntax for writing function expressions. It uses an arrow (=>) to separate the function parameters from the function body. Arrow functions are anonymous.

// Example: const greet = (name) => {
//     return `Hello, ${name}!`;
// }
// console.log(greet('John'));// Output: Hello, John!

// 4. IIFE (Immediately Invoked Function Expression): An IIFE is a function that is executed immediately after it is defined. It is wrapped in parentheses () to make it an expression and then followed by another pair of parentheses to call it.
// Example: (function() {
//     console.log('Hello, World!');
// })();// Output: Hello, World!

// 5. Generator function: A generator function is a special type of function that can pause its execution and yield control back to the caller. It is defined with the function* keyword followed by the function name and the parameters in the parentheses. The function body contains one or more yield statements that pause the execution and return a value to the caller. The caller can then resume the execution of the generator function by calling the next() method on the generator object.
// Example: function* greet(name) {
//     yield `Hello, ${name}!`;
// }
// const generator = greet('John');
// console.log(generator.next().value);// Output: Hello, John!


// 6. Recursive function: A recursive function is a function that calls itself. It is defined with the function keyword followed by the function name and the parameters in the parentheses. The function body contains a base case that stops the recursion and a recursive case that calls the function with a modified input. Recursive functions are often used to solve problems that can be broken down into smaller subproblems.
// Example: function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     } // output: 5*4*3*2*1 = 120

// 7. Higher Order Function: A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. Higher-order functions are often used to abstract or isolate actions, effects, or async flow control using callback functions, promises, and async/await.
// Example: function greet(name, formatter) {
//     return formatter(name);
// }
// function upperCaseName(name) {
//     return name.toUpperCase();
// }
// console.log(greet('John', upperCaseName));// Output: JOHN
// console.log(greet('John', (name) => name.toLowerCase()));// Output: john

// 8. Callback function: A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callback functions are often used to handle events, async operations, or to generalize code.
// Example: function greet(name, callback) { 
//     return callback(name);
// }
// function upperCaseName(name) {
//     return name.toUpperCase();
// }
// console.log(greet('John', upperCaseName));// Output: JOHN
// console.log(greet('John', (name) => name.toLowerCase()));// Output: john


// 9. Promise function: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise is in one of three states: pending, fulfilled, or rejected. Promises are often used to handle async operations in a more elegant way than callbacks.
// Example: function greet(name) {
//     return new Promise((resolve, reject) => {
//         if (name) {
//             resolve(`Hello, ${name}!`);
//         } else {
//             reject('No name provided!');
//         }
//     });
// } // Output: Hello, John!


// 10. Async/Await function: Async/await is a syntax sugar on top of promises that allows you to write asynchronous code that looks synchronous. The async keyword is used to declare an async function, and the await keyword is used to pause the execution of an async function until a promise is settled (resolved or rejected).
// Example: async function greet(name) {
//     return `Hello, ${name}!`;
// }
// greet('John').then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// }); // Output: Hello, John!


// 11. Currying function: A currying function is a function that takes multiple arguments, but instead of using them immediately, returns a sequence of functions that each take a single argument. Currying is often used to create specialized versions of general functions. 
// Example: function add(a) {
//     return function(b) {
//         return a + b;
//     };
// }
// const add5 = add(5);

// console.log(add(5)(3));// Output: 8

// 12. Memoization function: Memoization is an optimization technique used to speed up programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. Memoization is often used to optimize recursive algorithms that have overlapping subproblems.
// Example: function memoize(fn) {
//     const cache = {};
//     return function(...args) {
//         const key = JSON.stringify(args);
//         if (cache[key]) {
//             return cache[key];
//         } else {
//             const result = fn(...args);
//             cache[key] = result;
//             return result;
//         }
//     };
// } // Output: 120

// 13. Throttling function: Throttling is a technique used to limit the number of times a function can be called over time. It is often used to optimize performance by ensuring that expensive functions are not called too frequently.
// Example: function throttle(fn, delay) {
//     let lastCallTime = 0;
//     return function(...args) {
//         const now = new Date().getTime();
//         if (now - lastCallTime >= delay) {
//             lastCallTime = now;
//             return fn(...args);
//         }
//     };
// }
// const throttledLog = throttle(console.log, 1000);
// throttledLog('Hello, World!');// Output: Hello, World!

// 14. Debouncing function: Debouncing is a technique used to ensure that a function is not called too frequently. It is often used to optimize performance by ensuring that expensive functions are only called after a certain amount of time has passed since the last call.
// Example: function debounce(fn, delay) {
//     let timeoutId;
//     return function(...args) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             fn(...args);
//         }, delay);
//     };
// }
// const debouncedLog = debounce(console.log, 1000);
// debouncedLog('Hello, World!');// Output: Hello, World!
// console.log(debouncedLog.toString());
// console.log(debounce.toString());
//output: function(...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
    //         fn(...args);
    //     }, delay);
    // };
    // Output: function debounce(fn, delay) {






// 15. Pure function: A pure function is a function that always returns the same output for the same input and has no side effects. Pure functions are often used to make code more predictable and easier to test. 
// Example: function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3));// Output: 5

// 16. Impure function: An impure function is a function that has side effects or does not always return the same output for the same input. Impure functions are often used to interact with the outside world or to perform actions that are not purely functional.
// Example: function log(message) { 
//     console.log(message);
// }
// log('Hello, World!');// Output: Hello, World! // Side effect of log function is printing to console which is not a pure function.


// 17. Recursive function: A recursive function is a function that calls itself until it reaches a base case that stops the recursion. Recursive functions are often used to solve problems that can be broken down into smaller subproblems.
// Example: function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));// Output: 120



// 18. Tail Call Optimization function:  Tail call optimization is an optimization technique used by some programming languages to optimize recursive functions that use tail recursion. Tail recursion is a special case of recursion where the recursive call is the last operation in the function. Tail call optimization allows the recursive function to reuse the current stack frame instead of creating a new one for each recursive call, which can reduce memory usage and prevent stack overflow errors. 
// Example: function factorial(n, acc = 1) {
//     if (n === 0) {
//         return acc;
//     } else {
//         return factorial(n - 1, n * acc);
//     }
// }
// console.log(factorial(5));// Output: 120

// 19. Function Composition: Function composition is the process of combining multiple functions to create a new function. Function composition is often used to create complex functions by combining simpler functions together.
// Example: function compose(...fns) { 
//     return function(arg) {
//         return fns.reduceRight((acc, fn) => fn(acc), arg);
//     };
// }
// function add1(x) {
//     return x + 1;
// }
// function multiply2(x) {
//     return x * 2;
// }
// const add1AndMultiply2 = compose(multiply2, add1);
// console.log(add1AndMultiply2(3));// Output: 8

// 20. Partial Application: Partial application is the process of fixing a number of arguments to a function, producing another function of smaller arity. Partial application is often used to create specialized versions of general functions. 
// Example: function add(a, b, c) {
//     return a + b + c;
// }
// const add5 = add.bind(null, 5);
// console.log(add5(3, 2));// Output: 10


// 21. Regular function: A regular function is a function that is defined using the function keyword followed by the function name and the parameters in the parentheses. Regular functions can be named or anonymous and can be used to define reusable pieces of code. 
// Example: function add(a, b) { 
//     return a + b;
// }
// console.log(add(2, 3));// Output: 5

// 22. Function Expression: A function expression is a function that is defined as part of an expression and is often assigned to a variable. Function expressions can be named or anonymous and are often used to define functions that are only used in a specific context.
// Example: const add = function(a, b) {
//     return a + b;
// };
// console.log(add(2, 3));// Output: 5



// regular function

// function with console

function a (){     // function declaration
    console.log("a");  // function statement
}
a(); // function calling / invocation
// Output: a


function chaman (){
    console.log("Jai Shree Ram");
}
chaman();
chaman();
chaman();// jitni baar call karenge utni baar output milega and output same milega


function raman (g,f){
    console.log(g,f);

}
raman(45,38);


function dhawan ( x,y){
    console.log("chal nikal");

}
dhawan( 993,949);// Output: chal nikal


// Arrow function

const c = (b) => {
    console.log("a",b);
}
c("b");// Output: a b


// function expression

const d = function(){
    console.log("d");
}
d();// Output: d



// function with parameters and no return

// function with parameter and no return value means function is not returning anything it is just printing the value of parameter passed to it. 

function e(c){
    console.log(c);
    
}
e("c");// Output: c

// function with parameters and with return value

// function with parameter and return value means function is returning the value of parameter passed to it. 

function n (m){
    return m;
} 
console.log(n("m"));// Output: m

// function ShowMessage(){
//     alert("Check your code");
// }
// ShowMessage();


/*Problem: You are provided with a string you have to slice the name from the string and print the sliced string.
 
(using slice method)

Input: Hi, my name is John
Output: John
*/

let nume = "Hi, my name is John";
let self = nume.slice(15);
console.log(self);

/* Problem 2: You are provided an array of integer you have to print the sum of array

Input: [1, 2, 3, 4]

Output: 10
*/

let arr = [1, 2, 3, 4];
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum); // Output: 10


// solve by using loop

let arr1 = [1, 2, 3, 4];
let sum1 = 0;
for(let i = 0; i < arr1.length; i++ ){
    sum1 = sum1 + arr1[i];

}
console.log(sum);