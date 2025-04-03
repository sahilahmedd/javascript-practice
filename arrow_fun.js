// Arrow functions
// This keyword is used for the current context


const user = {
    username: "Sahil",
    price: 999,
    welcomemessage() {
        console.log(`${this.username}, welcome to this site`);
        // console.log(this);      // here it will show the current context as the user object
        
        
    }
}

// user.welcomemessage()
// user["username"] = "Ahmed"
// user.welcomemessage()

// console.log(this);          // This will give empty object as there is no global context in Node but in browser it will give "WINDOW" object as global object when logging "this" keyword



// +++++++++++++++ ARROW FUNCTIONS ++++++++++++++++

const myFun = () =>{
    const name = "Sahil";
    console.log(this);
}

myFun()

function two(){
    // const name = "Sahil";
    console.log(this);
    
}

// two()


const three = function () {
    console.log(this);
    
}

// three()

// Syntax of arrow function

// const one = () => {
//     return
// }

// const one = (num1, num2) => (num1+num2)

// () => {}
// () => ()