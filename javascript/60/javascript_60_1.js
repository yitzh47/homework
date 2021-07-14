'use strict';
/*globals name, email*/

console.log(name, email);

var result = window.prompt("Please enter your age.", "21");
window.alert("Your age is " + result + ".");
//result = window.confirm(result);
console.log(result);