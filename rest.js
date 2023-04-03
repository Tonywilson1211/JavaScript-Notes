/**
 * To run this file in Gitpod, use the 
 * command node rest.js in the terminal
 * 
 * Rest Parameter Syntax
 * Combines individual elements into an array
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1,2,3);
console.log("Sum:", sum)

// Extra arguments are ignored
let sum2 = sumAll(1,2,3,4,5,6);
console.log("Sum2:", sum2)


// Function using ...rest
const sumRest = (a,b,...best) => { //best can be any word
    let sum = a+b; //need two parameters to be able to do sum. "" would return array as string
    for (let i of best) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1,2,3,4,5,6,7,8,9,10);
console.log("Sum3:", sum3)

// Rest Parameter Challenge

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
    let newArray = [...arr, ...letters].sort().reverse();
    return newArray;
}
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log(reverseSort);
console.log(mixedLetters);