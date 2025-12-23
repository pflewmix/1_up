// mehtod - a bit of functionality built into the language or specific data types
// written - variable.method
/* string methods return a new string. they don't modify the original string
strings are immutable: meaning they can't be changed, only replaced */

// string length
let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let length = text.length;
console.log(length); // 26

// extracting string characters
// charAt() - returns the character at a specified index
let text2 = 'HELLO WORLD';
let char = text2.charAt(0);
console.log(char); // 'H'
// charCodeAt() - returns the code of a character at a specified index
// returns a UTF-16 code (an integer between 0 and 65535)
let text3 = 'HELLO WORLD';
let char2 = text3.charCodeAt(0);
console.log(char2);
// codePointAt() - gets code point value at the specified position in a string
let text4 = 'HELLO WORLD';
let code = text.codePointAt(0);
console.log(code);
// at() - returns the character at a specified index in a string
const name = 'KLEW KAINE';
let letter = name.at(3);
console.log(letter); // returns W

// concat() - joins two or more strings
let text1 = 'Hello';
let text5 = 'World';
let text6 = text1.concat(', ', text5);
console.log(text6); // "Hello, World"
// can be used instead of the plus operator
sentence = 'Hello'.concat(' ', 'World!');
console.log(sentence); // Hello World!

// extracting string parts
// slice(start, end) - extracts part of a string and returns it in a new string (not including the end position)
let fruit = 'Apple, Banana, Kiwi';
let part = fruit.slice(7, 13);
console.log(part); // Banana
// omitting the second parameter, the method will slice out the rest of the string:
let part2 = fruit.slice(7);
console.log(part2);
// a negative parameter prompts the the position to be counted from the end of the string
let part3 = fruit.slice(-12);
console.log(part3);
// substring() - similar to slice. start and end values less than 0 are treated as 0
// omitting the second parameter will slice out the rest of the string
let part4 = fruit.substring(7, 13); // Banana
// substr() - similar to slice. the second parameter determines the length of the extracted part
// removed in the latest JS standard
let part5 = fruit.substr(7, 6);
console.log(part5);
// substr() will slice out the rest of the string if the second parameter is omitted
let part6 = fruit.substr(7);

// converting to upper and lower case
// toUpperCase() - converts a string to upper case
// toLowerCase() - converts a string to lower case

// isWellFormed()
/* returns true if a string is well formed
returns false otherwise
a string is not well formed if it contains 'lone surrogates' */
// lone surrogate - a unicode surrogate point that is not part of a vaild surrogate pair used to represent characters in UTF-16 encoding

// toWellFormed() - returns a new string where all 'lone surrogates' are replaced with the unicode replacement character (U+FFFD)
let note = 'Hello World \uD800';
let result = note.toWellFormed();
console.log(result);

// trim() - removes whitespace from both sides of a string
let snip1 = "    Hello World!       ";
let trim1 = snip1.trim();
console.log(trim1);

// trimStart() - removes whitespace only from the start of a string
let trim2 = snip1.trimStart();
console.log(trim2);

// trimEnd() - removes whitespace only from the end of a string
let trim3 = snip1.trimEnd();
console.log(trim3);

// padStart() - pads a string from the start. pads a string with another string (multiple times) until it reaches a given length
// padStart(new string length, value)
let str = '5';
let padded = str.padStart(4,"0");
console.log(padded);
// a string method, so numbers must be converted to a string in order to use
let num = 5
let str2 = num.toString();
let padded2 = str2.padStart(4,'0');
console.log(padded2);

// padEnd() - pads a string from the end
let padded3 = str.padEnd(4, '0');
console.log(padded3);

// repeat() - returns a string with a number of copies of a string
// repeat(count)
let text7 = 'Hello World! ';
let result2 = text7.repeat(2); // returns a new string containing the copies
console.log(result2);

// replace() - replaces a specified value with another value in a string. only the first match. it's also case sensitive
let text8 = 'Please visit Microsoft!';
let newText = text8.replace('Microsoft', 'Lane 1828');
console.log(newText);
// replace case insensitive
let newText2 = text8.replace(/MICROSOFT/i, 'Lane 1828');
console.log(newText2);
// replace all matches
let newText3 = text8.replace(/microsoft/g, 'Lane 1828');
console.log(newText3);

// replaceAll() - allows for a specific regular expression to be replaced, in addition to a string
// string replacement
text1 = text1.replaceAll('Cats','Dogs'); // replaces all instances of Cats with Dogs
// regular expression replacement
text2 = text2.replaceAll(/Cats/g,'Dogs');

// split() - converts a string to an array
text.split(',') // split on commas
text.split(' ') // split on spaces
text.split('|') // split on pipe
text.split('') // returns and array of single characters