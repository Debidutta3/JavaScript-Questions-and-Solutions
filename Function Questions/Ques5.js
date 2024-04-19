//Filter the even numbers in an array

let NewArr = [11,0,5,8,3,4,1,7,9];

let evenArr = NewArr.filter((val) => {
    return val%2 == 0;
});

console.log(evenArr);