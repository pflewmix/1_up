// number
let n = 123;
n = 12.345;

// infinity
console.log(1 / 0); // Infinity
console.log(Infinity); // Infinity

// NaN - a computational error
console.log("not a number" / 2); // NaN
// sticky meaning any further mathematical operation on NaN returns NaN
console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN
// one exception
console.log(NaN ** 0); // 1

// string
let str = "Hello"; // double quotes
let str2 = 'Single quotes are ok too'; // single quotes
let phrase = `can embed another ${str}`; // backticks
// backticks in-depth: allow us to embed variables and expressions in a string
let name = 'Klew';
// embed a variable
console.log(`Hello, ${name}!`); // Hello, Klew!
// embed and expression
console.log(`the result is ${"4" + 5}`); // the result is 45
// joining two variables via template literal
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined); // 'Hello, how are you?'
// including expressions in strings
const song = 'Fight The Power';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
    (score / highestScore) * 100
}%`;
console.log(output);
// template literals respect line breaks in the code
const newline = `One day you finally knew
what you had to do, and began`;
console.log(newline); // outputs on mutiple lines (as written)
// multiple lines using a normal string
const newline2 = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline2); // using a line break character (\n) produces the same output as the template literal
// including quotes in strings
const goodQuotes1 = 'She said "I think so!"'; // use a different character than the enclosing the string
const goodQuotes2 = `She said "I'm not going in there!"`;
const bigmouth = 'I\'ve got no right to take my place...'; // use a \ to escape the character so it can be recognized as text

// boolean: true means 'yes, correct' and false means 'no, incorrect'
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
// boolean values as a result of comparisons
let isGreater = 4 > 1;
console.log(isGreater); // true

// null
let age = null; //
console.log(age);  // null

// undefined
let age2; // variable has no value
console.log(age2) // undefined
// 'undefined' can be assigned to a variable
let age3 = 100;
age3 = undefined;
console.log(age3);

// html elements js
const button = document.querySelector('button');

function greet() {
    const nombre = prompt('What is your name?');
    const greeting = document.querySelector('#greeting');
    greeting.textContent = `Hello ${nombre}, nice to see you!`;
}

button.addEventListener('click', greet);