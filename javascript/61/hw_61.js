'use strict';

let arrL =  ['a', 'b', 'c'];
let arrU =  ['A', 'B', 'C'];
let arrM =  ['a', 'B', 'c'];

function our_every(theArray, callback){
    for (let i = 0; i < theArray.length; i++){
        if(!callback(theArray[i])){
            return false;
        }
        
    }
    return true;  
}

function isUpperCase(j){
    if (j === j.toUpperCase()) {
        return true;
    }
    return false;
}

console.log('check_all(arrU, j => j === j.toUpperCase())', our_every(arrU, j => j === j.toUpperCase()));
console.log('check_all(arrL, j => j === j.toUpperCase())', our_every(arrL, j => j === j.toUpperCase()));
console.log('arrU.every(everyUpperCase)', arrU.every(isUpperCase));
console.log('arrL.every(everyUpperCase)', arrL.every(isUpperCase));

function our_some(theArray, callback){
    for (let i = 0; i < theArray.length; i++){
        if(callback(theArray[i])){
            return true;
        }
    }
    return false;  
}

console.log('check_all(arrU, j => j === j.toUpperCase())', our_some(arrU, j => j === j.toUpperCase()));
console.log('check_all(arrL, j => j === j.toUpperCase())', our_some(arrL, j => j === j.toUpperCase()));
console.log('check_all(arrM, j => j === j.toUpperCase())', our_some(arrM, j => j === j.toUpperCase()));
console.log('arrU.some(everyUpperCase)', arrU.some(isUpperCase));
console.log('arrL.some(everyUpperCase)', arrL.some(isUpperCase));
console.log('arrM.some(everyUpperCase)', arrM.some(isUpperCase));

function onlyIf(array, test, action){
    for (let i = 0; i < array.length; i++) {
        if(test(array[i])){
            action(array[i]);
        }
    }
}

onlyIf(arrU, isUpperCase, console.log);
onlyIf(arrL, isUpperCase, console.log);
onlyIf(arrM, isUpperCase, console.log);

function only_If(array, test, action){
    let newArr = array.filter(test);
    newArr.forEach(element => action(element));
}

only_If(arrU, isUpperCase, console.log);
only_If(arrL, isUpperCase, console.log);
only_If(arrM, isUpperCase, console.log);


function multiply(a, b) {
    return a * b;
}

function getMultiplier() {
    return function(a, b) {
        return a * b;
    };
}

console.log(getMultiplier()(3, 3));

function getMultiplier1(a) {
    return function(b) {
        return a * b;
    };
}

let multiplyByFive = getMultiplier1(5);
console.log(multiplyByFive(2)); // prints 10

let multiplyBySix = getMultiplier1(6);
console.log(multiplyBySix(2)); // prints 12