const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the trailing "p" from the string to get just the numeric part
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): pads the numeric string with leading zeros to ensure it has at least 3 characters (e.g., "399" becomes "399", "99" becomes "099")
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts the pounds part by taking all characters except the last two (e.g., "399" becomes "3", "099" becomes "0")
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): extracts the pence part by taking the last two characters and padding with zeros if necessary (e.g., "399" becomes "99", "099" becomes "99")
// 6. console.log(`£${pounds}.${pence}`): outputs the final price in pounds and pence format (e.g., "£3.99" for "399p", "£0.99" for "99p")