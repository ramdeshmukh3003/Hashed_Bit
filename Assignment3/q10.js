 /* Q10) Write a function to reverse a string.
 Input - Hello
 Output - olleH  */

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello')); // Output: olleH