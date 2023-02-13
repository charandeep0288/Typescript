// In Browser
// typeof 1 -> number
// typeof "cds" -> string
// typeof "" -> string
// typeof [1, 2, 3, 4, 5, 6] -> object
// typeof {"key": "value"} -> object
// typeof null -> object

// ------------------------------------------
// we are presenting Cautions(that is can also happen), not solutions 

function detectType(val: number | string) {
    // return val.toLowerCase(); // we are not allowed to do this because val can be any thing of both string or number, so we use if() conditions to diffentiate btw the val type
    if(typeof val === "string") { // "typeof" Type Guard
        return val.toLowerCase();
    }

    return val + 3; // we would reach this code, when we are 100% sure it is a number.
}

// function detectType_01(val: number | string | number[]) { } 

function provideId(id: string | null) { // we want to find a record and there can be a case where we are not able to find any id, that's why we have added "null" also for cautionary tail.
    if(!id) { // make sure to be extra cautious about "null", how we are with "string" OR "number" OR anyothere datatype 
        console.log("Please provide ID");
        return;
    }

    id.toLowerCase();
}


function printAll(strs: string | string[] | null) {
    
    if(strs) { // "null" check 
        if(typeof strs === "object") { // "Arrays" are also considered as "objects" in JS
            for(const s of strs) {
                console.log(s);
            }
        } else if(typeof strs === "string") { // "string" check // "typeof" Type Guard 
            console.log(strs);
        }
    }
}


// ---------------------------------------------------------
// The "in" operator narrowing 
interface User {
    name: string, 
    email: string,
}

interface Admin {
    nam: string,
    email: string,
    isAdmin: boolean,
}

function isAdminAccount(account: User | Admin) { 
    if("isAdmin" in account) {
        return account.isAdmin;
    }
}