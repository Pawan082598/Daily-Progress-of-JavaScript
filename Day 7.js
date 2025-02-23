console.log("Hello world");

let rows = 9;
for(let i= 1; i<=rows; i++){
    let pattern = ''
    for(let j= 1; j<=i; j++){
        pattern += j + "";
    }

console.log(pattern);
}
let row = 9;
for(let i= 1; i<=row; i++){
    let pattern = ''
    for(let j= 1; j<=i; j++){
        pattern += "*";
    }

console.log(pattern);
}

for (let i = 1; i <= 45; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// calculate the sum of all the numbers in the following array 
var numbersArray =[1,13,22,123,49]
var sum = 0;
for (var i = 0; i < numbersArray.length; i++) { 
    sum += numbersArray[i];
}
console.log(sum);
