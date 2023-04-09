/* reduce()  
* node reduce.js
* reduces all elements of an array to a single output value according to a callback function provided
* example, reduce an array of elements to a total sum e.g 1,2,3 = 6
*/

const nums = [0,1,2,3,4];
let sum = nums.reduce((acc, curr) => acc + curr, 0); // acc = accumulator and curr = currentValue
console.log(sum); //10

const numS = [0,1,2,3,4];
let sumS = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator: ", acc,
        "Current Value: ", curr,
        "Total: ", acc + curr
    );
    return acc + curr;
}, 0) // the zero explicity tells the function to start with the first value. If blank, it would be 0 , 1 , 1 aka initial value


// Summing an array of numbers:


const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  const totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  console.log(totalExperience)
  
  // Grouping by a property, and totaling it too
  let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {})
  console.log(experienceByProfession)
  //{Developer: 12, Designer: 4}

// reduce challenge

let students = [
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
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const biggest = students.reduce((acc, curr) => {
if (curr.results.english > acc.max) {
  return { name: curr.name, max: curr.results.english };
}
return acc;
}, { name: '', max: 0 });
console.log(biggest);