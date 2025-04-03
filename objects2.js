// Singleton

const geekUser = new Object()

geekUser.id = "geek123"
geekUser.name = "Geek"
geekUser.email = "geek@geek.com"

// console.log(geekUser);

let myUser = {
    email: "iamuser@mymail.com",
    fullName: {
        userName: {
            firstName: "Sahil",
            LastName: "Ahmed"
        }
    }
}

// console.log(myUser.fullName.userName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1,obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "sahil@ahmed.com"
    },
    {
        id: 2,
        email: "sahil@ahmed.com"
    },
    {
        id: 3,
        email: "sahil@ahmed.com"
    },
    {
        id: 4,
        email: "sahilahmed.com"
    },
    {
        id: 5,
        email: "sahil@ahmed.com"
    },
]

// console.log(users[3].email);
// console.log(geekUser);
// console.log(Object.keys(geekUser));
// console.log(Object.values(geekUser));
console.log(Object.entries(geekUser));

console.log(geekUser.hasOwnProperty("login"));
