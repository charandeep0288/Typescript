"use strict";
// In "tsconfig.json", at line 52 it is mentioned the output directory location where JS file would get generated. 
// all the .ts files run in the project and output would be generated in ./dist/index.js
console.log("Typescript is here");
console.log("Typescript is here");
// tsc --init => to create "tsconfig.json" file
// npm init -y => to get "package.json" file
// tsc -w => watch mode for ".ts" file and generate JS file on specified location in tsconfig.json
// npm i lite-sever => to run project in the browser & define in package.json, then do -> npm start
// --------------------------------------------------------
// class User {
//     public email: string; // if we have not defined any access specifer then they are consider as "public"
//     // #name: string; // and we use this syntax to define private variable in JS, but recommend not to use in typescript.
//     // private name: string; // it is used in typescript 
//     name: string;
//     private readonly city: string = "Delhi"; // If we don't want anyone to access city outside class, then we can make it private
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//         // this.city // we are inside the class, so accessible
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Delhi";
    }
}
const charandeep = new User("cs@cs.gmail.com", "charandeep");
// charandeep.city = "Jaipur"; // not allowed because city is readonly
// console.log(charandeep.city); // city is private, accessible only with in the class 
// charandeep.city = 2 // not allowed to assingn number value to a variable that stores string
