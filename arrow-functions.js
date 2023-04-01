/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b
}
let sum = addTwoNumbers(3,5)
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbersOne = (a, b) => {
    // Code Block
    return a + b
}
let sums = addTwoNumbersOne(2,5)
console.log(sums);

// Single Line Arrow Function With Parameters
    // const addTwoNumbers2 = (a,b) => (a + b); also valid
const addTwoNumbers2 = (a,b) => a + b;

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello!');

const sayHello = () => console.log('hello again');
sayHello();


// Returning Multiple Lines

const returnMultpleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultpleLines())
