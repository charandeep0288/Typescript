function addTwo(num) {
    // num.toUpperCase(); // It would not be allowed if we have defined a datatype while declaring variable in the arguments.
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
// addTwo("5"); // We cannot send string value to the function if we have defined a datatype that we are going to accept in that function.
// getUpper(4); // datatype is string not number, so please pass string instead of number
getUpper("4");
// signUpUser(1, 2, 3); // if type is "any", user can send anything from function  call and that is not good.(we must defined datatypes of the variables in function arguments for good practice).
signUpUser("Charandeep", "example123@gmail.com", false);
loginUser("c", "c@gmail.com");
// export {} 
