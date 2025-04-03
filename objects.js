const name  = "Sahil";
const score = 523

// console.log(`The score of ${name} is ${score}`);

let person1 = {
    age: 24,
    job: "software engineer",
    location: "Jaipur",
    hacker: true,
    hobbies: {
        hacking: true,
        coding: "Sometimes",
        reading: {
            book1: "Can't hurt me",
            book2: "The Practicing mind",
            book3: "Mindset",
            book4: "Don't be sad",
        }
    }
}

let person2 = {
    age: 20,
    job: "Hacker",
    location: "Jaipur",
    hacker: false,
    hobbies: {
        hacking: false,
        coding: "Yes",
    }

}



person1.hobbies.reading["book6"] = "The Holy Qur'an"

person1.hobbies.reading["book5"] = "The Power of Subconscious mind"
person1.greet = function (){
    console.log(`Hello I'm a ${this.job}`);
    
}

// console.log("Age: ",sahil.age);
// console.log("Books: ", sahil.hobbies.reading.book1);

// console.log(person1.hobbies.reading);
// console.log(person1.greet());

person2.hobbies.reading = {
    selfhelp: false,
    pyschology: {
        book1: "How to win friends and Influence people",
        book2: "Pyscho Cybernatics",
        book3: "Influence",
    }
}
person2.hobbies.reading.selfhelp = true;

// console.log(person2.hobbies.reading.pyschology);
// person2.hobbies.reading.pyschology.listall = ()=> {
//     for (const key in this) {
//         console.log(this[key]);
        
//     }
// }

// console.log(person2.hobbies.reading.pyschology.listall());

// delete person2.age

// console.log(person2);

// if (person1.age >= person2.age){
//     console.log("Person 1: ",person1.hobbies.reading);    
// } else {
//     console.log("Person 2: ",person2.hobbies.reading);
// }

if (person2.hobbies.reading.selfhelp == true){
    console.log(person2.hobbies.reading.pyschology);    
} else {
    person2.hobbies.reading.mybooks = person1.hobbies.reading
    console.log("Person 2: ",person2.hobbies.reading.mybooks ? delete person2.hobbies.reading.pyschology && person2.hobbies.reading.mybooks : "");
    
}

console.log("Person 2 obj: ",person2);

// console.log("Pyschology: ",person2.hobbies.reading.pyschology);
// console.log("MyBooks: ",person2.hobbies.reading.mybooks);


