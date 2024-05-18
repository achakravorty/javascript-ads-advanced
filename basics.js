
// Assigning a value to a variable at the moment of its declaration is known as initialization.
let character = "Hello"; // string data type
// or 'Hello';
console.log(character); // printing the value to the console
character = "World"; // let variables can be reassigned
console.log(character); 

let count = 8; // number data type
console.log(count + 1);

//primitive data types - String and Number
//non-primitive data types - Array

let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);

rows[2] = 10; // arrays are mutable
console.log(rows);
// rows[2] = rows[rows.length -1];

rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped);

let pushed = rows.push("freeCodeCamp"); // returns the new length of the array, after adding the value you give it.

const char = "Hello" // const variable cannot be reassigned and cannot be unintialized


const rows = [];

//for-loop
for (let i = 0; i < count; i = i + 1) {
    console.log(i);
}

// for...of loop
// for (const value of iterable) {
// }

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);


//.repeat( method) -This method accepts a number as an argument, specifying the number of times to repeat the target string.
const activity = "Code! ";
activity.repeat(3);


//function - a block of code that can be resued 
// function name(parameter) {
//    // body
// }

//if-condition
//truthy values - truth, 1
//falsey values- false, 0, "", null, undefined, and NaN
// if (true) {
//     console.log("Condition is true");
//   }

//while-loop
let continueLoop = false;
let done = 0;

while (continueLoop) {
  done++;
  rows.push(padRow(done, count));
if (done === count) {
    continueLoop = false;
  } 
}

//equality 
// == ("0" == 0 is true)
// === strict equality - to check if two values are equal and share the same type