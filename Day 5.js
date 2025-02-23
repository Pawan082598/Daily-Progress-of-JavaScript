// Decision Making:-
 
/* In the topic of decision making, we can use the if-else statement to make decisions based on conditions.

we slowly moves towards the loops

initially we work on two conditions or statements and then move to the multiple conditions and then we move to the switch case statement.


example of if-else statement:
 

let fourwheeler = 5;
if (fourwheeler === 4) {
console.log("four wheeler");
}else {
      console.log("It is not a four wheeler");
}

switch case statement:- in this statement we can use multiple conditions and we can use the default condition also. for example


const fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log('This is a banana.');
        break;
    case 'apple':
        console.log('This is an apple.');
        break;
    case 'orange':
        console.log('This is an orange.');
        break;
    default:
        console.log('Unknown fruit.');
}

if our value get matched with any of the case then it will print that related statement otherwise it will print the default statement 

Question: if reminder is 0, print the statement true.....

num = 13



let num = 13; 
if (num % 2===0) {
    console.log("true");
} else { console.log("false");

}


Prompt:- prompt is a function in javascript which we used get input from users. It simply open a dialog box to take input from user. for example: 
    
let name = prompt("what is your name")
console.log(name); 


Question: A school has following rules for grading system:
a. Below 10 and 10 - E
b. 11 to 20 - D
c. 21 to 30 - C
d. 31 to 40 - B
e. 41 to 50 - A 

ask the user to enter marks out of 50 and print the grades using switch case statement.



let marks = prompt("Enter your marks out of 50");

switch(true) {
    case marks < 10: 
           console.log("E");
           break;

    case marks <= 20:
    console.log("D");
    break;

    case marks <= 30:
    console.log("C");
    break;

    case marks <= 40:
    console.log("B");
    break;

    case marks <= 50:
    console.log("A");
    break;

    default:
        console.log("You're not registered");
}



Question: write a program to print the day of the week. if the user enters 1, it should print "Monday", 2 for "Tuesday", 3 for "wednesday", and so on.  

*/


const day = prompt("enter the number");

switch(parseInt(day)) {
    case 1:
    console.log("Monday");
    break;

    case 2:
    console.log("Tuesday");
    break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;


    case 5:
        console.log("Friday");
            break;

     case 6:
         console.log("Saturday");
             break;

    case 7:
     console.log("Sunday");
      break;

    default :
     console.log("Invalid Input");


}
 








