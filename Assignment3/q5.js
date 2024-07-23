/* Q5) Write a function to replace wrong word with correct word in any sentance.
 Like this - correctfn(string, wrong, correct)
 Use string.replace in function. */

function correctFn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

console.log(correctFn('I love to lern JavaScript', 'lern', 'learn'));