// adds 7 to every entry
function add7(num) {
    return num + 7;
};
console.log(add7(10));

// returns the product of two numbers
function multiply(x, y) {
    let product = x * y;
    return product;
};
console.log(multiply(3,2));

// returns a value with only the first letter capitalized
function capitalize (string) {
    string = string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
    return string;
};
console.log(capitalize('aBcD'));

function lastLetter(str) {
    str = str.slice(-1);
    return str;
}
console.log(lastLetter('abcd'));