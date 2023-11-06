// Functions in JS

function sayMyname(){
    return "Dhruvil Dholariya"
}

console.log(sayMyname)  // function refernce

console.log(sayMyname())  // Excecuting functions

// num1 and num2 are called parameters
function addTwoNum(num1, num2){
    let result =  Number(num1) + Number(num2)

    return result
}

console.log(addTwoNum(10, 20))  // The values passed during function calling is known as arguments
console.log(addTwoNum(10, "20"))
console.log(addTwoNum(10, "20a"))

function loginUserMessage(username){
    // we are checking that username is passed or not
    // if (username === undefined){
    //     return `Please enter username`
    // }

    // IMPORTANT 4:53 - 4:54   https://www.youtube.com/watch?v=sscX432bMZo&t=14658s
    // if (!username){  // undefined is false by default so by applying not operator it will be converted into true so this if section will get exectued
    //     return `Please enter username`
    // }

    // return `${username} just logged in`
}

console.log(loginUserMessage("Dhruvil Dholariya"))
console.log(loginUserMessage()) // when no argument is passed it passes undefined  as argument


// rest operator
// It is used to pass the multiple arguments
function calculateCartPrice(val1, val2, ...price){
    
    console.log("val1: ", val1)
    console.log("val2: ", val2)
    console.log("price: ", price)

}

calculateCartPrice(100, 200, 300, 400)

// Passing object into functions

/**
 * 
 * Objects in JavaScript are also passed by reference when used as function arguments. 
 * When you pass an object to a function, you are passing a reference to the original object, 
 * and any modifications made to the object inside the function will affect the 
 * original object outside the function. 
 * 
 * However reassing the object will not affect the original array 
 */

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

const user = {
    username: "Captain-dd",
    price: "399"
}

handleObject(user)

// Passing array in function

/**
 * In JavaScript, when you pass an array to a function as an argument, 
 * you are passing a reference to the array, not a copy of the array. 
 * This means that any changes made to the array inside the function 
 * will affect the original array outside the function, as they both point 
 * to the same data in memory. 
 * 
 * Reassing the array to a new array will not affect the original array outside the function 
 * 
 * In this example, the arr variable inside the function is initially referencing 
 * the same array as myArray. So, when you modify the array with arr.push(4), 
 * it affects the original array. However, when you reassign arr to a new array, 
 * it doesn't affect the original array because arr now points to a different array.
 */


function modifyArray(arr) {
    arr.push(4); // Modifying the array inside the function
    arr = [1, 2, 3]; // Reassigning 'arr' to a new array
  }
  
  const myArray = [1, 2, 3];
  modifyArray(myArray);
  
  console.log(myArray); // Output: [1, 2, 3, 4]


// variable holding function 
// The main difference between this is function hold in an 
// variable cant be accessed before declaration

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(10))
  



