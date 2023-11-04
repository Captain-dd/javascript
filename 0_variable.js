const account_id = 5107
let account_Email = "dhruvildholariya111@gmail.com"
var account_password = "DBD@150111"
account_city = "Jaipur"

let account_state;  // decalring undefined variable


// when you declare the variable using const you cant change the value of variable
// let --  variable can change at 

// account_id = 2  Not allowed to reassign the variable as it is declared with const keyword

// difference between let and var 
// variable cant be reassigned outside the scope of var if it is declared with let
/*
Prefer not to use var
use Let 
as using var creates block scope and functional scope
*/

console.log(account_id)
console.table([account_id, account_Email, account_password, account_city, account_state])