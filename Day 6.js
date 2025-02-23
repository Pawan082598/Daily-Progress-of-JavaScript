console.log("hello world");
// Loops 

                                                 // For loop




// Example 1
const o = 4;
for (let i = 1; i <= o; i++){
   console.log(i);// syntax to print counting.
}

// Example 2
const p = 9;
 for (let i=1; i<=p; i++){
    console.log("I am a Developer");// syntax to print same line multiple times.
 }


// Example 3
const n = 5;
// looping from i = 1 to 5
 for (let i = 1; i <= n; i++){
    console.log(' '.repeat(n-i) + '*'.repeat(i*2-1));// syntax to create piramid
 }



                                                  //For - in loop

const student = {
    name: "Abhinav",
    class: 9,
    age: 15
}
for ( let key in student){
    console.log(key, student[key]);// syntax to print key and value of object.
}

// Another way to perform the above task 


const stud = {
    id: "shubham",
    standard: 11,
}
for (let key in stud){
console.log(`${key} = ${stud[key]}`);
}


                                                    
// Question 1: write a program to print the table of three using while loop.

let table = 3;
for(let i = 1; i <= 10; i++){
    console.log(`${table}*${i} = ${table*i}`);
}

// Question 2: write a program to print the table of any number using prompt.

/*let tableu = prompt("Enter the number");
 
for(let i = 1; i <= 10; i++){
    console.log(`${tableu}*${i} = ${tableu*i}`);
}
    */


// While loop

// the while loop loops through a block of code as long as a specified condition is true.

// in this loop we first initialize the value , then give condition and then give the increment and decrement clause;

let r = 20;// initialization 
while (r < 24){
   console.log( "the number is" + r);
   r++;

}
 

// Do - while loop
let t = 1;
do {

    console.log("value is",t)
    t**;
}while (t <= 10);


