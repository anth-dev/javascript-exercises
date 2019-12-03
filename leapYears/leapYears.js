// Leap years are divisible by four. However, years
// divisible by 100 are not leap years unless they are
// divisible by 400.

const leapYears = function(year) {
    if (year % 100 == '0' && year % 400 == '0') {
        return true;
    } else if (year % 100 != '0' && year % 4 == '0') {
        return true;
    } else {
        return false;
    }
}

module.exports = leapYears
