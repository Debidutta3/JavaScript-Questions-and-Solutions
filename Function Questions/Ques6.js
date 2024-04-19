//We are given array of marks of students. Filter out the marks that are greater than 90.

let arr2 = [87, 93, 64, 99, 86];

let marks_greaterThan_90 = arr2.filter((val) => {
    return val > 90;
});

console.log(marks_greaterThan_90);