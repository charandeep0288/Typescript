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
function identityThree<Type>(val: Type): Type { // the Type are going to mention here is logged here 
    return val;
}

identityThree(1); // this fn is going to take a number value and return a number value.
identityThree("45"); // this fn is going to take a string value and also return a string value.
identityThree("Charandeep"); // this fn is going to take a string value and also return a string value.
identityThree(true); // this fn is going to take a boolean value and also return a boolean value.


// SHORT FORM OF GENERICS
function identityFour<T>(val: T): T { // instead of "T" we can create ower own type and use it here.
    return val;
}

interface Bootle {
    brand: string,
    type: number, 
}

identityFour<Bootle>({brand: "LG", type: 3})