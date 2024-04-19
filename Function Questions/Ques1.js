/* Create a function that takes a string as an argument and returns the number of vowels in the string.
*/

function findVowel(str){
    let vowelCount = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        vowelCount++;
      }
    }
    return vowelCount;
  }
  
  console.log("The vowels are: " +  findVowel("apple"));