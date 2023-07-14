'use strict';

var guessNumber = Math.floor( Math.random()*20) +1 ;
console.log(guessNumber);

//btn
document.querySelector(".check")
//msg
document.querySelector(".message")
//input
document.querySelector(".guess")


document.querySelector(".check").addEventListener('click',()=>{

    var input =  document.querySelector(".guess").value;
   
    if  (input < guessNumber){
        document.querySelector(".message").innerHTML="Number is low";
    }
    else if (input > guessNumber){
        document.querySelector(".message").innerHTML="number is high";
    }
    else{
        document.querySelector(".message").innerHTML="number is equal";
        document.querySelector("body").style.backgroundColor = "green";
    }
      
    
})
