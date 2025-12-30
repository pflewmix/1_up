// function for printing favorite animals
// BONUS: proper syntax for plurals and vowels
const vowel = ['A', 'E', 'I', 'O', 'U'];

function favoriteAnimal(animal) {
    if (animal.slice(-1) === 's') {
        return `${animal} are my favorite animals!`
    } else {
       return `${animal} is my favorite animal!`
    }
}

function nameIt(animal, name) {
    // need to figure out for loop for this to simplify code
    let firstLetter = animal.charAt(0).toUpperCase();
    if (firstLetter === vowel[0] || firstLetter === vowel[1] || firstLetter === vowel[2] || firstLetter === vowel[3] || firstLetter === vowel[4]) {
        return `I'd like an ${animal} named ${name}.`
    } else {
        return `I'd like a ${animal} named ${name}.`
    }    
}

const message = favoriteAnimal('Elephant')
const like = nameIt('Elephant', 'Penelope')
console.log(message);
console.log(like);