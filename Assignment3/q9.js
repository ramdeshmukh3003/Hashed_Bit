// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    return paragraph.split(/\s+/).length;
}

console.log(countWords('Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quas laboriosam omnis officia?')); // Output: 13
