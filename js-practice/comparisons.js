// boolean - the result of comparison operators
// true means yes, correct, or "the truth" (1)
// false means no, wrong, or "not the truth" (0)
console.log(2 > 1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

// comparison results can be assigned to a variable
let result = 5 > 4; // result is assigned the result of the comparison
console.log(result); // true

// string comparison - checks whether a string is greater than another (comapred letter by letter)
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glow'); // true
console.log('Bee' > 'Be'); // true

// when comparing values of different types, js converts the values to numbers
console.log('2' > 1); // true
console.log('01' == 1); // true
console.log(true == 1); // true, boolean value: true equates to 1
console.log(false == 0); // false, boolean value: false equates to 0

// strict equality operator - checks the equality without type conversion
console.log(0 === false); // false, because the types are different

// strict non-equality operator
console.log(0 !== false); // true

// comparing null and undefined
console.log(null === undefined); // false, they are different types
console.log(null == undefined); // true
// null and undefined are converted to numbers for maths and other comparisons
// null = 0; undefined = NaN