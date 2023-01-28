"use strict";
exports.__esModule = true;
var greetings = "Hello Charandeep";
// greetings = 6;
// greetings = true;
// greetings.includes
// let mynum = 6;
// mynum.toUpperCase(); // not able to do this
greetings.toLowerCase();
console.log(greetings);
// ------------
// number 
var userId = 334455.3; // it is not a good way to define a variable to specify the ":datatype" instead do this
var userId0 = 334455.3; // Typescript is smart enough to know the datatype of a variable from its value we have defined(THIS CONCEPT IS CALLED TYPE INFERENCE)
userId.toFixed();
userId0.toFixed(); // here it knows that datatype of the variable because of typescript concept TYPE INFERENCE
// ------------
// boolean
var isLoggedIn = false; // not preffered way
var isLoggedIn0 = false; // good way 
isLoggedIn.valueOf();
