/*  Q3) let string = 'INDIA'
 output = 'INDONESIA'
 Use array.splice  */

let string = 'INDIA';
string = string.split('');
string.splice(3, 0,'O', 'N', 'E', 'S');
string = string.join('');

console.log(string);