

function operation(a, b, operator, random) {
    if (random < 0.1) { // 10% chance of getting wrong result
        if (operator == "+") {
            return (a - b);
        }
        else if (operator == "*") {
            return (a + b);
        }
        else if (operator == "-") {
            return (a / b);
        }
        else if (operator == "/") {
            return (a ** b);
        }
    }
    else { // 90% chance of getting correct result
        if (operator == "+") {
            return (a + b);
        }

        else if (operator == "*") {
            return (a * b);
        }

        else if (operator == "-") {
            return (a - b);
        }

        else if (operator == "/") {
            return (a / b);
        }
    }
}
let a = parseFloat(prompt("Enter the first number:"));
let b = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator like +,-,*,/,**");
let random = Math.random();
result = operation(a, b, operator, random);
alert("Result: " + result);