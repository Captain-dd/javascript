// object declaration

// Object declaration using literals
// When we declare object using literals then object is not created as singleton

// object literal
const user_obj = {
    name: "Captain-dd",
    technology: "python selenium",
    company: "empClaims",
    location: "Jaipur",
    email: "dhruvilDholariya111@gmail.com"
}
// mostly we access elements using . only but some time based on 
// some situation we access the elements using [] square baracket
console.log(user_obj.name)  // accessing elements of object
console.log(user_obj["name"])  // this will return error if we try to access the elments myObj[name]

// Symbol as key in object

const mySymbol = Symbol("Hello world")

const js_usr = {
    name: "Captain-dd",
    technology: "python selenium",
    company: "empClaims",
    location: "Jaipur",
    email: "dhruvilDholariya111@gmail.com",
    [mySymbol] : "Hello world" // Symbol as key in JS
}

console.log(js_usr[mySymbol])
console.log(typeof(js_usr[mySymbol]))

//alter the value of object

js_usr['company'] = "Jio Private Limited"

console.log(js_usr)

// Freezig the object so no values of object can be altered
Object.freeze(js_usr)

js_usr['name'] = "Dhruvil Dholariya"  
// as object is freezed it will not allow the value to be altered, 
// it will not give any error if you try to alter the value just it 
//will not propogate the value to the object

console.log(js_usr)

// Function in Object

const obj_func_ex = {

    name: "Captain-dd",
    technology: "python selenium",
    company: "empClaims",
    location: "Jaipur",
    email: "dhruvilDholariya111@gmail.com",


}

obj_func_ex.greeting = function(){
    return "Hello world"
}


console.log(obj_func_ex.greeting)  // returns the function reference
console.log(obj_func_ex.greeting())  // Executes the funciton

// refering the object key in the function
obj_func_ex.greetingTwo = function(){
    return `hello js user ${this.name}`

}

console.log(obj_func_ex.greetingTwo())