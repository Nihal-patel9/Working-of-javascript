// Call the function before it is declared

product = multiplyNumbers(10, 20);
console.log(product);

//  Function expression
const multiplyNumbers = function (num1, num2) {
return num1 * num2;
};


/*
 function expressions are not hoisted to the top of their scope. This means that if you try to call a function expression before it is defined, you will get a ReferenceError because the function does not exist yet.
 */