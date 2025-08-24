function calculate(num1, num2, operator) {
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num2 !== 0 ? num1 / num2 : "Error! Division by zero.";
    } else if (operator === "%") {
        result = num1 % num2;
    } else {
        result = "Invalid operator!";
    }

    return result;
}

let n1 = Number(prompt("Enter first number:"));
let n2 = Number(prompt("Enter second number:"));
const op = prompt("Enter operator (+, -, *, /, %):");

alert("Result: " + calculate(n1, n2, op));
