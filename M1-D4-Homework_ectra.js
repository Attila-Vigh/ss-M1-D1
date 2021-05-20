/*
    ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
    Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/
console.log("-------------------------------< EXERCISE 1  >------------------\n");

let reverseArr1 = [1, 3, 5]
let reverseArr2 = reverseArr1.reverse();reverseArr1
console.log("reverseArr2  :", reverseArr2);

console.log("-------------------------------< EXERCISE 1.0 >------------------\n");

let reverseArr1_0 = [1, 3, 5]
let reverseArr2_0 = []
let reverseArr1_0Length = reverseArr1_0.length

for (let i = 0; i < reverseArr1_0Length; i++) {
    let temoporary = reverseArr1_0.pop()  
    reverseArr2_0.push(temoporary)
}
console.log("reverseArr2_0:",reverseArr2_0);

console.log("-------------------------------< EXERCISE 1.1 >------------------\n\n");

let reverseArr1_1 = [1, 3, 5]
let reverseArr2_1 = []
let reverseArr1_1Length = reverseArr1_1.length

for (let i = 0; i < reverseArr1_1Length; i++) {
    
    reverseArr2_1.push(reverseArr1_1.pop())
}
console.log("reverseArr2_1:",reverseArr2_1);

console.log("-------------------------------< EXERCISE 1.2 >------------------\n");

let reverseArr1_2 = [1, 3, 5]
let reverseArr2_2 = []
let reverseArr1_2Length = reverseArr1_2.length

for (let i = 0; i < reverseArr1_2Length; i++) {

    reverseArr2_2[i] = reverseArr1_2.pop()
}
console.log("reverseArr2_2:",reverseArr2_2);

console.log("-------------------------------< EXERCISE 1.3 >------------------\n");

let reverseArr1_3 = [1, 3, 5]
let reverseArr2_3 = []
let reverseArr1_3Length = reverseArr1_3.length

for (let i = 0; i < reverseArr1_3Length; i++) {
    
    reverseArr2_3[i] = reverseArr1_3.pop(reverseArr1_3.pop-1)
}
console.log("reverseArr2_3:",reverseArr2_3);

/* EXERCISE 2
    Write the code to get the maximum value in an array.
*/

console.log("-------------------------------< EXERCISE 2.0 >------------------\n");
let numbers = [ 2, 54, 23, 76, 35, 98, 117, 116, 654, 767];
let maximumValue = Math.max(...numbers);
console.log("maximumValue:", maximumValue);


/* EXERCISE 3
    Write the code to get the minimum value in an array.
*/

console.log("-------------------------------< EXERCISE 3.0 >------------------\n");

let minimumValue = Math.min(...numbers);
console.log("minimumValue:", minimumValue);

/* EXERCISE 4
    Write the code to get only even numerical values in an array.
*/

console.log("-------------------------------< EXERCISE 4.0 >------------------\n");

let evenNumbers = numbers.filter(( number ) => { if( number%2 === 0) return number })
console.log("evenNumbers:", evenNumbers);
/* EXERCISE 5
    Write the code to delete even entries from an array.
*/
console.log("-------------------------------< EXERCISE 5.0 >------------------\n");

let oddNumbers = numbers.filter(( number ) => { if( number%2 !== 0) return number })
console.log("oddNumbers:", oddNumbers);


/* EXERCISE 6
    Write the code to remove all the vowels from a string.
*/
console.log("-------------------------------< EXERCISE 6.0 >------------------\n");

let string = "This string si going to be without vowels."
let noVowels = string.replace(/a|e|i|o|u/gi, "")
console.log(noVowels);

/* EXERCISE 7
    Write the code to increase all the numeric values in a array by 1.
*/
console.log("-------------------------------< EXERCISE 7.0 >------------------\n");

let addOne = [1, 2, 3, 4, 5, 6, 7]
addOne.forEach( ( num, i ) => addOne[i] = ++num )
console.log("addOne:", addOne);

/* EXERCISE 8 
    Replace all the strings in an array with their length.
    es.: ["strive", "is", "great"] => [6, 2, 5]
*/
console.log("-------------------------------< EXERCISE 8.0 >------------------\n");

let replaceStrWithNum = ["strive", "is", "great"]
let replaceStrWithNumLength = replaceStrWithNum.length

for (let i = 0; i <replaceStrWithNumLength; i++){
    replaceStrWithNum[i] = replaceStrWithNum[i].length
}
console.log( "replaceStrWithNum:", replaceStrWithNum );

/* WHEN YOU ARE FINISHED
    Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/