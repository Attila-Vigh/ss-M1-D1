/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/*
* Variables are boxes. They can contain all kind of types of data and variables( array and objects)
*/

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
console.log("EXERCISE 3");
let sum = 12 + 20
console.log("12 + 20 =", sum);

console.log("==============================================================")
/* EXERCISE 4
Create a variable named x containing the number 12.
*/
console.log("EXERCISE 4");
let x = 12
console.log("The value of x is:", x);

console.log("==============================================================")
/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/
console.log("EXERCISE 5");
let name = "John Doe"
console.log("The name variable holds the value of ", name);

console.log("==============================================================")
/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/
console.log("EXERCISE 6");
let substractFrom12 = 12 - x

console.log("substractFrom12's value is:", substractFrom12);

console.log("==============================================================")
/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, console.log("EXERCISE 7");that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/
console.log("EXERCISE 7");

let name1 = "john"
let name2 = "John"

name1 === name2 
    ? `${name1} id different from ${name2}` 
    : console.log( `If ${name1} and ${name2} are lowercased, it is ${name1.toLowerCase() === name2.toLowerCase()} that they are identical.`)

console.log("==============================================================")
/* EXERCISE 8
Create a variable named x (its value must be less than 10). 
Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/
console.log("EXERCISE 8");

x = 13

x === 1       ? console.log("one")   
    : x === 2 ? console.log("two")   
    : x === 3 ? console.log("three") 
    : x === 4 ? console.log("four")  
    : x === 5 ? console.log("five")  
    : x === 6 ? console.log("six")   
    : x === 7 ? console.log("seven") 
    : x === 8 ? console.log("eight") 
    : x === 9 ? console.log("nine")  
    : console.log("not a valid number!")

function printTheDigit (x) {
    const literalNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 
    // console.log("literalNumbers.length: ", literalNumbers.length);
    let result = x > 0 && x < 10 ? literalNumbers[x] : `${x} is not a digit`
    return result
    
}
console.log(printTheDigit(6));
console.log(printTheDigit(1));
console.log(printTheDigit(0));
console.log(printTheDigit(-6));
console.log(printTheDigit(10));

console.log("==============================================================")
/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/
console.log("EXERCISE 9");
let ternaryExample = x > 42 ? true : false;

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/