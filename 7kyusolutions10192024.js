//cgecking if string is even length, using math.floor to find the middle character(s) of a string and returning conditionally

function getMiddle(s) {
    const length = s.length;
    const middle = Math.floor(length / 2);
  
    // Check if the length is even
    if (length % 2 === 0) {
      // Return the middle two characters for even-length strings
      return s[middle - 1] + s[middle];
    } else {
      // Return the middle character for odd-length strings
      return s[middle];
    }
  }


  //uses replace string method to globally replace all vowel variants with empty string

  function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
  }


  //uses map method to create a new array, and adds 1 to the index of the new array to show the line number

  function number(lines) {
    return lines.map((line, index) => `${index + 1}: ${line}`);
  }


  //uses an object to hold complimenting values, split is used to turn a string into array of characters, map replaces each character complement and rejoins

  function dnaStrand(dna) {
    const complements = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    };
  
    return dna.split('').map(nucleotide => complements[nucleotide]).join('');
  }



  //function for converting binary to integers, uses join method to convert array to single string, and parseInt converts string from binary to integer

  function binaryArrayToNumber(arr) {
    return parseInt(arr.join(''), 2);
  }