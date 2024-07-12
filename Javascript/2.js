//Write a Java Script program to demonstrate Arithmetic Operations using Switch case
let num1=parseFloat(prompt('Enter first number'));
let num2=parseFloat(prompt('Enter second number'));
let operator= prompt('Enter operator (+,-,*,/,%)');
let result;

switch(operator){
case '+':
    result=num1+num2;
    console.log("result");
break;
case '-':
    result=num1-num2;
    console.log("result");
break;
case '*':
    result=num1*num2;
    console.log("result");
break;
case '/':
    result=num1/num2;
    console.log("result");
break;
case '%':
    result=num1%num2;
    console.log("result");
break;
default:
console.log("invalid");
}