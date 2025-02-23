//Array: An array is a collection of elements that are stored in a single variable. The elements of an array are indexed and can be accessed using the index number. The index number starts from 0. The elements of an array can be of any type, including numbers, strings, objects, and even other arrays.


// Various ways to create an array in JavaScript

//1. using "new" keyword

let arr = new Array(1, 2, 3, 4, 5);// here "new" keyword is used to create an array object. If you don't use "new" keyword then it will be treated as a function call and it will return an array object. But if you use "new" keyword then it will return an object of type Array. So it is recommended to use "new" keyword to create an array object. in simple words, we use the "new " keyword to create an instance of an object.


console.log(arr);// it will print the array object. The array object is a built-in object in JavaScript that is used to store a collection of elements. The elements of an array object are indexed and can be accessed using the index number. The index number starts from 0. The elements of an array object can be of any type, including numbers, strings, objects, and even other arrays.


console.log(arr[0]);// it will print the first element of the array object. The elements of an array object are indexed and can be accessed using the index number. The index number starts from 0.


console.log(arr.length);// it will print the length of the array object. The length property of an array object is used to get the number of elements in the array object. The length property is a read-only property and it returns the number of elements in the array object.
//2. using "Array" constructor

let arr1 = Array(1,2,3,4,5);// here we are using the "Array" constructor to create an array object. The "Array" constructor is a built-in function in JavaScript that is used to create an array object. The "Array" constructor can take any number of arguments and it will create an array object with those arguments as elements.

//3.using array literal syntax

let arr2 = [1, 2, 3, 4, 5];// here we are using the array literal syntax to create an array object. The array literal syntax is the most common way to create an array object in JavaScript. It is a shorthand way of creating an array object without using the "new" keyword or the "Array" constructor.

//4. using Array.from() method 

let arr3 = Array.from([1, 2, 3, 4, 5]);// here we are using the Array.from() method to create an array object. The Array.from() method is a static method of the Array object that creates a new array object from an array-like or iterable object. The Array.from() method can take an array-like or iterable object as an argument and it will create an array object with the elements of that object.


// Array Methods

//1. push() method

let arr4 = [1,2,3,4,5,6,7,8,9,];
let resi= arr4.push(10);// it will add the element 10 at the end of the array object.
console.log(resi);// it will print the new length of the array object. The push() method returns the new length of the array object after adding the element.
console.log(arr4);// it will print the array object with the new element.
// hum yahan par direct "arr4.push(10)" bhi likh sakte hai. variable define karna zaroori nahi hai.

//2. Slice() method

let arr5 = [1,2,3,4,5,6,7,8,9,10];
let recap = arr5.slice(5,9);
console.log(recap);

//3. Tostring() method: The toString() method is used to convert an array object to a string. The toString() method returns a string that represents the elements of the array object separated by commas.

let arr6 = ["ross", "joey", "chandler", "monica", "rachel", "phoebe"];
let reseo = arr6.toString();
console.log(reseo);


//4. Shift() method: The shift() method is used to remove the first element from an array object. The shift() method returns the removed element.

let arr7 = [1,2,3,4,5,6,7,8,9,10];
let resio = arr7.shift();
console.log(resio);// it will print the removed element.
console.log(arr7);// it will print the array object after removing the element.

//5. Unshift() method: The unshift() method is used to add one or more elements to the beginning of an array object. The unshift() method returns the new length of the array object after adding the elements.

let arr9 = [1,2,3,4,5,6,7,8,9,10];
let resuio = arr9.unshift(0,1.5);
console.log(resuio);// it will print the new length of the array object.
console.log(arr9);// it will print the array object after adding the elements.


// Map: The map() method is used to create a new array object by applying a function to each element of the array object. The map() method returns a new array object with the results of the function applied to each element of the array object.

let arr8 = [1,2,3,4,5,6,7,8,9,10];
let resu = arr8.map(x => x * 2);
console.log(resu);// it will print the new array object with the results of the function applied to each element of the array object.

// pop() method: The pop() method is used to remove the last element from an array object. The pop() method returns the removed element.

let arr10 = [1,2,3,4,5,6,7,8,9,10];
let resui = arr10.pop();
console.log(resui);// it will print the removed element.
console.log(arr10);// it will print the array object after removing the element.

// Filter()method: The filter() method is used to create a new array object with all the elements of the array object that pass a test specified by a function. The filter() method returns a new array object with the elements that pass the test.

let arr11 = ["ironman", "captainamerica", "thor", "blackwidow", "hulk", "spiderman"];
let reeil = arr11.filter(x => x.length > 5);
console.log(reeil);// isme hum ek condition pass karte hai. jo string us condition ko pass kar leti hai yeh use print karva deta hai.

// Reduce() method: The reduce() method is used to reduce an array object to a single value by applying a function to each element of the array object. The reduce() method takes two arguments: a function and an initial value. The function is applied to each element of the array object and the result is accumulated in the initial value.

let arr12 = [1,2,3,4,5,6,7,8,9,10];
let resuo = arr12.reduce((acc, x) => acc + x, 0);
console.log(resuo);// it will print the sum of all the elements of the array object.

// forEach() method: The forEach() method is used to iterate over the elements of an array object and apply a function to each element. The forEach() method does not return anything.

let arr13 = [1,2,3,4,5,6,7,8];
let doc = arr13.forEach(x => console.log(x)); // it will print each element of the array object.
console.log(doc);// it will print "undefined" because the forEach() method does not return anything.
console.log(arr13);// it will print the array object.

// find() method: The find() method is used to find the first element of an array object that passes a test specified by a function. The find() method returns the first element that passes the test.

let arr14 = [1,2,3,4,5,6,7,8,9,10];
let res = arr14.find(x => x > 5);
console.log(res);// it will print the first element that is greater than 5.

// findIndex() method: The findIndex() method is used to find the index of the first element of an array object that passes a test specified by a function. The findIndex() method returns the index of the first element that passes the test.

let arr15 = [1,2,3,4,5,6,7,8,9,10];
let rei = arr15.findIndex(x => x > 5);
console.log(rei);// it will print the index of the first element that is greater than 5.

// includes() method: The includes() method is used to check whether an array object contains a specific element or not. The includes() method returns true if the array object contains the element, otherwise it returns false.

let arr16 = [1,2,3,4,5,6,7,8,9,10];
let resop = arr16.includes(5);
console.log(resop);// it will print true because the array object contains the element 5.
console.log(arr16);

//reverse() method: The reverse() method is used to reverse the order of the elements of an array object. The reverse() method modifies the original array object and returns the reversed array object.

let arr17 = [1,2,3,4,5,6,7,8,9,10];
let re = arr17.reverse();
console.log(re);// it will print the reversed array object.

// sort() method: The sort() method is used to sort the elements of an array object. The sort() method modifies the original array object and returns the sorted array object.

let arr18 = [5,2,8,1,6,3,9,4,7,10];
let rsi = arr18.sort();
console.log(rsi);// it arrange the elements in ascending order.



