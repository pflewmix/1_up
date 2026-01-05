for (i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let m = 0;
while (m < 3) {
    alert(`number ${m}!`);
    m++;
}

// checks that a number matches the conditions presented in a prompt
let num;

do {
    num = prompt('Enter a number greater than 100', 0);
} while (num <= 100 && num);

let n = prompt("Enter a number to test if it's prime:");

// nextPrime: is an identifier
// used with continue, the label causes the code execution to jump to the next iteration of the labeled loop
nextPrime:
for (let j = 2; j <= n; j++) {
    for (let k = 2; k < j; k++) {
        if (j % k == 0) continue nextPrime;
    }
    console.log(j);
}

