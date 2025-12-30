console.log(24 + 97);

console.log(45 + 30 + 31 + 95 + 10 + 19);

console.log((4 + 6 + 9) / 77);

let a = 10;

a = 15;

console.log(a);

let b = 7 * a;

console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;

console.log(percentage);


// scope
// x is declared in the global scope, so it can be called anywhere in the code
// y and z are declared in their resepective function scopes and can only be called within those scopes
const x = 1;

function a2() {
    const y = 2;
    output2(y);
}

function b2() {
    const z = 3;
    output2(z);
}

function output2(value) {
    const para2 = document.createElement('p');
    document.body.appendChild(para2);
    para2.textContent = `Value: ${value}`;
}
output2(x);
a2();
b2();