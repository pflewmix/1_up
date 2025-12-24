// if...else statement - if the condition returns true, run code A, else run code B
if (0 > 1) {
    // code to run if condition is true
} else {
    // run some other code instead
}

// the following code is also legal code that does the same as above minus the else code
if (0 > 1) {
    // code to run if condition is true
}

// run some other code - this code isn't controlled by the conditional statement


//example
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}

console.log(childAllowance);

// else if - a way to chain on extra choices/outcomes to if...else
let age = 13;
if (age >= 14 && age <= 90) {
    console.log('Within the age range.');
} else if (age < 14) {
    console.log('Child');
} else {
    console.log('Extra Seasoned');
}

// any value that is not false, undefined, null, 0, NaN, or an empty string ('') returns true when tested as a conditional statement
if (shoppingDone) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}
// a variable name can be used on its own to test whether it is true, or if it even exists

// switch statement - takes a single expression/value as an input, and then looks through the sevaeral choices until it finds one that matches the value, executing the corresponding code
switch (expression) {
    case choice1:
        // run this code
        break;

    case choice2:
        // run this code instead
        break;

    // include as many cases as desired

    default:
        // actually, just run this code
        break;
}

// ternary operator - tests a condition and returns one value/expression if it is true, adn another if it is false
const greeting = isBirthday
    ? console.log('Happy birthday Mr. Lewis - we hope you have a great day!')
    : console.log('Good morning Mr. Lewis.');