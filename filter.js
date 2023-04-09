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

// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

// qualify by age
const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough)

// look for a name
const paul = people.filter(p => p.name === "Paul");
console.log(paul)

 
  
// Complex Filtering
const students = [
{
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
    { name: 'javascript', yrsExperience: 1 },
    { name: 'html', yrsExperience: 5 },
    { name: 'css', yrsExperience: 3 },
    ]
},
{
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
    { name: 'javascript', yrsExperience: 0 },
    { name: 'html', yrsExperience: 4 },
    { name: 'css', yrsExperience: 2 },
    ]
},
{
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
    { name: 'javascript', yrsExperience: 1 },
    { name: 'html', yrsExperience: 1 },
    { name: 'css', yrsExperience: 5 },
    ]
},
];

// complex filter to show which student has 5 or more years experience
const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
})
console.log(candidates)


const has5yearsExp = skill => skill.yrsExperience >= 1; // main filter function - equal to or more years experience
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0; // takes the main function and creates a new function to pass through the student skills object
const candidate = students.filter(hasStrongSkills); // defines candidate and passes the second function (which also contains the first function wrapped in it) to then pass the result
console.log(candidate) // this helps keep code neat and easy to read


// challenge - find names with highest scoring maths results.
let studentS = [
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
        results: {science: 84, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 67, english: 87, art: 95},
    }
];

const topMaths = studentS.filter(student => student.results.maths >= 90);
console.log(topMaths)



