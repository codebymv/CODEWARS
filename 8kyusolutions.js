/// function that takes two arguments, dads age and sons age. calculate how many years ago the father was twice as old as son

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let result = Math.abs((sonYearsOld * 2) +- dadYearsOld)
    return result
  }


// function that reverses strings and removes whitespaces and commas

function solution(str){
    let result = str.split("").reverse().join("")
    
    return result
    }


//function that takes the first and last character off of any string
function removeChar(str){
    let result = str.slice(1, str.length -1)
    return result
    };



