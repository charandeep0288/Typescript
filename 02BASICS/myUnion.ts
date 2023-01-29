// It is recommended to be stricted about how many datatypes we can define with UNION operator.

let score: number | string = 33 // if in any case we can have string or number value that we can accept, so we can user UNION here

score = 44;

score = "55";

// -------------------
// we are building an application which has multiple hierarchy of user and admin and you we want to define a strict type for that
type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let charandeep: User | Admin = { // if we remove this "| Admin" from here then the line 26 where we define properties of of Admin would give error because "charandeep" user would not be "Admin" instead only "User"
    name: "Charandeep", 
    id: 435
}

charandeep = {username: "Charan", id: 435}

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3);  
getDbId("3"); // both calls are good



function getDbId(id: number | string) {
    // id.toLowerCase(); // "id" can be "number" OR "string", so this ".toLowerCase()" is giving me errors(typescript is smart enough to know this is not just a single datatype defined varaible)
    if(typeof id === "string") { // this is called UNION NARROWING
        id.toLowerCase();
    }
    if(typeof id === "number") {
        id += 2;
    }
}


// ---------------------------
// array

// const data: number[] = [1, 2, 3, "4"] // this is ARRAY only for NUMBERS not STRING, so can't have "4" string value in this array

const data2: string[] = ["1", "2", "3", "4"] 

// const data3: string[] | number[] = ["1", "2", "3", 4] // this is saying data3 can store array of string OR array of number, NOT an array which can store both number and string values
const data4: (string | number | boolean)[] = ["1", "2", "3", 4, true] // not a thing to do, hehehe, just to know  


// -----------------------
// Litral type of assignment
let pi: 3.14 = 3.14 // Litral type of assignment
// pi = 3.145 // this is not allowed as we have mentioned its value to be constant i.e, 3.14

// -----------------
// valid use case of - Litral type of assignment (secure the application)
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"
// seatAllotment = "crew" // we have not defined "crew" in valid awailable seatAllotment, so can't allow this("crew" seats are for "crew" only)
