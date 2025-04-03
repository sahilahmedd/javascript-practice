// JSON objects

const course = {
    courseName: "JS in Hindi",
    price: 999,
    instructor: "Sahil"
}

const {courseName, price, instructor} = course

// console.log(courseName);
// console.log(price);
// console.log(instructor);

const {courseName: name, price: p, instructor: ins} = course       // We can also give name to the destructured elements of an object
console.log(name, p, ins);
