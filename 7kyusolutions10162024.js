//functiont that returns how many vowels are in a string

// Define the vowels we are looking for
  const vowels = 'aeiou';
  
  // Use the reduce method to iterate through the string and count the vowels
  return [...str].reduce((count, char) => {
    return vowels.includes(char) ? count + 1 : count;
  }, 0);





  //function that checks for first letter of a given a string and outputs conditionally

  function areYouPlayingBanjo(name) {
    // Check if the name starts with 'R' or 'r'
    if (name[0].toLowerCase() === 'r') {
      return name + " plays banjo";
    } else {
      return name + " does not play banjo";
    }
  }



  //using map array method to iterate over given data and conditionally check status of the new data

  function openOrSenior(data) {
    return data.map(([age, handicap]) => {
      // Check if the person is at least 55 years old and has a handicap greater than 7
      if (age >= 55 && handicap > 7) {
        return "Senior";
      } else {
        return "Open";
      }
    });
  }




//sorts array in ascending order and then returns sum of the two smallest values

function sumTwoSmallestNumbers(numbers) {  
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);
    
    // Return the sum of the first two elements (the two smallest numbers)
    return numbers[0] + numbers[1];
  }




  //find the growth rate of a population with math.floor and looping with percentage values added

  function nbYear(p0, percent, aug, p) {
    let years = 0;
    
    // Convert the percent parameter to a decimal
    let growthRate = percent / 100;
    
    // Loop until the population reaches or exceeds the target
    while (p0 < p) {
      // Calculate the new population for each year
      p0 = Math.floor(p0 + p0 * growthRate + aug);
      years++;
    }
    
    return years;
  }
  