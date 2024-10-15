//function that returns summation of every number from 1 to the num value

let summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }



//takes an array and reverses the order 

function reverseList(list) {
    return list.reverse();
  }


//using trim, split, reverse, join string methods to reverse the order of words in a string

function reverse(string){
    return string.trim().split(' ').reverse().join(' ');
}


//determining the order of stoplight sequences with if conditionals

function updateLight(current) {
    if (current === 'green') {
      return 'yellow';
    } else if (current === 'yellow') {
      return 'red';
    } else if (current === 'red') {
      return 'green';
    }
  }



//using denominator of 3 to find the quarter of any month given as an integer

const quarterOf = (month) => {
    return Math.ceil(month / 3);
  }


