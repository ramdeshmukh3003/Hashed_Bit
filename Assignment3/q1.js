/* Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter. */

const states = ['Odisha', 'Goa', 'Assam', 'Uttar Pradesh', 'Madhya Pradesh', 'Andhra Pradesh','Karnataka'];

const statesWithoutVowels = states.filter(state => !(/[aeiouAEIOU]/.test(state[0])));

console.log(statesWithoutVowels);