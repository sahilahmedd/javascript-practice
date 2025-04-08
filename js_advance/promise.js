// Simple promise
const promiseOne = new Promise((resolve, reject)=>{
    // Do an Async task
    setTimeout(() => {
        console.log("Async task is complete!!");
        resolve()
    }, 1000);
})

promiseOne.then(()=>{
    console.log("Promise consumed");
})

// Creating promise without declaration
new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    }, 2000)
}).then(()=>{
    console.log("Async 2 resolved!!!");    
})

// Taking parameters as Object in Promise

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async 3");
        resolve({username: "Sahil", email: "sahilahmedtcg@gmail.com"})
    }, 3000)
})

promiseThree.then((user)=>{
    console.log(user.username);
})

// Error in promise
const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username: "geek", pass: "12345"})
        } else {
            reject('Error: Something went wrong')
        }
    }, 4000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("Promise has been completed or rejected"))


// 
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username: "Javascript", pass: "12345"})
        } else {
            reject('Error: JS went wrong')
        }
    }, 5000) 
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// fetching data using async await

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()

//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error);        
//     }
// }

// getAllUsers();

// fetch Promise

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);    
})
.catch((error)=> console.log(error));