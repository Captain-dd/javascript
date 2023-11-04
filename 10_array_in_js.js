// decalration of array
const myArr = [1,2,3,4,5,6, true, "Captain-dd"]  // Declaration of array by declaring elements

// array can hold hetogeneous elements and are resizable (dynamic sizing)
// array are 0 based indexable
// array are shallowed copy means they share same memory refernce
// changes in one of the copy, the changes will also reflect in other copies
// as they share the same memory reference
// in deep copy both copies does not share the memory reference

console.log(myArr[0]);

let myEmptyArray = new Array()

console.log(myEmptyArray)
console.log(typeof(myEmptyArray));

// Array methods

/**
 * push()  methods add the given element at the end of array
 * pop()  method removes the last element from an array
 * unshift()  method add the given element at the start of array
 * shift() method removes the first element at the start of array
 * includes()  method gives boolean result and used to find the element is present in an array or not
 * indexOf() method gives first index of an element if present in an array else return -1
 * join() method joins all the array element into a string by default ',' will be added between the elements
 * slice() method returns the copy of section of an array but doesnot change the original array
 * splice() method returns the section of an array and remove it from the original array
 * isArray() method returns true if given variable holds array
 * from() method reutrns the array from string and it provides the empty array if whole object is passed as a paramter, it returns array only if you provide the array should be created from object keys or values
 * 
 */

myEmptyArray.push(10)
console.log("myEmptyArray after pushing 10: ", myEmptyArray)
myEmptyArray.push(20)
console.log("myEmptyArray after pushing the 20: ", myEmptyArray)

console.log("myEmptyArray before pop() operation: ", myEmptyArray)
myEmptyArray.pop()
console.log("myEmptyArray after pop() operation: ", myEmptyArray)


console.log("myEmptyArray before unshift(0): ", myEmptyArray)
myEmptyArray.unshift(0)
console.log("myEmptyArray after unshift(0): ", myEmptyArray)

console.log(myEmptyArray.includes(10))
console.log(myEmptyArray.includes(20))

myEmptyArray.unshift(10)

console.log(myEmptyArray.indexOf(10))

const nameArr = new Array("Dhruvil","Dholariya")
console.log(nameArr.join())  // output: Dhruvil,Dholariya
console.log(nameArr.join("")) // output: DhruvilDholariya

const arr = [10,20,30,40,50,60]
const mySliceArray = arr.slice(1,3)
console.log("mySlicedArray", mySliceArray)
console.log("Arr: ", arr)

console.log("Arr before splicing the array: ", arr)
const mySpliceArray = arr.splice(1,3)
console.log("mySplicedArray:", mySpliceArray)
console.log("Arr after splicing the array: ", arr)

const marvel_heros = ["thor", "Ironman", "spidername"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // append the other array as an array not as a single element bascically this will return array in array, it appends in the original array
let combined_heros = marvel_heros.concat(dc_heros)  // it appends other array not as a single element but it appends each element of new array in the orignal array it doesnt affect the original array

console.log(marvel_heros)  // [ 'thor', 'Ironman', 'spidername' ]
console.log(combined_heros) //  'thor', 'Ironman', 'spidername', 'superman', 'flash', 'batman' ]

// concating two array using spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log("all_new_heros", all_new_heros)

console.log(Array.isArray(myArr))
console.log(Array.from("Captain-dd"))
console.log(Array.from({name: "Captain-dd"}))  // Important  returns empty Array

const myObj = {name: "Captain-dd", technology: "python-selenium"}
console.log(Array.from(myObj))

