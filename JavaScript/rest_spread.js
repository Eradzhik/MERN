let person = { 
        firstName: 'Billy', 
        lastName: 'Bob', 
        email: 'bob@email.com', 
        username: 'BillyB', 
        password: 'hmmmmmm', 
    };

    
const animals = [
    'horse', 
    'dog', 
    'fish', 
    'cat', 
    'bird'
    ];


person = 1234;

console.log(person);

console.log(animals[0]);



//****************************************************************************************************************/
// get firstAnimal and secondAnimal
//    then put the REST of the animals in a new array called otherAnimals
const [firstAnimal, secondAnimal, ...otherAnimals] = animals;

console.log("We used the rest operator(...) to create a new array using the REST of the elements")
console.log("First animal: " + firstAnimal);
console.log("Second animal: " + secondAnimal);
console.log("REST of the animals: " + otherAnimals);
// otherAnimals would consist of ['fish', 'cat', 'bird']


//****************************************************************************************************************/
// making a copy of an object
//    We spread out all of the values to create a copy of the object
//create a brand new copy, an object
const personCopy = { ...person };

console.log(personCopy);


// personCopy === person;
// false


// updating one of the object's properties to prove they are copies and not the same object
personCopy.password = "badPassword";
person.password="newPassword";


console.log("\nThis is the original person");
console.log(person);


//will stay the same
console.log("\nThis is a modified copy of the person");
console.log(personCopy);


// combining the copy and update lines
// The { } create a new object containing what is inside of them
// the ...person copies all of the key/value pairs from the person object into the new object
// the password key MATCHES an existing key and so it will replace the original value with the new value
const personCopy2 = { ...person, password: 'B3tt3rP@ssw0rd' };
console.log("\nThis is a modified copy of the second person object");
console.log(personCopy2);