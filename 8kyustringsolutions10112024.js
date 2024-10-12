//converts number to string

function numberToString(num) {
    return num.toString();
}


//string output depending on value of a number n

function hoopCount (n) {
    //your code goes here    
     if(n >= 10){
     return "Great, now move on to tricks"
     }
     else{
     return "Keep at it until you get it"
     }
 }



 //adding total of an array, dividing by length and comparing averages

 function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    const classTotal = classPoints.reduce((sum, score) => sum + score, 0);
    const classAverage = classTotal / classPoints.length;
    
    return yourPoints > classAverage;
  }



//using modulus for finding the output of a rotating cycle of strings

function howMuchILoveYou(nbPetals) {
    const phrases = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all"
    ];
    
    return phrases[(nbPetals - 1) % 6];
}



//use rates and number operations to determine a string output

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const maxDistance = mpg * fuelLeft;
    
    return maxDistance >= distanceToPump;
  };


  