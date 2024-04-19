//Create an arrow function to perform the same task

let countvowel = (str)=>{
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++;
    }
    }
    return count;
}

console.log("The vowels are: "+countvowel("hello"));