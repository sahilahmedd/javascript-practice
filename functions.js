const myFun = function(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2;
}

// console.log(myFun(20, 50));

// const loggedIn = (username)=>{
//     if(username === undefined || username == ""){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in!!!`
// }

const loggedIn = (username = "Sahil")=>{
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in!!!`
}

// console.log(loggedIn("MAKe"));
// console.log(loggedIn(""));
// console.log(loggedIn());

// Add cart situation

const calculateCart = (...myCart)=>{            //Spread and rest operator can be used to get all the values
    return myCart
}

// console.log(calculateCart(200, 300 ,1200, 4324));

// Taking object as Parameter in a function

const user = {
    name: "Sahil",
    price: 999
}


function handleObject(anyObject){
    console.log(`Name is ${anyObject.name} and the price is ${anyObject.price}`);    
}

handleObject(user)
handleObject({
    name: "Geek",
    price: 291
})


const myArry = [200, 3000, 123, 4201]

function returnSecondvalue(getArry){
    return getArry[2]
}

console.log(returnSecondvalue(myArry));
