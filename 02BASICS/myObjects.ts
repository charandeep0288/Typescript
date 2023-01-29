const User = {
    name: "Charandeep Singh",
    email: "charandeep@lco.dev",
    isActive: true,
}


function createUser({name: string, isPaid: boolean}) {

}

createUser({name: "Charandeep", isPaid: false});
// createUser({name: "Charandeep", isPaid: false, email: "charandeep@gmail.com"}); // this is not allowed as we don't have email as accepting parameters in function arguments
let newUser = {name: "Charandeep", isPaid: false, email: "charandeep@gmail.com"};
createUser(newUser); // weird behaviour(this shouldn't have happend because we don't accept email in the fun defination arguments)

function createCourse():{name: string, price: number} { // return type object
    return {name: "reactjs", price: 399};
}

createCourse();



// --------------------------------
// Type Aliases
type User = { // If we would have not defined this, then we might have to define this in fn arguments which would be lengthy and not look good, it's a preffered way.
    name: string;
    email: string;
    isActive: boolean;
}

type Mystring = string // not recommended but allowed

function createUser0(user: User): User {
    console.log(user.name);
    console.log(user.email);
    console.log(user.isActive);
    return {name: user.name, email: user.email, isActive: user.isActive};
}

createUser0({name: "", email: "", isActive: true});


// -------------------------------------
// readonly, ?(optional)
type User1 = {
    readonly _id: string; // lets assume we get this _id from MongoDB and we don't want anyone to change its value, so we can just say "readonly".
    name: string;
    email: string;
    isActive: boolean;
    creditcarddetails?: number; // ? (optional) -> we can have or cannot have this detail.
}

let myUser1: User1 = {
    _id: "2345",
    name: "charan", 
    email: "charan@gmail.com",
    isActive: false,
}

type cardNumber = {
    cardnumber: string; 
}

type cardDate = {
    cardDate: string;
}

// type cardDetails = cardNumber & cardDate; // good practice

type cardDetails = cardNumber & cardDate & {
    cvv: number // not good advice to add object like this instead create a seperate "type" for that like we have created for cardDate and then use it here
}
myUser1.email = "charandeep@gmail.com"
// myUser1._id = "765463"; // _id is readonly so we can't change its value

console.log(myUser1);


// IF WE HAVE AN ERROR IN THE FILE, THEN FILE WOULD NOT COMPILE 
export {} // exporting the values

// tsc myObjects.ts