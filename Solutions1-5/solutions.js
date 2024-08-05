//make a function that reutrns the value multiplied by 50 and increased by 6. If the value entered is a string ti should return 'error'

function problem(value) {
    if (typeof value === 'number') {  // Check if value is a number
        return value * 50 + 6;
    } else {
        return "Error";  // Return "Error" if the value is not a number
    }
}



//or


const problem = value => 
    typeof value === 'number' ? value * 50 + 6 : "Error";




// complete method that takes boolean and returns 'yes' for true and 'no' for false


function boolToWord( bool ){
    if (bool === true){
    return "Yes"
    } else if (bool === false){
    return "No"
    }
  }

//or

const boolToWord = (bool) => bool ? "Yes" : "No";


//complete function that gives personalized greeting to owner

function greet (name, owner) {
    if (name === owner){
    return 'Hello boss'
    } else{
    return 'Hello guest'
    }
  }

//or

  const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';


//function that checks for a value inside of a given array

function check(a, x) {
    return a.includes(x);
  }

//or

const check = (a,x) => a.includes(x);



//function that takes two strings as args, used to find how many occurences the second string is in the first, displaying 0 if none.

function strCount(str, letter){
    let result = 0
    for (let i = 0; i < str.length; i++){
        if(str[i] == letter){
            result++
        }
    }
    return result
}

//or

const strCount = (str, letter) => str.split(letter).length -1



