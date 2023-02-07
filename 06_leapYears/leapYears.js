/// A year is a leap year if:
        // 1. Its divisible by 4
        // 2. If it is divisible by 100 and 400


const leapYears = function(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        }
    } else if (year % 4 == 0) {
        return true;
    }
    return false;
};






/*
if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0))
    {
        return true;
    }
    return false;


*/

// Do not edit below this line
module.exports = leapYears;
