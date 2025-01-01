   // Js Code //

//  document.getElementById("btn1").addEventListener("click",function(){
//     alert("Js Course");
//  });

//  document.querySelector(".btn2").addEventListener("click",function(){
//     alert("Welcome to js course");
//  });

// <---------***JAVASCRIPT Interview Questions For Practice***----------> //

// <--------------Convert String to Array------------------->

const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }

    //   Sort Method is used to sort the array in ascending order
    //   capital letters comes first because capital letters Unicode value is less(small) than small letters.
    
    words = str.split(" ");
    // a-b = acending and b-a = decending //
    words = words.sort((a, b) => b.length - a.length);
    // console.log(words);
    return words[0];
    // return words.at(-1);
    
};

console.log(
    findLongestWord("Watch Kb Technical awesomekbtechnical javascript course on Youtube")
);


// # JS hashtag Generator //

const generateHash = (str) => {
    if(str.length > 280 || str.trim().length === 0) {
        return false;
    }
      
    str = str.split(" ");
    str = str.map((curElem) => 
    // curElem.replace(curElem[0], curElem[0].toUpperCase())

    // -----------OR----------//


    // slice used to name = get to ame. //

    curElem.charAt(0).toUpperCase() + curElem.slice(1)
);
// Array to String ma convert karva join no use karvo //

str = `#${str = str.join("")}`;
console.log(str);
return str;

    
};
console.log(generateHash("my name is kb technical"));




