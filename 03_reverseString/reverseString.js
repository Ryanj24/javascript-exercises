const reverseString = function(str) {
    // Create empty array to append each letter of given string to
    const arr = [];

    // Loop through each letter in given string
    for (i = 0; i < str.length; i++) {

        // Add given letter i to the beginning of the array
        arr.unshift(str[i]);
    }

    // Create new variable to add the letters from the array to without spaces between them and return the newString
    newString = arr.join("");
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
