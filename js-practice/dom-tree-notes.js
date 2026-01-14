/* The DOM (Document Object Model) is a tree-like representation of the contents of a webpage
a tree of 'nodes' with different relationships depending on how they're arranged in the HTML document */

// selectors - used to target the nodes that are being worked with

// selects the #container div
const container = document.querySelector('#container');

//selects the first child of #container (.display)
let display = container.firstElementChild;
console.log(display);


// selects the .controls div
const controls = document.querySelector('.controls');

// selects the prior sibling (.display)
display = controls.previousElementSibling;
console.log(display);


// DOM Methods

// element.querySelector(selector) - returns a reference to the first match of selector
/* element.querySelectorAll(selectors) - returns a 'NodeList' containing references to all of the matches of the selectors
    - the return value is not an array, but a NodeList. NodeLists can be converted to arrays with
        Array.from(). */

// document.createElement(tagName, [options]) - creates a new element of tag type tagName
// [options] in this case means you can add some optional parameters to the function
const div = document.createElement('div');

// the above function doesn't put the new element in the DOM. It creates it in memory
// this is so the element can be manipulated befor placing it on the page


// Append Elements - the following methods can place the element into the DOM
// parentNode.appendChild(childNode) - appends childNOde as the last child of parentNode
// parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode


// Remove Elements
// parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child


// Altering Elements - a reference to an element can be used to alter the element's own properties
// allows adding, removing, or altering attributes, changing classes, adding inline style info, and more


// Adding inline style
// adds the indicated style rule to the element in the div
div.style.color = 'blue';

// adds several style rules
div.style.cssText = 'color: blue; background: white;';
div.setAttribute('style', 'color: blue; background: white;');


// Accessing a kebab-cased CSS property (background-color) with JS
// dot notation with camelCase
div.style.backgroundColor;

// bracket notation with kebab-case (property name must be a string)
div.style['background-color'];

// bracket notation with camelCase
div.style['backgroundColor'];


// Editing Attributes
// if id exists, update it to 'theDiv', else create and id with value 'theDiv'
div.setAttribute('id', 'theDiv');

// returns value of the specified attribute, in this case 'theDiv'
div.getAttribute('id');

// removes specified attribute
div.removeAttribute('id');


// Working with classes
// it is often standard to toggle a CSS style rather than adding and removing inline CSS
// adds class 'new' to your new div
div.classList.add('new');

// removes 'new' class from div
div.classList.remove('new');

// if div doesn't have class 'active' then add it, or if it does, then remove it
div.classList.toggle('active');

// Adding text content
// creates a text node containing 'Hello World!' and inserts it in div
div.textContent = 'Hello WOrld!';

// Adding HTML content
// renders the HTML inside div
div.innerHTML = '<span>Hello World!</span>';