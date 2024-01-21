// Array Methods:
// forEach()

/* The forEach method is commonly used for iterating over elements in an array. It is a higher-order function because it takes a callback function as its argument and applies that function to each element in the array*/

const workers = [
  {
    name: "Abhi",
    age: 28,
    salary: 50000,
    isMarried: false,
    profession: "Developer",
  },
  {
    name: "Sara",
    age: 35,
    salary: 60000,
    isMarried: true,
    profession: "Designer",
  },
  {
    name: "John",
    age: 32,
    salary: 55000,
    isMarried: true,
    profession: "Engineer",
  },
  {
    name: "Mike",
    age: 40,
    salary: 70000,
    isMarried: false,
    profession: "Manager",
  },
  {
    name: "Lily",
    age: 28,
    salary: 48000,
    isMarried: false,
    profession: "Analyst",
  },
];

// Here i will be finding the ' Average Salary ' of all the workers by using forEach()

let totalSalary = 0;
workers.forEach((workers) => {
  totalSalary += workers.salary;
});
const avgSalary = totalSalary / workers.length;
console.log(avgSalary);
