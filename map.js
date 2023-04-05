/*
* Map() is an array method. 
* can be an array of anything, strings, array etc
* node map.js
*/



let nums = [1,2,3,4,5];

let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results)

const result = nums.map(num => num *2); // applies the function to each
console.log(result)

let numbers = [ 1,2,3,4,5,6,7,8,9,10];



