//declaring object as singleton

const tinderUser = new Object()

console.log(tinderUser)

tinderUser.id = 5107
tinderUser.name = "Dhruvil Dholariya"
tinderUser.isLoggedIn = false

console.log(tinderUser.name)

// creating nested objects

const regularUser = {
    email: "dhruvildholariya111@gmail.com",
    fullName: {
        firstName: "Dhruvil",
        lastName: "Dholariya"
    }

}

console.log(regularUser.fullName.lastName)

// option chainging in JS
/**
 * Optional chaining is a feature introduced in ECMAScript 2020 (ES11) 
 * that allows you to safely access nested properties or 
 * call methods of an object without having to explicitly check 
 * for the existence of each property or method at every level. 
 * It helps prevent "TypeError: Cannot read property 'x' of 
 * undefined" errors when trying to access properties or methods 
 * on objects that may not exist in the object hierarchy.
 * 
 * So we use generally it when we are dealing with API's
 */

//Accessing nested properties or elements of object using option chainning

console.log("Accessing lastname using option chaining", regularUser.fullName?.lastName)

console.log("Accessing a property which doesnot exits with option chaining: ", regularUser.username?.lastName)  // THis will print undefined and not give any error as it is accessed with option chaining
// console.log("Accessing a property which doesnot exits: ", regularUser.username.lastName)  // This will give error as username property does not exist

// Combining two objects

const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log("obj3 = {obj1, obj2}:   ", obj3)

// giving {} empty object is optional but it is a good practice 
// because it gaurenttes that the return object will contain the all given objects elements
const obj4 = Object.assign({}, obj1, obj2)

console.log(obj4)

// combining object using spread operator
const obj5 = {...obj1, ...obj2}

console.log(obj5)

// Array objects

const userInfo = [
    {
        name: "Dhruvil Dholariya",
        email: "dhruvildholariya111@gmail.com"
    },
    {
        name: "Kaushik Patel",
        email: "kaushikpatel@gamil.com"
    },
    {
        name: "Nirav Bhuva",
        email: "niravBhuva@gamil.com"
    }
]

console.log("Accessing array of objects: ", userInfo[1].name)

// Getting of all keys and values of a object

console.log("Keys of object obj1: ", Object.keys(obj1))
console.log("Values of object obj1: ", Object.values(obj1))
console.log("Entries of object obj1: ", Object.entries(obj1))

// Checking wheather property is preset in an object or not
console.log(obj1.hasOwnProperty('1'))
console.log(obj1.hasOwnProperty('3'))


// Destructring in JS

const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log("Value of courseInstructor property from course object: ", courseInstructor)
console.log("Value of courseInstructor property from course object: ", instructor)