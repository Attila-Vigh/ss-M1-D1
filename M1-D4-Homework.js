/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript (uncommented)
    - You can ask for help, reach the Teaching Assistants if needed
    - The solution must be available for the tutors by the end of the day (5PM CET)
    - You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
    - You can test your code in a separate file or de-commenting the single exercises in this one.
    You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
    Create an array containing the first 5 positive numbers.
*/
console.log("-------------------------------< EXERCISE 1 >-----------------------\n");

let first5PositiveNumbers = [ 1, 2, 3, 4, 5];
console.log( first5PositiveNumbers );


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
console.log("-------------------------------< EXERCISE 2 >-----------------------\n");

let person = {
    name: "Michel", 
    surname: "Nostradamus", 
    email: "michel.contact@nostradamus.com", 
    address: "at the end of the world.com", 
    age: 518
}
console.log( person );

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("-------------------------------< EXERCISE 3 >-----------------------\n");

person.drivinglicent = true
console.log( person );


/* EXERCISE 4
Remove from the previously created object the age property.
*/

console.log("-------------------------------< EXERCISE 4 >-----------------------\n");
delete person.age
console.log( person );

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log("-------------------------------< EXERCISE 5 >-----------------------\n");

let person2 = {}
Object.assign(person2, person)
console.log( "person2:", person2 );
console.log("=====================================\n");

person2.email = "not.michel@nostradamus.com"
console.log( "person2 email changed:", person2 );

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/
console.log("-------------------------------< EXERCISE 6 >-----------------------\n");



function freeShipping (totalShoppingCart, shipping) { 
    
    return totalShoppingCart > 50 
                ? totalShoppingCart -= shipping 
                : totalShoppingCart  
}
let shipping = 10

let totalShoppingCart = 49
let finalPrice = freeShipping(totalShoppingCart, shipping)
console.log( "finalPrice:", finalPrice)   

totalShoppingCart = 50 
finalPrice = freeShipping(totalShoppingCart, shipping)
console.log( "finalPrice:", finalPrice)   

totalShoppingCart = 51 
finalPrice = freeShipping(totalShoppingCart, shipping)
console.log( "finalPrice:", finalPrice)   

totalShoppingCart = 110
finalPrice = freeShipping(totalShoppingCart, shipping)
console.log( "finalPrice:", finalPrice)   


/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log("-------------------------------< EXERCISE 7 >-----------------------\n");


const discount = percentage => 1 - percentage/100

const blackFridey = (totalShoppingCart, shipping, discountPercentage = 1) => (
    
    totalShoppingCart > 50 
        ? totalShoppingCart = (totalShoppingCart - shipping) * discount(discountPercentage) 
        : totalShoppingCart * discount(discountPercentage)
)

totalShoppingCart = 110

let discountPercentage = 20

/** TEST */
let finalBlackPrice = blackFridey(totalShoppingCart, shipping, discountPercentage)
console.log( "finalBlackPrice:", finalBlackPrice)   

totalShoppingCart = 50
finalBlackPrice = blackFridey(totalShoppingCart, shipping, discountPercentage)
console.log( "finalBlackPrice:", finalBlackPrice)   

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("-------------------------------< EXERCISE 8 >-----------------------\n");

let dacia = {
    brand: "Dacia", 
    model: "Duster", 
    licensePlate: "CJ-01-ABC"
}
console.log(dacia);

let cars = [] ;
let licensePlates =[ 
    "AB-86-TDG",
    "SB-24-YCS",
    "MS-25-HTD",
    "BN-78-MYF",
    "MM-12-JRF",
];
let licensePlatesLength = licensePlates.length 

for (let i = 0; i < licensePlatesLength; ++i) {
    console.log(i);
    cars[i] = {}
    cars.push( Object.assign(cars[i], dacia))
    console.log(cars[i]);
    cars[i].licensePlate = licensePlates[i]
    console.log(cars[i]);
}
cars.pop();
console.log( "cars:", cars );

let dacia2 = cars[0]
console.log("dacia2:", dacia2)
let dacia3 = cars[1]
console.log("dacia3:", dacia2)
let dacia4 = cars[2]
console.log("dacia4:", dacia2)
let dacia5 = cars[3]
console.log("dacia5:", dacia2)
let dacia6 = cars[4]
console.log("dacia6:", dacia2)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
console.log("-------------------------------< EXERCISE 9 >-----------------------\n");

let carsForRent = []
    carsForRent.push(dacia2)
    carsForRent.push(dacia3)
    carsForRent.push(dacia4)
    carsForRent.push(dacia5)
    carsForRent.push(dacia6)

console.log("carsForRent: ", carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
console.log("-------------------------------< EXERCISE 10 >-----------------------\n");

carsForRent.splice(0,1); 
carsForRent.pop()
console.log("carsForRent: ", carsForRent);

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/
console.log("-------------------------------< EXERCISE 11 >-----------------------\n");

    console.log(typeof dacia);
    console.log(typeof dacia.brand);
    console.log(typeof dacia.licensePlate);
    

typeof car
/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
console.log("-------------------------------< EXERCISE 12 >-----------------------\n");

let carsForSale = [];
for (let i = 0; i < 3; i++) {
    carsForSale[i] = cars[i];
}
let totalCars = carsForSale.length + carsForRent.length
console.log("totalCars: " + totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
// console.log('\n\n\n\n\n\n\')
console.log("\n\n\n\n\n\n");
console.log("-------------------------------< EXERCISE 13 >-----------------------\n");

console.log("carsForSale: - exapmple 1:");
console.log(".............................");

for (let i = 0; i < carsForSale.length; i++) {
    for (const prop in carsForSale[i]) {
        console.log( prop + " : ", carsForSale[i][prop] );
    }
    console.log("=================================");
    
}

console.log("\n\n\n\n\n\n");

console.log("carsForSale - exapmple 2:");
console.log(".............................");

carsForSale.forEach( car => {
    for (const prop in car) {
        console.log( `${prop} : ${car[prop]}` );
    }
    console.log("================================="); 
})

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/



