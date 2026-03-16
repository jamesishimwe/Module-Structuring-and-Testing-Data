// Predict and explain first...
//  =============> write your prediction here
// The function sum is supposed to return the sum of a and b, by getting a and b as parameters, add the two then return the sum but it currently does not return anything. Instead, it has a return statement with no value, which means it will return undefined. Therefore, when we call sum(10, 32) inside the template literal, it will return undefined and the output will be "The sum of 10 and 32 is undefined".
/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> write your explanation here
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
