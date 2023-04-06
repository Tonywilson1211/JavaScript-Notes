/**
 * filter()
 * node filter.js 
 * Iterates through an array and filters out elements that aren't wanted based on the callback function
 */


let nums = [1,2,3,4,5,6,7,8,9,10];
let evens = nums.filter(n => n % 2 === 0); // iterates through nums and show elements divisable by 2 (even numbers) || for odds, 2 === 1. 
console.log(evens); // [2,4,6,8,10]

let names = ['mike','jill', 'matt','jane', 'tony'];
let mNames = names.filter(name => name.charAt(0) === 'm') // iterate through names and look for first element 'm'. 0 = first element.
console.log(mNames) // mike, matt



