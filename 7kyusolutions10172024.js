//function that splits a string of numbers seperated by spaces into an array, find the highest max and min and returns them as a space seperated string

function highAndLow(numbers) {
    // Split the input string into an array of numbers
    let arr = numbers.split(' ').map(Number);
    
    // Find the highest and lowest numbers in the array
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    // Return them as a string with a space between
    return `${max} ${min}`;
  }




//function that uses filter method to eliminate anything but numbers

function filter_list(l) {
    // Use the filter method to keep only the numbers
    return l.filter(item => typeof item === 'number');
  }





  //function that loops over n  for a sequence of increasing denominators

  function SeriesSum(n) {
    // If n is 0, return "0.00"
    if (n === 0) return "0.00";
    
    let sum = 0;
    
    // Loop over n terms
    for (let i = 0; i < n; i++) {
      // The denominator starts at 1 and increases by 3 for each term
      sum += 1 / (1 + i * 3);
    }
    
    // Return the sum rounded to 2 decimal places
    return sum.toFixed(2);
  }





  
//function to find the next perfect square, takes sqrroot, checks if integer, returns next square if true, if not return negative 1

function findNextSquare(sq) {
    // Take the square root of the input number
    let root = Math.sqrt(sq);
    
    // Check if the square root is an integer
    if (Number.isInteger(root)) {
      // If it is, return the square of the next integer
      return Math.pow(root + 1, 2);
    } else {
      // If it's not a perfect square, return -1
      return -1;
    }
  }





  //function that splits string into array of words, finds the length of the shortest word and returns it

  function findShort(s) {
    // Split the string into an array of words
    let words = s.split(' ');
    
    // Find the length of the shortest word
    let shortest = words.reduce((minLength, word) => {
      return Math.min(minLength, word.length);
    }, Infinity);
    
    return shortest;
  }