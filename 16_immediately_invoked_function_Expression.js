// Normal Function
function chai(){
    console.log('DB Connected')
}

// IIFE function declaration
// named IIFE
(function chai2(){
    console.log(`DB Connected`)
})();  // need to explicitly write this ; to end code block, genrally compiler does for you but in this case we need to explicitly write

(function (){
    console.log("Unnamed IIFE:  DB Connected")
})();

// Benifits of IIFE
/**
 * Many times we face issue due to global scope pollution,
 * so to avoid this issue we use IIFE
 * 
 */

// passing parameter in IIFE
(function myNamedIIFE(name, age) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
  })("John Doe", 30);
  
