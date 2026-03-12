const movieLength = 3661; // length of movie in seconds

const remainingSeconds = (movieLength % 60).toString().padStart(2, "0");
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = (totalMinutes % 60).toString().padStart(2, "0");
const totalHours = ((totalMinutes - remainingMinutes) / 60)
  .toString()
  .padStart(2, "0");

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// a) There are 6 variable declarations in this program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours and result.
// b) There is 1 function call in this program: console.log(result).
// c) The expression movieLength % 60 calculates the remainder when movieLength is divided by 60. This gives us the number of seconds that are left after accounting for the full minutes in the movie length.
// d) The expression assigned to totalMinutes calculates the total number of full minutes in the movie length by subtracting the remaining seconds from the total length and then dividing by 60.
// e) The variable result represents the formatted string of hours, minutes, and seconds. A better name for this variable could be formattedTime or timeString.
// f) This code will work for all non-negative integer values of movieLength. However, if movieLength is negative, it may not produce meaningful results as it would represent a negative duration.
//    If the movieLength is zero, the result will be "0:0:0", which is correct. For very large values of movieLength, it will still work as long as it can be represented within the limits of JavaScript's number type and the only issue is that the hour is longer than 24 hours.
//    If the movie length is less than 60 seconds, it will correctly show 0 hours and 0 minutes, with the remaining seconds. If the movie length is between 60 seconds and 3600 seconds (1 hour), it will show 0 hours and the correct number of minutes and seconds. If the movie length is greater than or equal to 3600 seconds, it will show the correct number of hours, minutes, and seconds.
