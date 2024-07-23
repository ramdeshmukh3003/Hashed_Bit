// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24 .

function sumOfProducts(n1, n2) {
    // Convert numbers to strings
    let str1 = n1.toString();
    let str2 = n2.toString();
    
    // Determine the maximum length of the two strings
    let maxLength = Math.max(str1.length, str2.length);
    
    // Pad the shorter string with leading zeros
    str1 = str1.padStart(maxLength, '0');
    str2 = str2.padStart(maxLength, '0');
    
    // Initialize the sum
    let sum = 0;
    
    // Iterate over the digits from the right
    for (let i = 0; i < maxLength; i++) {
      // Get the digits as integers
      let digit1 = parseInt(str1[str1.length - 1 - i], 10);
      let digit2 = parseInt(str2[str2.length - 1 - i], 10);
      
      // Add the product of the digits to the sum
      sum += digit1 * digit2;
    }
    
    return sum;
  }
  
  // Example usage:
  console.log(sumOfProducts(6, 34));  // Output: 24
  console.log(sumOfProducts(123, 456));  // Output: 32
  console.log(sumOfProducts(10, 20));  // Output: 2
  console.log(sumOfProducts(15, 36));  // Output: 33
  