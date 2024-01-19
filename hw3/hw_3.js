"use strict";

let user = {
    name:prompt("What's your name?"),
    age:prompt("How old are you?"),
    male:prompt("male or female?")
}
console.log(user.name);
console.log(user.age);
console.log(user.male);

// Работа с операторами.

let number = prompt("Please enter a number");
if (typeof +number === 'number' && !isNaN(number)) {
  alert(`It's ${number}`);
} else {
  alert(`It's not a number` );
}

// Работа с условиями.

let a = prompt("a?", "");
console.log(a);
a = +a;
console.log(a);

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
    alert("2,3");
    break;
  case 3:
    alert("2,3");
    break;
   default:
    alert('undefined')
}

// Работа с циклами(loops).
// 1)
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

// 2)
let i = 0;
while(i<3){
    alert( `number ${i}!` );
    i++;
}