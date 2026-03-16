// Predict and explain first...

// Why will an error occur when this program runs?
// The function convertToPercentage takes a decimal number as an argument and is supposed to return the percentage equivalent of that number. However, the variable 'decimalNumber' is being declared twice, once as a parameter and once inside the function. It is also being assigned a value inside the function, which is different from the parameter value. This causes a conflict and results in an error message indicating that 'decimalNumber' has already been declared, and it would also give a different percentage value which is not equal to the initial value. To fix this, we can remove the redeclaration and directly modify the input variable without declaring a new one.

// Try playing computer with the example to work out what is going on
/*
function convertToPercentage(decimalNumber) { //function declaration with parameter 'decimalNumber'
  const decimalNumber = 0.5; // This line redeclares 'decimalNumber' as a constant and assigns it the value of 0.5, which is different from the parameter value. This causes a conflict and results in an error message indicating that 'decimalNumber' has already been declared.
  const percentage = `${decimalNumber * 100}%`; // This line calculates the percentage by multiplying the 'decimalNumber' (which is now 0.5) by 100 and appending a '%' sign to it. However, since 'decimalNumber' has been redeclared as a constant, this line will not work as intended and will likely cause an error or return an incorrect percentage value.

  return percentage; // This line returns the calculated percentage. However, due to the redeclaration of 'decimalNumber', this will not return the expected percentage based on the input parameter, and it may cause an error or return an incorrect value.
}

console.log(decimalNumber); // This line attempts to log the value of 'decimalNumber' to the console. However, since 'decimalNumber' is declared as a parameter within the function and also redeclared as a constant inside the function, it is not accessible outside the function scope. This will result in a ReferenceError indicating that 'decimalNumber' is not defined in this context.
*/
// Interpret the error message and figure out why an error is occurring
// The error occurs because the variable 'decimalNumber' is being declared twice, once as a parameter and once inside the function. This causes a conflict and results in an error message indicating that 'decimalNumber' has already been declared. To fix this, we can remove the redeclaration and directly modify the input variable without declaring a new one.

// Finally, correct the code to fix the problem
// Here's the corrected code:

function convertToPercentage(decimalNumber) {
  //function declaration with parameter 'decimalNumber'

  const percentage = `${decimalNumber * 100}%`; // This line calculates the percentage by multiplying the modified 'decimalNumber'  by 100 and appending a '%' sign to it. This will return the expected percentage value based on the input parameter.

  return percentage; // This line returns the calculated percentage, which should now work correctly without any errors.
}

console.log(convertToPercentage(0.5)); // This line calls the function with an argument of 0.5 and logs the result to the console, which should now return "50%" without any errors.
