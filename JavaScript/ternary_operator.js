const person = {
    firstName: 'Billy',
    lastName: 'Bob',
    email: 'bbob@email.com',
    password: 'passw0rd!',
    username: 'billyb',
  };


// If we invoke either of these functions, they will return the same exact result.

// Basic if statement
// console.log("\nUsing the 'normal' if / else statement");
if(person.password === "passw0rd!") {
    console.log("You need to change your password!");
  } else {
    console.log("Thanks for changing your password!");
  }


// Ternary statement
//    First check to see if the expression is true or false
//    the statement(s) after the ? is what we do if it is TRUE
//    the statement(s) after the : is what we do if it is FALSE
//    don't forget the ; at the end of the last statement
// console.log("\nUsing the 'ternary' if / else statement");

person.password === "passw0rd!" ? 
console.log("You need to change your password!")
: console.log("Thanks for changing your password!");