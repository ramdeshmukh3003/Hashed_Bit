// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(num, operator, nuum) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;

    //         if(num2!==0){
    //             return num1 / num2;
    //         }
    //         else{
    //             return 'Can not divide by Zero!'
    //         }
    // default:
    //     return 'Invalid Operator'
    }
}