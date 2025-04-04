// Map function

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map((num)=> {return num+10});

const newNums = myNumers.map((num)=> num * 10)
                        .map((num)=> num +1)
                        .filter((num)=> num > 40);

// console.log(newNums);

// map() Exercises

// => 1. Capitalize Names
const names = ["john", "alice", "bob"];
// Output: ["John", "Alice", "Bob"]

const up = names.map((item)=> item.toUpperCase());

// console.log(up);


// => 2. Double the Numbers

const nums = [1, 2, 3, 4];
// Output: [2, 4, 6, 8]


const double = nums.map((num) => num*2);

// console.log(double);

// => 3. Extract Property from Array of Objects

const users = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
// Output: ["Alice", "Bob", "Charlie"]

const prop = users.map((item)=> item.name.toLocaleUpperCase());

// console.log(prop);

// => 4. Convert Temperatures (C to F)

const celsius = [0, 10, 20];
// Output: [32, 50, 68]

const fer = celsius.map((c)=> c*(9/5)+32);

console.log(fer);




