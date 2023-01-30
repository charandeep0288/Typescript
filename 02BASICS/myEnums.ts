// Enums(Enumerations) exists for certain times where we want restrict somebody's choice with values that are offered here.

// eg:- Plane tickets -> corner, middle, window (seats)


// NOT A GOOD CODE
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// if(seat === AISLE) {
//     // do something
// }


enum SeatChoice {
    AISLE = 10, // by default value is 0, but we have defined its value i.e; 10
    MIDDLE = 22, // its value is +1 of last value i.e; 11, but we can also change its value to something else also
    WINDOW, // its value is +1 of last value i.e; 23
    FOURTH = 44, // fourth seat
};

enum SeatChoice0 {
    AISLE = "ailse", // once we have provided string value, then we have to provide next consecutive varaible a value also and so on
    MIDDLE = "middle", 
    WINDOW = "window", 
    FOURTH = 44,
};

// COMPILE THIS CODE AND SEE WHAT JAVASCRIPT IS BEING GENERATED
// we get Immediately Invoked Function Expression(iife) in JS
enum SeatChoice1 {
    AISLE = "ailse",
    MIDDLE = 3, 
    WINDOW, // now this would be 4
    FOURTH, // and this 5
}

const enum SeatChoice2 { // put a const before this so it would not create unneccessary code with iife being generated in js, only that part that is neccessary
    AISLE = "ailse",
    MIDDLE = 3, 
    WINDOW, // now this would be 4
    FOURTH, // and this 5
}

const csSeat = SeatChoice1.AISLE; 
const csSeat1 = SeatChoice2.AISLE; 
const csSeat2 = SeatChoice2.MIDDLE; 

export {}