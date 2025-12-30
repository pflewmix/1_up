// function declaration
/* function name(parameters) {
    // body
} */

function greet(name) {
  return `Hello, ${name}!`;
}

function showMessage() {
    alert( 'Hello, World!' );
}

showMessage(); // function call
alert(greet('Daddy')); // function call with argument

// local variable -  a variable declared inside a funciton that's only visible within that function
function showMessage() {
    let message = 'Hello, I\'m JavaScript!'; // local variable

    console.log(message);
}

showMessage();
// Error: message is not defined outaside of the function
// console.log(message);

//outer variable - a function can access outer variables
let userName = 'Klew';

function showMessage2() {
    let message = 'Hello, ' + userName;
    console.log(message);
}

showMessage2();

// the funciton can also modify the outer variable
function showMessage3() {
  userName = 'The Slide Savant';

  let message = `Hello, ${userName}`;
  console.log(message);
}

console.log(userName); // Klew

showMessage3();

console.log(userName); // The Slide Savant, modified after the fucntion call

const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');
const button = document.querySelector('#button');
const hello = document.querySelector('#greeting');

// anonymous functions - functions without a name
textBox.addEventListener('keydown', function(event) {
  output.textContent = `You pressed "${event.key}".`;
});
// parentheses around the parameter are optional when there's only one parameter
button.addEventListener('click', hello => alert('hello there :)'));
textBox.addEventListener('keydown', event => {
  console.log(`You pressed '${event}'.`);
});

// arrow function
/* braces and return keyword can be omitted if the function 
contains one line that's a return statement*/
const originals = [1, 2, 3];
let doubled = originals.map(item => item * 2);
console.log(doubled);

// regular anonymous callback
doubled = originals.map(function (item) {
  return item * 4;
});
console.log(doubled);