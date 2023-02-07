const sumAll = function(num1, num2) {

    // Initialise variable sum that we'll add to as we loop from num1 to num2 in either direction
    let sum = 0;

    // Checks to ensure that both numbers entered are positive and are actually a number
    if (num1 < 0 || num2 < 0 || typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }

    // Check if the first number entered is greater than second number as we need to then decrement from num1 to num2 instead of increment
    if (num1 > num2) {
        for (i = num1; i >= num2; i--) {

            // Add each number to the total sum
            sum += i;
        }
    } else {
        for (i = num1; i <= num2; i++) {

            // Add each number to the total sum
            sum += i;
        }
    }

    // Return the total sum
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
