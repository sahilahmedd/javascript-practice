// Immediately Invoked Function Expression (IIFE)

// sytex ()()

(function chai() {
    console.log("DB connected");    
})();

((name)=>{
    console.log(`DB connected TWO ${name}`);
}) ("Sahil")