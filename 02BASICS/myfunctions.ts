function addTwo(num: number): number { // If we would have not defined "number" datatype, it would have been "any" datatype which is not good.
    // num.toUpperCase(); // It would not be allowed if we have defined a datatype while declaring variable in the arguments.
    return num + 2; // we have defined returned type to be number so this is good
    // return "hello"; // we must restict users which type of value we want to return (this is allowed but not right because we are getting number and we have not defined which type of value we should return). 
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}


addTwo(5);
// addTwo("5"); // We cannot send string value to the function if we have defined a datatype(to be number) that we are going to accept in that function.

let myValue = addTwo(5); // we must also take care of what we are returning from the function

// getUpper(4); // datatype is string not number, so please pass string instead of number
getUpper("4");

// signUpUser(1, 2, 3); // if type is "any", user can send anything from function  call and that is not good.(we must defined datatypes of the variables in function arguments for good practice).

signUpUser("Charandeep", "example123@gmail.com", false);

loginUser("c", "c@gmail.com");


// -------------------------------
// we can have this case also where we can return more than 2 datatypes values (We can use UNION {more on it later})
// function getValue(myVal: number): boolean | string {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

// In arrow fn,
const getHello = (s: string): string => {
    return "";
}

// -------------------------------
const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => { // call back fn & typescript knows "hero" type based on array values we haved defined 
    return `hero is ${hero}`; // we must defined return type
    // return 2;
});

// -------------------------------
function consoleError(errmsg: string): void { // it is good practice to specify "void" return type 
    console.log(errmsg);
}


// In this case where we want to handle errors we must use "never" instead of "void"
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}
export {} 