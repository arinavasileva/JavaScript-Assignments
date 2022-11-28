//ex1

let NumbersList = [];
let number1 = prompt("Enter first number");
let number2 = prompt("Enter second number");
let number3 = prompt("Enter third number");
let number4 = prompt("Enter fourth number");
let number5 = prompt("Enter fifth number");

NumbersList.push(number5, number4, number3, number2, number1);

for (let number = 0; number < NumbersList.length; number++) {
    console.log(NumbersList[number])}

  document.getElementById('module2.ex1').innerHTML = NumbersList;

//ex2

const participants_num = parseInt(prompt('How many participants are there?'));
let participants_list = [];

for (let i = 0; i < participants_num; i++) {
    let participants_name = prompt("Enter the names of participants:");
    participants_list.push(participants_name);
}
participants_list.sort();

const el = document.getElementById('module2.ex2');
const ol = document.createElement('ol');
el.appendChild(ol);

for (let i = 0; i < participants_list.length; ++i) {
  const li = document.createElement('li');
  li.innerText = participants_list[i];
    el.appendChild(li);
    }

//ex3


let name_list = [];

for (let i = 0; i < 6; i++) {
    let dogs_names = prompt("Enter the names of all the dogs:");
    name_list.push(dogs_names);}

const il = document.getElementById('module2.ex3');
const ul = document.createElement('ul');
il.appendChild(ul);

name_list.sort();
name_list.reverse();

for (let i = 0; i < name_list.length; ++i) {
  const li = document.createElement('li');
  li.innerText = name_list[i];
    ul.appendChild(li);}


//ex4

let num_list = [];
let num = parseInt(prompt("Enter a number:"))

for (let i = 0; num > 0; i++) {
    num = parseInt(prompt("Enter a number or enter zero if you want to quit:"));
    num_list.push(num);}

num_list.sort(function (a, b) {
  return a - b;});

num_list.reverse()
console.log(num_list);

//ex5

let entered_nums = [];

while (true) {
  let num = parseInt(prompt("Enter a number:"));
  if (entered_nums.includes(num)) {
    entered_nums.sort(function (a, b) {
      return a - b;
    })
    window.alert("You have already entered that number.")
    console.log(entered_nums);
    break;
  }

  else {
    entered_nums.push(num);
  }
}
document.getElementById('module2.ex5').innerHTML = entered_nums;


