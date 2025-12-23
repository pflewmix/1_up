// OR (||) - if any arguments are true, it returns true. otherwise, it returns false
console.log(true || false); // true
console.log(false || false); // false
if (1 || 0) {
    console.log('truthy!'); // truthy!
}

let hour = 9;

if (hour < 10 || hour > 18) {
    console.log('The office is closed.'); // The office is closed.
}

// given multiple OR values:
    //result = value1 || value2 || value3;
/* the OR operator:
- evaluates operands from left to right
- converts each operand to boolean. if the result is true, stops and returns the original value of that operand
- if all operands are false, the last operand is returned */
console.log(null || 0 || 1); // 1 (the frist truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

// using OR to choose and show the one that has data (or "Anonymous" if nothing is set):
let firstName = '';
let lastName = '';
let nickName = 'SuperCoder';

console.log(firstName || lastName || nickName || 'Anonymous'); // SuperCoder
// 'Anonymous' would've be returned if all variables were falsy

// short-circuit evaluation - OR processes its arguments until the first truthy value is reached, and returns the value immediately without touching the other argument
true || console.log('not printed'); // true stops the evaluation, so the message isn't returned
false || console.log('printed'); // printed

// AND (&&) - returns true if both operands are true and false otherwise
console.log(true && true); // true
console.log(true && false); // false

// example
let hr = 12;
let minute = 30;

if (hour <= 12 && minute <= 59) {
    console.log(`The time is ${hr}:${minute}`);
}

// any value is allowed as an operand of AND
if (1 && 0) {
    console.log('won\'t work, because the result is falsy');
}

/* the AND operator:
- evaluates operands from left to right
- converts each operand to a boolean. if the result is false, stops and returns the original value of that operand.
- if all operands are true, the last one is returned */

// AND returns the first falsy value while OR returns the first truthy one
// if the first operand is truthy, AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5
// if the first operand is falsy, AND returns it. the second operand is ignored
console.log(null && 5); // null
console.log(0 && 'no matter what'); // 0

console.log(1 && 2 && null && 3); // null (the first falsy value is returned)
console.log(1 && 2 && 3); //  the last truthy value is returned

/* NOT (!) - accepts a single argument and:
- converts the operand to boolean type
- returns the inverse value */
console.log(!true); // false
console.log(!0); // true

// double NOT (!!) - sometimes used for converting a value to boolean type
console.log(!!'non-empty string'); // true
console.log(!!null); // false
// can also be done using the Boolean() function
console.log(Boolean('non-empty string')); // true
console.log(Boolean(null)); // false

// NOT (!) has the highest precedence of all logical operators

// practice
let age = 30;

if (age >= 14 && age <= 90) {
    console.log('Within the age range.');
}

if (!(age >= 14 && age <= 90)) {
    console.log('Not within the age range');
}

if (age < 14 || age > 90) {
    console.log('Not within the age range.');
}