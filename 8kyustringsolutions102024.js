//function that returns an integer version of a number originally given as a string

const stringToNumber = function(str) {
    return Number(str);
  }



//function that splits sentence into array of words based on spaces, reverses order of split words, joins them back with space

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
  }


  //function that loops n times, pushes calculation to new array and returns new array

  function countBy(x, n) {
    let z = [];
    
    for (let i = 1; i <= n; i++) {
      z.push(x * i);
    }
    
    return z;
  }


  //function that conditionally evaluates expression based on values l and w

  const areaOrPerimeter = function(l, w) {
    return l === w ? l * w : 2 * (l + w);
  };



//function that uses comparison and logical operators

function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
      return 100;
    } else if (exam > 75 && projects >= 5) {
      return 90;
    } else if (exam > 50 && projects >= 2) {
      return 75;
    } else {
      return 0;
    }
  }