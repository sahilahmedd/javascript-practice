for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("This is 5");
    }
    // console.log(element);
}

for (let i = 1; i <=  10; i++) {
    // console.log(`Outer Loop: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j} and Outer loop: ${i}`);
        // console.log(`${i}*${j}=${i*j}`);
        
    }
    
}

let myArry = ["geek", "pro", "coder"]

for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    if(element == "pro") break;
    console.log(element);
}

for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    if(element == "pro") continue;
    console.log(element);
}