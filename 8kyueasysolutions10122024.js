
// Sum Numbers in an array
function sum (numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return 0;
    }

    // Initialize the sum variable
    let sum = 0;

    // Loop through the array and add each number to the sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Return the total sum
    return sum;
};



//replace vowels in a string
function shortcut(str) {
    // Use a regular expression to remove all lowercase vowels
    return str.replace(/[aeiou]/g, '');
}


//printing strings dependent on operations result

function bmi(weight, height) {
    // Calculate BMI using the formula: weight / height^2
    const bmiValue = weight / (height * height);

    // Return the appropriate category based on BMI value
    if (bmiValue <= 18.5) {
        return "Underweight";
    } else if (bmiValue <= 25.0) {
        return "Normal";
    } else if (bmiValue <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


//calculations and rounding
function litres(time) {
    // Calculate litres of water and round down to the nearest whole number
    return Math.floor(time * 0.5);
}


//string parsing and conversions
function getAge(inputString){
    // Get the first character of the string and convert it to an integer
    return parseInt(inputString[0]);
}