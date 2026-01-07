let vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfTripledEvens(vals));

function sumOfTripledEvens(array) {
    return array
        .filter((num) => num % 2 === 0)
        .map((num) => num * 3)
        .reduce((acc, curr) => acc + curr);

}

// converts hyphen separated words into camelCase
function camelize(str) {
    return str
    .split('-') // splits str into array. indexes are assigned to words split by '-'
    // ['background', 'color']
    .map( // evaluates each item of the new array
        (word, index) => index == 0 // function parameters are word and index. testing if index is equal to 0
            ? word // if the condition is true, the word is printed as is
            : word[0].toUpperCase() + word.slice(1) // if false, the first letter of the word is capitalized
    )
    .join(''); // joins the array items
}

camelize("background-color")

// returns a filtered version of the array
function filterRange(arr, a, b) {
    return arr.filter((num) => (num >= a && num <= b));

}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

// removes filtered elements from array
function filterRangeInPlace(arr, a, b) {
    for (i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);

let nums = [5, 2, 1, -10, 8];

function decrease(nums) {
    const maxValue = Math.max(nums);
    for (i = 0; i < nums.length; i++) {
        
    }
}