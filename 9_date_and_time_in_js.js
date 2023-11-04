// date and time

let myDate = new Date()

console.log(myDate);  // output: 2023-11-04T11:38:06.712Z
console.log(typeof(myDate))  // output: object

console.log("toString method: ", myDate.toString())
console.log("toDateString(): ", myDate.toDateString())
console.log("toISOString: ", myDate.toISOString())
console.log("toLocaleDateString: ", myDate.toLocaleDateString())
console.log("toLocaleTimeString: ", myDate.toLocaleTimeString())

/*

toString method:  Sat Nov 04 2023 17:14:37 GMT+0530 (India Standard Time)
toDateString():  Sat Nov 04 2023
toISOString:  2023-11-04T11:44:37.658Z
toLocaleDateString:  11/4/2023
toLocaleTimeString:  5:14:37 PM

*/

// Declare own date
// month start with 0 in javascript date object keep this in mind
let myCreatedDate = new Date(2023, 0, 23, 5, 3) // we can also provide time in this 
console.log("My own created date: ", myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())

let myTimeStamp= Date.now()

console.log(myTimeStamp)

// Create your own customized date string

let newDate = Date()
let customDateString = newDate.toLocaleString(
    'default', {
        weekday: "long",
        month: "numeric"
    }
)

console.log("customDateString: ", customDateString);
