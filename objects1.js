// Objects

// Singleton 
// Object literals

let mySym = Symbol("key1")

const jsUser = {
    name: "Sahil",
    "full Name": "Sahil Ahmed",
    location: "Jaipur",
    age: 20,
    email: "sahil@gmail.com",
    mySym1: "mykey1",
    [mySym]: "mykey1",
    isLoggedin: true,
    lastLogin: ["Mon", "Tue"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(typeof jsUser.mySym1);

// console.log(typeof jsUser[mySym]);

jsUser.email = "sahil@canva.com"
// console.log(jsUser);
// Object.freeze(jsUser)
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full Name"]}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
