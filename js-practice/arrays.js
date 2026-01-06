const a = ['A', 'B', 'C', 'D']
console.log(a); // prints the whole array
console.log(a[1]); // prints 'B'
console.log(a.length); // prints number of elements in array

a.push('E'); // adds element to end of array
console.log(a);

a.pop(); // removes last element from array
console.log(a);

// arrays can be nested within arrays
const b = [
    ['A', 'B'],
    [1, 2],
]
console.log(a[0]) // prints 'A, B'
console.log(a[0][1]) // prints 'B'

b[0] = 1;
console.log(b); // first array element is now 1

let arr = ['Apple', {name: 'John'}, true, function() {console.log('hello');}]
console.log(arr[1].name);
arr[3](); // runs the function at index 3

let fruits = ['Apple', 'Orange', 'Banana'];

// same as fruits[fruits.length-1]
console.log(fruits.at(-1)); // Banana
console.log(fruits.at(1)); // Orange

console.log(fruits.shift()); // removes apple and returns it in the console
fruits.unshift('Apple'); // adds the element to the beginning of the array
console.log(fruits);

fruits.push('Peach', 'Strawberry');
fruits.unshift('Grape', 'Pineapple',);
console.log(fruits);

// for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

console.log(String(fruits));

// created an array named 'styles
let styles = ['Jazz', 'Blues'];
// adds element 'Rock-n-Roll' to end of the array
styles.push('Rock-n-Roll');
// replaces the middle value of an array with an odd length
if (styles.length % 2 != 0) {
    let mid = Math.floor(styles.length / 2);
    styles[mid] = 'Classics';
    console.log(styles);
}
// simplified way to code the above if statement
styles[Math.floor((styles.length - 1) / 2)]
// removes the first value of the array and displays it
console.log(styles.shift());
// adds 'Rap' and 'Reggae' elements to the beginning of the array
styles.unshift('Rap', 'Reggae');
console.log(styles)

function sumInput() {
    let nums = [];
    while (true) {
        let number = prompt("Please, enter a number.", 0);

        if (number === '' || number === null || !isFinite(number)) break;

        nums.push(+number);
    }
    
    console.log(nums);

    let sum = 0
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

console.log(sumInput());