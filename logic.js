function calculate(n1, n2, operator) {
    let result;

    if (operator === "+") {
        result = n1 + n2;
    } else if (operator === "-") {
        result = n1 - n2;
    } else if (operator === "*") {
        result = n1 * n2;
    } else if (operator === "/") {
        result = n2 !== 0 ? num1 / num2 : "Error! Division by zero.";
    } else if (operator === "%") {
        result = n1 % n2;
    } else {
        result = "Invalid operator!";
    }

    return result;
}

let n1 = Number(prompt("Enter first number:"));
let n2 = Number(prompt("Enter second number:"));
const op = prompt("Enter operator (+, -, *, /, %):");

alert("Result: " + calculate(n1, n2, op));

