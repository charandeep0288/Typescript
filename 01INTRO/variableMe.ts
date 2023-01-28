let greetings: string = "Hello Charandeep";

// greetings = 6;
// greetings = true;
// greetings.includes

// let mynum = 6;
// mynum.toUpperCase(); // not able to do this

greetings.toLowerCase(); // if we have defined the type of the variable then all fns that we can have on that type variable are suggested here when we add a .(dot) here.
console.log(greetings);

// ------------
// number 
let userId: number = 334455.3; // it is not a good way to define a variable to specify the ":datatype" instead do this

let userId0 = 334455.3; // Typescript is smart enough to know the datatype of a variable from its value we have defined(THIS CONCEPT IS CALLED TYPE INFERENCE)
userId.toFixed();
userId0.toFixed(); // here it knows that datatype of the variable because of typescript concept TYPE INFERENCE


// ------------
// boolean
let isLoggedIn: boolean = false; // not preffered way
let isLoggedIn0 = false; // good way 

isLoggedIn.valueOf();

// ------------
// any - mostly please avoid any to use
let hero;
let hero0: string; // this would force us to store only "string" values

function getHero() {
    return "Hero";
    // return true; // we can return anything(when we have not defined any datatype while defining that variable "hero"), not good 
}

hero0 = getHero();

export {} // temp solution for that swigly line(error) on variable declaration