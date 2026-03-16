// Predict and explain first...
//  The function capitalise takes a string argument and is supposed to return the string with the first letter capitalised by getting the first letter and capitalising it then adding the rest of the string. However, there is an error in the code because the variable name 'str' is being redeclared twice, first as a parameter and then inside the function, which causes a conflict. The error message will likely indicate that 'str' has already been declared. To fix this, we can simply remove the redeclaration and directly modify the input string.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// The error occurs because the variable 'str' is being declared twice, once as a parameter and once inside the function. This causes a conflict and results in an error message indicating that 'str' has already been declared. To fix this, we can remove the redeclaration and directly modify the input string without declaring a new variable.
// Here's the corrected code:

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// Now the function should work correctly and return the input string with the first letter capitalised.
