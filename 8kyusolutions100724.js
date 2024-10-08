// Write a function "greet" that returns "hello world!"
function greet() {
  return "hello world!";
}


//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(kmph) {
    return Math.floor(kmph * 100000 / 3600);
}



//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}



//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(str) {
  return str.replace(/\s+/g, '');
}


//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

function findDifference(a, b) {
  const volumeA = a[0] * a[1] * a[2];
  const volumeB = b[0] * b[1] * b[2];
  return Math.abs(volumeA - volumeB);
}