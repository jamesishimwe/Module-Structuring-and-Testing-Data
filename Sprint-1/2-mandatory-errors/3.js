const cardNumber = "4533787178994213";
//const last4Digits = cardNumber.toString().slice(-4);
//console.log(last4Digits);

// Prediction: The code will not work because cardNumber is a number and the slice method is not applicable to numbers. It will likely throw a TypeError.
// After running the code, it gives a TypeError: cardNumber.toString(...).slice is not a function. This is because toString() returns a string, and slice is a method for strings, but we are trying to call slice on the result of toString() which is not correct.
// To fix this, we need to ensure that we are calling slice on the string representation of cardNumber. We can do this by first converting cardNumber to a string and then slicing it. The updated code would be:
const last4Digits = cardNumber.slice(-4);
//console.log(last4Digits); // This should now correctly output the last 4 digits of the card number.
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
