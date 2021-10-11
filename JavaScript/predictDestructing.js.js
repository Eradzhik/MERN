// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// //Tesla
// //Mercedes
// //desctructruing an object
// //name,ages are keys and elon and 47 is values(They make up key-value pairs in array)
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }

// const {age,name} = employee
// console.log(age,name)




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




const { email,password } = person;   //email looks for email when looking for an object


const { email: es6_email, password: es6_password} = person; //previously used email. can change name on the fly.
console.log(email,password,es6_email,es6_password)
//console.log(es6_email,es6_password)


//const {password: es6_password} = person;
















// const { name: otherName } = employee;
// //Predict the output
// //console.log(name);
// console.log(otherName);

// //cause an error, name is not actual variable

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// // line 30 will output 12345
// //line 31 will be undefined, bc we dont have a key word password

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

// //2 is not equal to 5 and its False
// //2 is eaul to 2 and is True

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);

//output value
// output [1, 5, 1, 8, 3, 3]
//output will be 1
//output will be 5, bc we gave variable name willThiswork to it

