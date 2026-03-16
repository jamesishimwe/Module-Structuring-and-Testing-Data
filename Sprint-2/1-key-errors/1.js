// Predict and explain first...

// Why will an error occur when this program runs?
// The function convertToPercentage takes a decimal number as an argument and is supposed to return the percentage equivalent of that number. However, the variable 'decimalNumber' is being declared twice, once as a parameter and once inside the function. It is also being assigned a value inside the function, which is different from the parameter value. This causes a conflict and results in an error message indicating that 'decimalNumber' has already been declared, and it would also give a different percentage value which is not equal to the initial value. To fix this, we can remove the redeclaration and directly modify the input variable without declaring a new one.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
