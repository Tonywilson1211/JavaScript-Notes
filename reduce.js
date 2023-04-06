/* reduce()  
* node reduce.js
* reduces all elements of an array to a single output value according to a callback function provided
* example, reduce an array of elements to a total sum e.g 1,2,3 = 6
*/

const nums = [0,1,2,3,4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); //10

