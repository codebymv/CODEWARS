//find how many true values are in an array
function countSheeps(sheep) {
    return sheep.filter(sheep => sheep === true).length;
  }

  

//check if a number is even
  function testEven(n) {
    return Number.isInteger(n) && n % 2 === 0;
  }



//alternating case
String.prototype.toAlternatingCase = function() {
// Split the string into an array of characters and map each character
return this.split('')
    .map(char => 
    // If character is lowercase, convert to uppercase; if uppercase, convert to lowercase
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join(''); // Join the array back into a string
};



//removes every second element from an array
function removeEveryOther(arr) {
    // Use the filter method to keep only elements with even indexes
    return arr.filter((_, index) => index % 2 === 0);
  }



  
  //evaluates the possible results of an expression
  function expressionsMatter(a, b, c) {
    // Evaluate all possible combinations
    const results = [
      a + b + c,
      a * b * c,
      a + (b * c),
      (a + b) * c,
      a * (b + c),
      (a * b) + c
    ];
    
    // Return the maximum value from the evaluated results
    return Math.max(...results);
  }