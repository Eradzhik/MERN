const person = {
    firstName: 'Billy',
    lastName: 'Bob',
    email: 'bbob@email.com',
    password: 'passw0rd!',
    username: 'billyb',
    addresses: [ //arrays in js can hold multiple objects. wonky and different but powerful and easy to use
        { //these curly braces are going to designate objects
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ], //square brackets are going to designate an array
};

//primative types: 
//strings == "hello"
//numbers = 1, 2, 3
//booleans =  true/false

//complex types:
//arrays = []
// objects = {}
// classes


const animals = [
    'horse',
    'dog',
    'fish',
    'cat',
    'bird'
];

// BEFORE ES6 - you had to access everything manually / specifically
var es5Email = person.email;
var es5FirstAnimal = animals[0];


// AFTER ES6 - destructuring "automatically" copies a value from the object / array
//    in to a local variable of the SAME KEY NAME (objects) or based on index (arrays)
const { email } = person;   //email looks for email when looking for an object
// const { password } = person;

const [es6_firstAnimal, second] = animals;    //es6_firstAnimal can be ANYTHING. As written, we're just looking for the first index. Each added = next index.


console.log(es5Email);
console.log(email);

console.log(es6_firstAnimal);
console.log(second);


// Before ES6 
//    only one piece of data can be accessed at a time
var es5_email = person.email;
var es5_password = person.password;
var es5_firstAnimal = animals[0];
var es5_thirdAnimal = animals[2];

console.log(es5_thirdAnimal);


// with ES6 destructuring I can pull any variable out that I want...all at once!

// skipping a value in an array can be done with commas


const [, , , bananasoup] = animals; //two commas = skip this
// solving name conflicts can be done when destructuring
const { email: es6_email, password } = person; //previously used email. can change name on the fly.
const {password: es6_password} = person;
console.log(bananasoup, "bananasoup");


// nested destructuring
//    access the addresses array inside of the person object
//    use the array destructuring to create 2 new local variables to hold each address
const { addresses: [whiteHouse, sherlock] } = person;
//how will we log this? to get the value?


console.log(whiteHouse.city);
console.log(sherlock);