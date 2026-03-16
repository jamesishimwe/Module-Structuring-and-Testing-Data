// Predict and explain first...

// Predict the output of the following code:
// This code will not work as expected because the function getLastDigit does not take any parameters, but we are trying to pass a number to it when we call it. The function is currently using a constant variable num which is set to 103, so it will always return the last digit of 103, which is 3.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output her
// Explain why the output is the way it is
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
