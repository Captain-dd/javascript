let score = "33"  // here 33 is in string we need to convert it into number

console.log(typeof(score))

let num_score = Number(score)  // converting string into number

console.log(typeof(num_score))

// converiting a string which does not contains strictly numbers
// It will be converted to number it will not throw an error
// rather it will retur NaN its stands for Not a Number 

let sample_string = "33dhruvil"

let sample_string_to_num = Number(sample_string)
console.log(typeof(sample_string_to_num))
console.log(sample_string_to_num)

// trying to convert null value into number
// when null value is converted into number it returns 0
let null_var = null

let null_var_to_num = Number(null_var)

console.log(typeof(null_var_to_num))
console.log(null_var_to_num)

// converting boolean value into number
// while converting bool value to num if value is true then it will return 1 and if value is false then it will return 0
let bool_val_true = true
let bool_val_true_to_num = Number(bool_val_true)

console.log(typeof(bool_val_true_to_num))
console.log(bool_val_true_to_num)


let bool_val_false = false
let bool_val_false_to_num = Number(bool_val_false)

console.log(typeof(bool_val_false_to_num))
console.log(bool_val_false_to_num)


// converting num to bool
// if num is 0 then it will be converted to false
// otherwise  any other num will be converted to true

let isLoggedIn = 1

let boolean_is_loggedIn = Boolean(isLoggedIn)

console.log(boolean_is_loggedIn)

let isLoggedOut = 0
let boolean_is_loggedOut = Boolean(isLoggedOut)
console.log("boolean_is_loggedOut: ", boolean_is_loggedOut)

let sample_num = 10
let boolean_sample_num  = Boolean(sample_num)
console.log("boolean_sample_num: ", boolean_sample_num)

let sample_neagative_num = -10
let boolean_sample_negative_num = Boolean(sample_neagative_num)
console.log("boolean_sample_negative_num: ", boolean_sample_negative_num)

// converting string to bool
// if string is empty then it will be converted to
// if string is not empty then it will be converted to true

let empty_string = ""
let bool_empty_string = Boolean(empty_string)

console.log("bool_empty_string: ", bool_empty_string)

let _sample_string = "captain_dd"
let bool_sample_string = Boolean(_sample_string)

console.log("bool_sample_string: ", bool_sample_string)


// converting bool to strig'

let isLoogedIn = true

let str_isLoogedIn = String(isLoogedIn)
console.log("str_isLoogedIn: ", str_isLoogedIn)

let isLoogedIn_false = false

let str_sLoogedIn_false = String(isLoogedIn_false)
console.log("str_isLoogedIn: ", str_sLoogedIn_false)
