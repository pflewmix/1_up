let arr = [];
arr.push('Ball'); // adds items to the end
arr.pop(); // extracts an item from the end
arr.shift(); // extracts an item from the beginning
arr.unshift('I', 'study', 'Javascript'); // adds items to the beginning

console.log(arr);

// splice()
let replace = arr.splice(1, 1,); // removes based off index position (1st value), and the number of elements to remove from that point (2nd value)
// the above stores the spliced elements in variable 'replace'
console.log(replace);

arr.splice(1, 0, 'study', 'and', 'code'); // values can also be added without replacement by using 0 for the 2nd value
console.log(arr);

// using negative indexes
let numsArray = [1, 2, 5];
numsArray.splice(-1, 0, 3, 4); // negative indexes can also be used to determine the index being spliced

console.log(numsArray);

// slice() - returns a new array with all items between the specified start and end
let letters = ['t', 'e', 's', 't'];
console.log(letters.slice(1, 3)); // returns 'e, s'
console.log(letters.slice(-2)); // returns 's, t'

// concat() - creates a new array that includes values from other arrays and additional items
let nums = [1, 2];
console.log(nums.concat([3, 4])); // 1,2,3,4
console.log(nums.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
console.log(nums.concat([3, 4], 5, 6)); 1,2,3,4,5,6

let arrayLike = {
    0: 'something',
    1: 'else',
    [Symbol.isConcatSpreadable]: true, // without this special property, objects that aren't arrays can't extract their elements 
    length: 2
};

console.log(nums.concat(arrayLike)); // 1,2,something, else

// forEach() - allows to run a function for every element of an array
['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

function addOne(num) {
    return num + 1;
}
// map() - returns a new array and does not change the original
const mappedArr = nums.map((num) => num + 1);
console.log(mappedArr);

// filter() - similar to map, except it returns a new array with items included only if the callback function returns true for it
const oddNums = nums.filter((num) => num % 2 !== 0);
console.log(oddNums);

// reduce() - reduces the elements of an array to a single value
const prices = [25, 50, 5, 70, 10];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`)

function sum(previous, next) {
    return previous + next;
}