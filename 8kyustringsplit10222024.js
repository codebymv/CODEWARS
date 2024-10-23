//function that uses split method to put name into two words, grabs the first letter index of the first and second word and returns with a '.' between


function abbrevName(name){
    // Split the name by space to get the two words
    let words = name.split(' ');
    
    // Take the first letter of each word, convert it to uppercase, and join them with a dot
    return words[0][0].toUpperCase() + '.' + words[1][0].toUpperCase();
}

//for the name Bob Smith, words[0] would be "Bob" and words[0][0] would be "B"