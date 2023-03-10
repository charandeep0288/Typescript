// Arrays are also Generics behind the scene 

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

// Generics
function identityThree<Type,>(val: Type): Type { // the Type are going to mention here is logged here 
    return val;
}

identityThree(1); // this fn is going to take a number value and return a number value.
identityThree("45"); // this fn is going to take a string value and also return a string value.
identityThree("Charandeep"); // this fn is going to take a string value and also return a string value.
identityThree(true); // this fn is going to take a boolean value and also return a boolean value.


// SHORT FORM OF GENERICS
function identityFour<T,>(val: T): T { // instead of "T" we can create ower own type and use it here.
    return val;
}

interface Bootle { // created my own type that I want and using it.
    brand: string,
    type: number,
}

identityFour<Bootle>({ brand: "LG", type: 3 })


// --------------------------------------------------
// Generics in Arrays and Arrow fn

function getSearchProducts<T,>(products: T[]): T { // <T,> repesents that it is a generics syntax, not a JSX syntax for people who are working on react(they do this usually to differ btw these).
    // return 3; // can't return this "number" value because return type is "T", If we want to return a number then we have to define the return type as "number" instead of "T".
    // do some database operations
    console.log(products.length); // we can use all properties of an array in this fn.
    const myIndex = 3;
    return products[myIndex]; // return type is "T", so return value should be one of the value of that input array.
}

// Generics in Arrow fn
const getMoreSearchProducts = <T,>(products: Array<T>): T => { // <T> -> syntactical sugar, Array<T> is same as T[]
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
}


// ------------------------------------------------------------
// Using Type Parameters in Generic Constraints

interface Database {
    connection: string,
    username: string,
    password: string,
}

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    };
}

function anotherFunction_01<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    };
}

// anotherFunction(3, "4"); // this would not work if we have defined that we are going to get 2nd argument as "number" using "extends" 
anotherFunction(3, 12);
anotherFunction(3, 4.6);

anotherFunction_01(3, { connection: "DBMS", username: "Charan", password: "password11" })


// Using Class Types in Generics
interface Quiz {
    name: string,
    type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class Sellable<T,> { // Generic Class
    public cart: T[] = [];


    addToCart(product: T) {
        this.cart.push(product);
    }
}