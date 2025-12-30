// ReferenceError - thrown when one refers to a variable that isn't declared/initialized in the current scope
const a = 'Hello';
const b = 'World';
console.log(c); // results in ReferenceError being thrown since 'c' isn't declared

// SyntaxError - occurs when the code being executed is not written correctly
function helloWorld() {
    console.log 'Hello World!'
} // results in error because the parentheses are missing after console.log

//TypeError - thrown when:
// an operand or argument passed to a funciton is incompatible with the type expected by that operator or function
// when attempting to modify a value that cannot be changed
// when attempting to use a value in an inappropriate way
const str1 = 'Hello';
const str2 = 'World!';
const message = str1.push(str2); // results in error because .push is an array method, not string
const message2 = str1.concat(str2); // results in concatenated strings
