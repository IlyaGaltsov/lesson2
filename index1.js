//1//
let getName = prompt('What is your name ?');

alert(`Hello, ${getName}! How are you?`);


//2//
let firstNumber = parseInt(prompt('Enter first number'));

let secondNumber = parseInt(prompt('Enter second number'));

let answer = firstNumber + secondNumber;

alert(`${answer} : answer`);


//3//
let firstWord = prompt('Enter first word');

let secondWord = prompt('Enter second word');

let checkWords = firstWord === secondWord && firstWord === secondWord ;

alert(checkWords);


//4//
let firstAagument = parseInt(prompt('Enter first argument'));

let secondAagument = parseInt(prompt('Enter second argument'));

let thirdAagument = parseInt(prompt('Enter third argument'));

let average = (firstAagument + secondAagument + thirdAagument) / 3;

alert(average);


//5//
let number = parseInt(prompt('Enter five-digit number'));

let digit1 = Math.floor(number / 10000); 
number = number % 10000; 

let digit2 = Math.floor(number / 1000);
number = number % 1000; 

let digit3 = Math.floor(number / 100); 
number = number % 100; 

let digit4 = Math.floor(number / 10); 
let digit5 = number % 10;

alert(`${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);