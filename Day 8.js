console.log("Hello Everyone");
// indexing of the characters in the string

var nam = "I am developer";
let ros = nam.indexOf("am");
console.log(ros);
let res = nam.indexOf("developer");// when we try to find the index of the character which is not present in the string then it will always return "-1".
// indexOf(): It is used to find the index of the character in the string. It is case sensitive. It will return the index of the first occurence of the character in the string. And we always have to write the spelling of this method in the same way as it is written here. otherwise it will give an error.
console.log(res);

// lastIndexOf(): It is used to find the index of the character in the string. It is case sensitive. It will return the index of the last occurence of the character in the string. And we always have to write the spelling of this method in the same way as it is written here. otherwise it will give an error.

var sam = "I am programmer and programmer";
let rom = sam.lastIndexOf("am");
console.log(rom);
let resu = sam.lastIndexOf("programmer");
console.log(resu);


let resum = sam.indexOf("programmer", 1);// in this we can set the starting point of counting index number. for example, as we write 1 here, so through this we indicate that the counting should be start after that index number. and jo humne character likha hai aur jo index number likha hai uske baad woh character exist nhi karta to woh "-1" return karega.
console.log(resum);



// String concatenation: it is process of adding two strings together. It is done by using "+" operator. It is also called as string addition.

var nome = "I am";
var name1 = "developer";
var som = nome + name1;
console.log(som);

// Another way of concatenation is by using concat() method. It is used to concatenate two strings. It is case sensitive . It will return the concatenated string.

let get1 = "get ";// here we use space after get so that we can get space between get and out.
let get2 = "out";
let get3 = get1.concat(get2);
console.log(get3);


// String interpolation: It is a process of evaluating the string literals containing one or more placeholders. It is done by using template literals. It is also called as template strings. It is done by using backticks(`) and ${}.
// It is used to embed the expressions in the string literals. It is case sensitive. It will return the evaluated string.

var name = "developer";
var name2 = `I am ${name}`;
console.log(name2);

// String slicing: It is used to extract the part of the string. It is done by using slice() method. It is case sensitive. It will return the extracted part of the string. It is also called as string extraction.

let got = " I am going to learn javascript";
let got1 = got.slice(5, 10);// in this we have to write the starting index number and the ending index number. It will return the extracted part of the string. It is case sensitive.

// jo hum ending index denge woh isme include nhi hoga. counting usse ek pehle hi ruk jayegi. for example, as we write 10 here, so it will count till 9 and will return the extracted part of the string.
console.log(got1);
let gut = "i am developer";
let got2 = gut.slice(10,-4);
// negative index number is also used in this. It is used to count the index number from the end of the string. It will return the extracted part of the string.

// but agar hum koi aisi situation create kar de jo execute karna possible na ho to yeh hume kuch bhi return nhi karega.

// substring:
let cau = "I am software developer";
let got3 = cau.substring(5,10);
console.log(got3);

// how substring is different from slice:
// 1. slice() method can accept negative index number but substring() method can't accept negative index number.
// 2. slice() method can accept two arguments but substring() method can accept only one argument.
// 3. slice() method can accept the index number in reverse order but substring() method can't accept the index number in reverse order.
// 4. slice() method can return empty string but substring() method can't return empty string.
// 5. slice() method can return the string with the same case but substring() method can return the string with the different case.
// 6. slice() method can return the string with the same length but substring() method can return the string with the different length. 


// replace(): It is used to replace the character in the string. It is done by using replace() method. It is case sensitive. It will return the replaced string.

let bat = "I graduate from oxford university";
let sup = bat.replace(" " , "/");
console.log(sup);// it always replace the first occurence of the character in the string. and it is case sensitive.


let goat = bat.replaceAll(" " , "/");
console.log(goat);// it will replace all the occurence of the character in the string. and it is case sensitive.
// toLowerCase(): It is used to convert the string into lowercase. It is done by using toLowerCase() method. It is case sensitive. It will return the string in lowercase.

let wonderwomen = "I am wonder women";
let wonder = wonderwomen.toLowerCase("I");
console.log(wonder);

// toUpperCase(): It is used to convert the string into uppercase. It is done by using toUpperCase() method. It is case sensitive. It will return the string in uppercase.

let wander = wonderwomen.toUpperCase("I am wonder women");
console.log(wander);

// trim(): It is used to remove the white spaces from the string. It is done by using trim() method. It is case sensitive. It will return the string without white spaces. 
// it remove the white spaces from the beginning and the end of the string.
let wonderwomen1 = "   I am wonder women   ";
let wonderwomen2 = wonderwomen1.trim();
console.log(wonderwomen2);


// split(): It is used to split the string into the array. It is done by using split() method. It is case sensitive. It will return the array of the string.
// array: It is a collection of the elements. It is used to store the multiple values in the single variable. It is case sensitive. It will return the array of the elements. 
 
let wanda = " Vision and Jarvis";
let wanda1 = wanda.split(" ");
console.log(wanda1); // it will return the array of the string. it is case sensitive.

// length: It is used to find the length of the string. It is done by using length property. It is case sensitive. It will return the length of the string.

let wanda2 = wanda.length;
console.log(wanda2);