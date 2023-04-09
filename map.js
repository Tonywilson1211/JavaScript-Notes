/*
* map()  
* node map.js
* Iterate through an array and perform an action on each element and return a new array of the results
* example multiply each element in the array by 2.
*/



let nums = [1,2,3,4,5];

// standard method with for loop
let result1 = [];
for (let num of nums) {
    result1.push(num * 2);
}
console.log(result1)

// map method with arrow function
const result2 = nums.map(num => num *2); // applies the function to each
console.log(result2)

// Using map()
const multByTwo = function (num) {
    return num * 2;
}

const results3 = nums.map(multByTwo);
console.log(results3);


// Simplified w/ map()
const result4 = nums.map(function (num) { return num * 2});
console.log(result4)

// Simplfied w/ map() + arrow function
const result5 = nums.map(num => num * 2);
console.log(result5)


// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

// Show name and Id Number
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds)

// Show all information
const studentsWithValues = students.map(student => {
    const result = {};
    for (const key in student) {
        result [`${key}:`] = student[key];
    }
    return result;
});

console.log(studentsWithValues)

// show id and name
const studentsWithIdsAndNames = students.map(student => {
    return { id: student.id, name: student.name };
  });
  
  console.log(studentsWithIdsAndNames);

  // call certain part of object

  let pupils = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

let [john, ...rest] = pupils.map(({name, results}) => [name, results]);
console.log(john);
console.log(rest);
