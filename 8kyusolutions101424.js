//return the negative of a number and make no changes if already negative

function makeNegative(num) {
    return num > 0 ? -num : num;
  }


//find smallest value in an array by using spread operator and math.min

function findSmallestInt(arr) {
    return Math.min(...arr);
    return 0;
  }


//finding the first non consectuvie element in a given array, handling edge cases with array size

function firstNonConsecutive (arr) {
    if (arr.length < 2) return null; // Handle edge cases for [] and [x]
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i - 1] + 1) {
        return arr[i];
      }
    }
    
    return null;
  }


//takes 2 integers in string form, sums them numerically, and outputs as a string value

function sumStr(a,b) {
    // Convert empty strings to 0 and parse the inputs as integers
    const num1 = a === "" ? 0 : parseInt(a);
    const num2 = b === "" ? 0 : parseInt(b);
  
    // Sum the two numbers and convert the result back to a string
    return (num1 + num2).toString();
  }



//given non negative integer, counting up to that number while returning a string for each count

var countSheep = function (num){
    let result = "";
    
    for (let i = 1; i <= num; i++) {
      result += `${i} sheep...`;
    }
    
    return result;
  }

