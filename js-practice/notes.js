/*
let x = 1;

x = -x; // the operator is 'unary' since it has a single operand 'x'
console.log(x); 
*/

/*
let x = 1, y = 3;
console.log(y - x);  // the operator is binary since it has two operands 'x and y'
*/

/* math opeartaors supported in js
+ : addition (the only operator that also works with strings)
- : subtraction
* : multiplication
/ : division
% : remainder
** : exponentiation */

// remainder examples
console.log(5 % 2); // outputs the remainder of 5 divided by 2
console.log(8 % 3); // outputs the remainder of 8 divided by 3
console.log(8 % 4); // outputs the remainder of 8 divided by 4

// exponentiation examples
console.log(2 ** 2); // raises 2 to the power of 2
console.log(2 ** 3); // raises 2 to the power of 3
console.log(2 ** 4); // raises 2 to the power of 4
console.log(4 ** (1/2)); // outputs the square root of 4
console.log(8 ** (1/3)); // outputs the cubic root of 8

// concatenation - the merging of two strings using the '+' operator
let s = "my" + "string";
console.log(s);

console.log('1' + 2); // if any of the operands is a string, then the other one is converted to a string too
console.log(2 + '1'); // output is "21"
console.log(2 + 2 + '1') // because the string is at the end of the expression, the two numbers are first added then the string is added resulting in an output of 41
console.log('1' + 2 + 2); // results in 122 since the first operand is a string

// all other operators (not +) converts strings to numbers

let x = 1;
alert(+x); // no effect on numbers

let y = -2;
alert(+y); // no effect since the value is a number

console.log(+true); // converts non-number to number
console.log(+""); // outputs 0

let apples = '2';
let oranges = '3';

console.log(apples + oranges); // concatenates strings resulting in '23'
console.log(+apples + +oranges); // converts strings to numbers resulting in 5

// short modify-in-place notation
let n = 2;
n += 5; // same as n = n + 5
n *= 2; // same as n = n * 2
n /= 7; // same as n = n / 7
n -= 1; // same as n = n - 1
console.log(n); // outputs 1

// increment '++' increases a variable by 1
let counter = 2;
counter++;
alert(counter); // outputs 3

// decrement '--' decreases a variable by 1
counter--;
alert(counter); // outputs 2

counter++ // postfix form
++counter // prefix form

// the post and prefix forna do the same thing; however, there are cases in which the form used matters
let c = 0;
alert(++c); // the prefix form must be used if the desired result is immediately using the result of the operator

c = 0;
alert(c++); // the postfix results in the previous (assigned) being used

// inc/dec operators can be used in arithmetic expressions as well
let count = 1;
console.log(2 * ++count); // outputs 4 since the preix form is used
count = 1;
console.log(2 * count++); //outputs 2 since the postfix form is used

/* 
bitwise operators
& : AND
| : OR
^ : XOR
~ : NOT
<< : LEFT SHIFT
>> : RIGHT SHIFT
>>> : ZERO-FILL RIGHT SHIFT
*/