let globalVar = 10; // Declared using 'let'

if (true) {
  let blockScopedVar = 20; // This is block-scoped

  globalVar = 30; // You can modify the global variable declared with 'let'
  blockScopedVar = 40; // You can modify the block-scoped variable
}

console.log(globalVar); // Output: 30
// console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined



// nested scope

// baccha papa se ice-cream mang sakta hey par
// agar papa bacche se ice-cream mange ga to kitna chutiya lagega


function one(){
    let username = "Captain-dd"

    function two(){
        const password = "DBD"
        console.log(username)
    }

    two()

    console.log(password)
}

one()
