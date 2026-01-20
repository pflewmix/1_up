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


// MOUSE EVENTS
// mousedown - fires when you press the mouse button on the element
// mouseup - fires when you release the mouse button on the element
// click - fires when one mousedown and one mouseup detected on the element
/*
if the mouse button is pressed on an element and the mouse cursor is moved off the element
then released, only a mousedown event fires on the element.
the same applies for mouseup in the case of the opposite. the mouse button is pressed outside of the element,
but released on the element.
in both cases, the click event never fires
*/

// dblclick - fires when double-clicking over an element
/* 
rarely used. this event has four distinct events fired in the following order:
mousedown > mouseup > click > mousedown > mouseup > click > dblclick
*/

//mousemove - fires repeatedly whenever the mouse cursor is moved around an element
/*
fires many times per second as the mouse is moved around, even if it's just by one pixel.
it is good practice to add mousemove only when needed and remove it as soon as it is no longer needed:

element.onmousemove = mouseMpveEventHandler;
element.onmousemove = null;
*/

// wheel - fires when the user scrolls the mouse wheel or touchpad
/*
element.addEventListener('wheel', e => console.log(e.deltaY));
*/

// mouseover - fires when the pointer enters the element or any of its children
// mouseout - fires when the pointer leaves the element or any of its children

// mouseenter - fires when the pointer enters the element itself only
// mouseleave - fires when the pointer leaves the element itself only

// Registering mouse event handlers
/*
1. select the element by using querySelector() or getElementById()
2. register the mouse event using addEventListener()
*/

let btn2 = document.querySelector('#btn');

// it's good practice to use this method when registering a mouse event handler
btn2.addEventListener('click', (event) => {
    console.log('clicked');
});

// alternatively
btn2.onclick = (event) => {
    console.log('clicked');
};


// KEYBOARD EVENTS
// keydown - fires when you press a key on the keyboard and fires repeatedly while you're holding down the key
// keyup - fires when you release a key on the keyboard
// keypress - fires when a keyboard character (a, b, or c) is pressed, not arrow keys, home, or end keyboard
// keypress also fires repeatedly while you hold down the key on the keyboard
/*
when a character key is pressed once a keyboard, three keyboard events are fired:

keydown > keypress > keyup

both keydown and keypress events are fired before any change is made to the text box, while the keyup event fires after
the changes have been made to the text box
*/

// Handling Keyboard Events
/*
1. select the element on which the keyboard event will fire
2. use the element.addEventListener() to register an event handler
*/

let msg = document.getElementById('#message');

msg.addEventListener('keydown', (event) => {
    // handle keydown
});

msg.addEventListener('keypress', (event) => {
    // handle keypress
});

msg.addEventListener('keyup', (event) => {
    // handle keyup
});

// all three event handlers will be called if a character key is pressed

// Keyboard Event Properties
/*
key - returns the character that has been pressed (z)
code - returns the physical key code (KeyZ)

1. select the text box with the id message by using getElementById()
2. register a keydown event listener and log the key and code of the key that has been pressed
*/