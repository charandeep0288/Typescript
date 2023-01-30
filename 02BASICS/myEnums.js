"use strict";
// Enums exists for certain times where we want restrict somebody's choice with values that are offered here.
exports.__esModule = true;
// eg:- Plane tickets -> corner, middle, window (seats)
// NOT A GOOD CODE
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;
// if(seat === AISLE) {
//     // do something
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 23] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 44] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
;
var SeatChoice0;
(function (SeatChoice0) {
    SeatChoice0["AISLE"] = "ailse";
    SeatChoice0["MIDDLE"] = "middle";
    SeatChoice0["WINDOW"] = "window";
    SeatChoice0[SeatChoice0["FOURTH"] = 44] = "FOURTH";
})(SeatChoice0 || (SeatChoice0 = {}));
;
// COMPILE THIS CODE AND SEE WHAT JAVASCRIPT IS BEING GENERATED
// we get Immediately Invoked Function Expression(iife) in JS
var SeatChoice1;
(function (SeatChoice1) {
    SeatChoice1["AISLE"] = "ailse";
    SeatChoice1[SeatChoice1["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice1[SeatChoice1["WINDOW"] = 4] = "WINDOW";
    SeatChoice1[SeatChoice1["FOURTH"] = 5] = "FOURTH";
})(SeatChoice1 || (SeatChoice1 = {}));
var csSeat = SeatChoice1.AISLE;
var csSeat1 = "ailse" /* SeatChoice2.AISLE */;
var csSeat2 = 3 /* SeatChoice2.MIDDLE */;
