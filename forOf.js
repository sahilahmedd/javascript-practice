// For Of loops

// ["","",""]
// [{},{},{}]

let arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);    
}

let greetings = "Hello World!"

// console.log("============= Continue ==============");

for (const greet of greetings) {
    if(greet==" ") continue;
    // console.log(`Each char is ${greet}`);        
}

// console.log("============= Break ==============");

for (const greet of greetings) {
    if(greet==" ") break;
    // console.log(`Each char is ${greet}`);        
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set('PAK', "Pakistan");
map.set('CH', "China");

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}


// Loops on objects (For In loop)

const myObj = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObj) {
    // console.log(`${key} for ${myObj[key]}`);  
}

let myArry = ["js","cpp",".net","java","react"];

for (const key in myArry) {
console.log(myArry[key]);
}