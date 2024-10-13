//function that determines time passed after midnight with practical value constraints

function past(h, m, s) {
    // Convert hours, minutes, and seconds to milliseconds
    const hoursInMs = h * 3600000;  // 1 hour = 3600 seconds = 3600000 milliseconds
    const minutesInMs = m * 60000;  // 1 minute = 60 seconds = 60000 milliseconds
    const secondsInMs = s * 1000;   // 1 second = 1000 milliseconds
    
    // Sum all the milliseconds and return the result
    return hoursInMs + minutesInMs + secondsInMs;
}



//using split join and reverse array methods to reverse the order of two strings

function nameShuffler(str) {
    // Split the input string by space to separate the first and last name
    let nameArray = str.split(' ');
    
    // Return the names in reversed order, joined by a space
    return nameArray.reverse().join(' ');
}



//pushing looped results to an array

function between(a, b) {
    // Create an empty array to hold the result
    let result = [];
    
    // Use a for loop to iterate from a to b and push each number into the result array
    for (let i = a; i <= b; i++) {
      result.push(i);
    }
    
    // Return the result array
    return result;
  }



  //returning additive inverse of given number

  function opposite(number) {
    // Return the opposite of the given number by multiplying it by -1
    return -number;
  }


  //using endsWith and slice string methods to remove characters from a string

  function remove(string) {
    // Check if the last character is an exclamation mark
    if (string.endsWith('!')) {
      // Remove the last character and return the modified string
      return string.slice(0, -1);
    }
    // If no exclamation mark at the end, return the original string
    return string;
  }

