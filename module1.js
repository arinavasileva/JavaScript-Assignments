//ex1

console.log("I'm printing to console");

//ex2

const name = prompt('Enter your name:');
document.getElementById('module1.ex1').innerHTML = 'Hello, ' + name + '!';

//ex3

var firstNumber = parseInt(prompt("Input the 1st number: "));
var secondNumber = parseInt(prompt("Input the 2nd number: "));
var thirdNumber = parseInt(prompt("Input the 3rd number: "));

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
thirdNumber = parseInt(thirdNumber);

var sum = firstNumber + secondNumber + thirdNumber;
var product = firstNumber * secondNumber * thirdNumber;
var average = (firstNumber + secondNumber + thirdNumber)/3;
document.getElementById('module1.ex3').innerHTML = "Sum of " + firstNumber +" , "+secondNumber+" , "+thirdNumber+" is " + sum;
document.getElementById('module1.ex3-1').innerHTML = "Product of " + firstNumber +" , "+secondNumber+" , "+thirdNumber+" is " + product;
document.getElementById('module1.ex3-2').innerHTML = "Average of " + firstNumber +" , "+secondNumber+" , "+thirdNumber+" is " + average;


//ex4

const studentsname = prompt('Welcome to Hogwarts School of Witchcraft! Enter your name, please:');
selection = Math.floor(Math.random()*4)+1;
let room;
switch(selection){
  case 1:
    house = "Gryffindor";
    break;
  case 2:
    house = "Slytherin";
    break;
  case 3:
    house = "Hufflepuff";
    break;
  case 4:
    house = "Ravenclaw";
    break;
}
document.getElementById('module1.ex4').innerHTML = studentsname + ', you are ' + house +'.';