const operator = prompt('choose operator ( +, -, *, / ): ');

var num1 = prompt("Enter a number");
var num2 = prompt("Enter another number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

switch(operator) {
    case '+':
         result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;

    case '-':
         result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;

    case '*':
         result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        break;

    case '/':
         result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}