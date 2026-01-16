// event handler -  a function that runs when an event occurs
let btn = document.querySelector('#btn');

function handleClick() {
    alert('It was clicked!');
}

btn.addEventListener('clcik', handleClick);

// the above example explained
// first the button is selected via id using the querySelector() method
// second, the function called handleClick() is defined as an event handler
// last, and event handler is registered using addEventListener() so that when the button is clicked, the funciton will execute

// a shorter way to register an event handler is to place all code in an anonymous function
btn.addEventListener('click', function() {
    alert('It was clicked!');
});

// an arrow function can also be used
btn.addEventListener('click', () => {
    alert('It was clicked!');
});


// Event Bubbling Model - an event starts at the most specific element and then flowa upward toward the least specific element (the document or even window)
/* the click event occurs in the following order
1. button
2. div with the id container
3. body
4. html
5. document
*/

// the click event first occurs on the button which is the element that was clicked. Then the click event goes up the DOM tree, firing on each node along its way until it reaches the document object


// Event Capturing Model - an event starts at the least specific element and flows downward toward the most specific element
/*
1. document
2. html
3. body
4. div with the id container
5. button
*/

// DOM Level 2 Event Flow - allows us to:
/*
- catch the event early during capturing
- react to the event late during bubbling
- stop it in either phase using methods like stopPropagation()
*/
// capturing phase - the event moves from the top of the page down to the element
// document > html > body > div > button

// target phase - the event reaches the element that was clicked
// button

// bubbling phase - the event moves back up the page toward the top
// button > div > body > html > document