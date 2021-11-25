(function(){
    'use strict';

    let originalArray = [2,4,6,8];

    function myMap(arr, func){
        const newArr = [];
        for(let i=0; i<arr.length; i++){
            newArr[i] = func(arr[i]);
        }
        newArr.map(c => c * 2);
        return newArr;
    }

    let newArray = myMap(originalArray, x => x * 2);

    console.log(originalArray, "originalArray");
    console.log(newArray, "newArray");
}());