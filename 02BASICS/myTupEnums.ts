// Tuples in an Array a broad category, special array with some restrictions

//-----------------------------------------
// we want a precise order how we want the values datatype in an array, let's say in this order -> first string, then number, then boolean
// const user: (string | number)[] = [1, "cs"]
let user: [string, number, boolean]

user = ["cs", 345, true]; //  we cannot reverse this order because of restiction that we have applied to this user array
// user = [true, 345, "cs"]; // we cannot reverse the order because we have defined a tuple(order also matter in array, restiction we apply on array)

let rgb: [number, number, number] = [255, 123 ,122]
// let rgb0: [number, number, number] = [255, 123 ,122, 0.5] // we can't do this because we have defined array to accept 3 numbers in an array, no more no less


// -------------------------------------
type User = [number, string]

const newUser: User = [123, "example@gmail.com"]

// something wrong about tuples 
newUser[1] = "cs@gmail.com"; // we can override(something wrong about tuples)
// newUser.push(true); // https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
// Tuple types are a type of array of known length and where the different elements may have different types. A value of type [number, string] is guaranteed to have a length of 2, with a number at element 0 and a string at element 1.

// Why then, does TypeScript allow you to call methods like push(), pop(), shift(), unshift(), and splice() on values of tuple types, when such methods generally destroy the supposed guarantees of tuple types? Shouldn't it stop you from doing that, just like it stops you from assigning a value like [1, "two", "three"] to [number, string] in the first place?
// newUser.pop();
newUser.shift();

export {}