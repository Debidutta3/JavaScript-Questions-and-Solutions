/*
Question:
Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

Description:
arr.map:
It creates a new array and stores the result of calling the callback function on each element of the array.
arr.map(val, idx, arr);
*/

let arr1 = [1, 5, 4, 10, 6, 8, 2, 3];

let numGreater_than_5 = arr1.map((val) => {
    if(val >= 5){
        return val;
    }
    else{
        return null;
    }
});

console.log(numGreater_than_5);