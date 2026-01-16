// first, we get a reference to the container div that exists in the HTML
const container = document.querySelector('#container');

// a new div is created and stored in the variable content
const content = document.createElement('div');
// a class and some text are added to the content div
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// the new div is appended to container
container.appendChild(content);

// JS does not alter the HTML file, but the DOM (what the browser renders)

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = 'red';
container.appendChild(para);

const subHeader = document.createElement('h3');
subHeader.textContent = "I'm a blue h3!";
subHeader.style.color = 'blue';
container.appendChild(subHeader);

const box = document.createElement('div');
box.setAttribute('style', 'background-color: pink; border: black solid 1px;');

const header = document.createElement('h1');
header.textContent = "I'm in a div"
const para2 = document.createElement('p');
para2.textContent = 'ME TOO!'
box.appendChild(header);
box.appendChild(para2);

container.appendChild(box);



// EVENTS - actions that occur on a webpage, such as mouse-clicks or key-presses
const btn = document.querySelector('#btn');

// DOM element can only have one 'onclick' property
btn.onclick = () => alert('Hello World');

// allows for multiple event listeners if the need arises
btn.addEventListener('click', () => {
    alert('Hello World');
});

// named functions can be used to trigger events
function alertFunction() {
    alert('YAY! YOU DID IT!');
}

// using 'onclick' property
btn.onclick = alertFunction;

// using addEventListener
btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

// Attaching listeners to groups of nodes
const buttons = document.querySelectorAll('button');

// the .forEach method is used to iterate through each button
buttons.forEach((button) => {
    // a 'click' listener will be added for each one
    button.addEventListener('click', () => {
        alert(button.id);
    });
});