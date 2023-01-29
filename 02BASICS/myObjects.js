"use strict";
exports.__esModule = true;
var User = {
    name: "Charandeep Singh",
    email: "charandeep@lco.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Charandeep", isPaid: false });
// createUser({name: "Charandeep", isPaid: false, email: "charandeep@gmail.com"}); // this is not allowed as we don't have email as accepting parameters in function arguments
var newUser = { name: "Charandeep", isPaid: false, email: "charandeep@gmail.com" };
createUser(newUser); // weird behaviour(this shouldn't have happend because we don't accept email in the fun defination arguments)
function createCourse() {
    return { name: "reactjs", price: 399 };
}
createCourse();
function createUser0(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.isActive);
    return { name: user.name, email: user.email, isActive: user.isActive };
}
createUser0({ name: "", email: "", isActive: true });
var myUser1 = {
    _id: "2345",
    name: "charan",
    email: "charan@gmail.com",
    isActive: false
};
myUser1.email = "charandeep@gmail.com";
// myUser1._id = "765463"; // _id is readonly so we can't change its value
console.log(myUser1);
