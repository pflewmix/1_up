// looping thru an array
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// assigns items in the collection to the variable 'cat'
for (const cat of cats) {
    console.log(cat);
}

// toUpperCase() is a method that converts the whole string to all caps
function toUpper(string) {
    return string.toUpperCase();
}

// new variable assigned new array in all caps
// map() a method that calls a function once for each item in the array
const upperCats = cats.map(toUpper);

console.log(upperCats);

// startsWith() - returns values that start with the specified character(s)
function lCat(cat) {
    return cat.startsWith('L');
}

// filter() - tests each item in a collection, and creates a new collection containing only items that match
const filtered = cats.filter(lCat);

console.log(filtered);

// function expression of the above code
const sort = cats.filter((cat) => cat.startsWith('L'));
console.log(sort);

// looping through the cats array and return items to the console
// however, best practice is to use for...of loop with arrays
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

let myFavoriteCats = 'My favorie cats are ';
/* for...of loop that concatenates and returns string with array items
for (const cat of cats) {
    myFavoriteCats += `${cat}, `;
}
*/

for (i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        // the end of the array
        myFavoriteCats += `and ${cats[i]}.`
    } else {
        myFavoriteCats += `${cats[i]}, `
    }
}

console.log(myFavoriteCats);

/*

// break - immediately exits a loop and makes the browser move on to any code that follows it
const contacts = [
    'Chris:2232322',
    'Sarah:3453456',
    'Bill:7654322',
    'Mary:9998769',
    'Dianne:9384975',
];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    para.textContent = '';
    for (const contact of contacts) {
        // split() - splits an array item at the specified character(s)
        const splitContact = contact.split(':');
        console.log(splitContact);
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            // ends the loop once the first itteration completes
            break;
        }
    }
    if (para.textContent === '') {
        para.textContent = 'Contact not found.';
    }
});
*/

// continue - skips to the next iteration of the loop
const para2 = document.querySelector('p');
const input2 = document.querySelector('input');
const btn2 = document.querySelector('button');

btn2.addEventListener('click', () => {
    para2.textContent = 'Output: ';
    const num = input2.value;
    input2.value = '';
    input2.focus();
    for (i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) != sqRoot) {
            continue;
        }
        para2.textContent += `${i} `;
    }
});

// while loop - works similar to the for loop, except the initializer variable is set before the loop,
// and the final-expression is included inside the loop
//let i = 0; - initializer declared before condition
while (i < cats.length) {
    if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}.`;
    } else {
        myFavoriteCats += `${cats[i]}, `;
    }

    i++;
}

console.log(myFavoriteCats);

// do...while loop - the code inside the loop is always executed at least once
do {
    if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}.`;
    } else {
        myFavoriteCats += `${cats[i]}, `;
    }

    i++;
} while (i < cats.length);

console.log(myFavoriteCats);
