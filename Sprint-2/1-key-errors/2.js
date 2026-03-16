// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============>  This code will give an error because the parameter name '3' is not a valid variable name in JavaScript. Variable names cannot start with a number, and '3' is not a valid identifier. This will result in a SyntaxError when the code is executed. To fix this, we need to use a valid variable name for the parameter that starts with a letter or an underscore.
/*
function square(3) {
    return num * num;
}
*/
// SyntaxError: Unexpected number

// =============> explain this error message here

// Finally, correct the code to fix the problem

// Here's the corrected code:
function square(num) {
  return num * num;
}

// Now the function should work correctly and return the square of any number passed as an argument.
