// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
let vowels = string.match(/[aeiou]/gi);
let consonants = string.match(/[bcdfghjklmnpqrstvwxyz]/gi);

console.log('Vowels:', vowels ? vowels.length : 0);
console.log('Consonants:', consonants ? consonants.length : 0);
