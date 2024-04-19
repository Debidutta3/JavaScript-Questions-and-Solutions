/*Question 1:
For a given array with marks of students -> 10, 30, 20, 40, 50. Find the average marks of the entire class.
*/

let marks = [10, 20, 30, 40, 50];
let sum = 0;

for(let i = 0; i < marks.length; i++){
    sum = sum + marks[i];
}
let average = sum/marks.length;
console.log("The average marks is: "+average);