// This refers to the current context

const user = {
    username: "Captain-dd",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
    }
}

user.welcomeMessage()

user.username = "sam"
user.welcomeMessage()


const user2 = {
    username: "dhruvil dholariya",
    welcomeMessage: function(){
        console.log(`${user2.username}, welcome to website`);
    }
}

user2.welcomeMessage()
user2.username = "Nidhi"
user2.welcomeMessage()


// this cant be used in function 
// if we use this in function it will consider it as undefined
function printWelcomeMessage(){
    let username = "Captain-dd"
    console.log(`${this.username}, welcome to the website`);
}

printWelcomeMessage()

// Arrow function
/**

* Concise Syntax

function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

* Implicit return: Arrow functions automatically return the result of a single expression without the need for the return keyword.

function multiply(a, b) {
  return a * b;
}

const multiply = (a, b) => a * b;


 */

// single line arrow function 
// No need of explicit return statement if expression is single line and written in parenthesis
// time stamp 5:45:00 https://www.youtube.com/watch?v=sscX432bMZo&t=19518s
const multiply = (a, b) => (a * b);

// multi line arrow function
// need of explicit reuturn statement if {} curley bracket is used
const add = (a, b) => {
    // Function body with multiple statements
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
    return sum;  // explicit return statement
  };
  
  const result = add(5, 3);
  

