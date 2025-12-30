// generates random decimal between 0 and 1
const myNumber = Math.random();

// function to get random number between two values
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

//function to get random whole number between 0 and a max value
function random(number) {
    return Math.floor(Math.random() * number);
}

// calls (/ invokes) the funciton
random(10);
// or
console.log('Random number between 0 and 10: ' + random(10));



function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

// change event listener runs whenever a new value is entered into the text input, and submitted
input.addEventListener('change', () => {
    const num = parseFloat(input.value);
    // isNaN(num) tests whether the num value is not a number
    // if it isn't, it returns true
    // if not, it returns false
    if (isNaN(num)) {
        parseFloat.textContent = 'You need to enter a number!';
    } else {
        para.textContent = `${num} squared is ${squared(num)}.  `;
        para.textContent += `${num} cubed is ${cubed(num)}.  `;
        para.textContent += `${num} factorial is ${factorial(num)}. `;
    }
});