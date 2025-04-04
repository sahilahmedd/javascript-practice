
const coding = ["python","cpp","java","angular","ruby"]

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;    
// })

// console.log(values);


// Filters 

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 4);

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((bk)=> bk.genre == 'Science')

    userBooks = books.filter((bk)=> {
        return bk.publish >= 1995 && bk.genre == "History"
    })
  // console.log(userBooks);


// filter() Exercises

// 1. Filter Even Numbers

const nums = [1, 2, 3, 4, 5, 6];
// Output: [2, 4, 6]


const even = nums.filter((num) => (num%2) == 0);

// console.log(even);

// 2. Filter Active Users

const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Eve", active: true }
];
// Output: Only active users

const active = users.filter((a)=> a.active == true);

// console.log(active);

// 3. Remove Falsy Values

const values = [0, "Hello", "", null, 42, undefined];
// Output: ["Hello", 42]

const fasly = values.filter((val) => val);

// console.log(fasly);

// 4. Filter Words Longer Than 5 Characters

const words = ["hello", "world", "fantastic", "code"];
// Output: ["fantastic"]


const me = words.filter((item) => item.length > 5);

// console.log(me);


  