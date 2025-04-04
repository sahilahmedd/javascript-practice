// Reduce 


const myNum = [1,2,3,4]

const myTotal = myNum.reduce(function (acc , currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0)

// console.log(myTotal);



// reduce() Exercises

// 1. Sum of Numbers

const nums = [1, 2, 3, 4];
// Output: 10


const sum = nums.reduce((acc, cur) => acc + cur, 0);

// console.log(sum);

// 2. Find Maximum Number

const nums1 = [10, 5, 100, 67];
// Output: 100

const max = nums1.reduce((acc, cur) => {
    if( cur > acc){
       return cur
    } else {
        return acc        
    }
}, 0)

// console.log(max);


// 3. Count Occurrences

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Output: { apple: 3, banana: 2, orange: 1 }


const count = fruits.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});

// console.log(count);

// 4. Flatten an Array

const nested = [[1, 2], [3, 4], [5]];
// Output: [1, 2, 3, 4, 5]


// const flat = nested.reduce((acc , cur) => {
//     acc = acc.concat(cur)
//     return acc
// }, [])

const flat = nested.flat()

console.log(flat);
