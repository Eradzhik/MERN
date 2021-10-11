// // programmer version
magic();

var foo;

console.log(foo, "foo here");

// var foo = "bar";
foo = "bar";

function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;   //change to let after
}

console.log(foo);


// practicing HOISTING
// This is the way javascript views what was written

//!added in:

//first run through in compilation process, functions are moved to the top

// function magic(){
//     foo = "hello world";
//     console.log(foo);
//     var foo;
// }

// //2nd step in compilation.. move all var declarations to the top (not the assigned value)
// var foo;

// // //3rd step bring the rest down
// magic();

// foo="bar";

// console.log(foo);