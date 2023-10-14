let firstNumber = prompt ("Введите первое число");
let secondNumber = prompt ("ВВедите второе число");
const operator = prompt ("Введите оператор:");

firstNumber = +firstNumber;
secondNumber = +secondNumber;

let result;

if (operator === "+") {
    result = firstNumber + secondNumber;
} else if (operator === "-") {
    result = firstNumber - secondNumber;
} else if (operator === "*") {
    result = firstNumber * secondNumber;
} else if (operator === "/") {
    result = firstNumber / secondNumber;
} else {
    alert ("Неккорекьрный оператор");
}
    
if (result !== undefined) {
    alert (`результат: ${result}`);
}

/*
const sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;

alert(
    `РЕзкльтат: 
        Сумма - ${sum},
        Разность - ${difference},
        произведение - ${product},
        дЕЛЕНИЕ - ${quotient},`   
);
*/
