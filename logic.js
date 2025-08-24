//function 
function calculate(n1, n2, operator) {
    let result;

    if (operator === "+") { //=== > strictly equality operator
        result = n1 + n2;
    } else if (operator === "-") {
        result = n1 - n2;
    } else if (operator === "*") {
        result = n1 * n2;
    } else if (operator === "/") {
        result = n2 !== 0 ? n1 / n2 : "Error! Division by zero.";
    } else if (operator === "%") {
        result = n1 % n2;
    } else {
        result = "Invalid operator!";
    }

    return result;
}

let n1 = Number(prompt("Enter first number:")); /* let - b'coz values will change, prompt() - returns a string, Number() - converts string to a number*/ 
let n2 = Number(prompt("Enter second number:"));
const op = prompt("Enter operator (+, -, *, /, %):");

alert("Result: " + calculate(n1, n2, op));

/*Concepts to learn: 
1.Functions make code reusable
2.Ternary Operator : short way of writing an if/else statement.
It’s called “ternary” because it works with three operands:
1.The condition.
2.The value if the condition is true.
3.The value if the condition is false.
*/

