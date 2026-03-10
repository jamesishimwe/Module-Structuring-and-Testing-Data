let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// a) There are 5 function calls in this file. They are on the following lines:
// Line 4: Number();
// Line 5: Number();
// Line 4: carPrice.replaceAll(",","");
// Line 5: priceAfterOneYear.replaceAll("," ,"");
//line 10: console.log();

// b) The error is coming from line 5 because there is a syntax error in the replaceAll method. The correct syntax should be priceAfterOneYear.replaceAll("," "") instead of priceAfterOneYear.replaceAll("," ,""). To fix this problem, we need to add the comma that is missing.

// c) The variable reassignment statements are on the following lines:
//Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
//Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

// d) The variable declarations are on the following lines:
/*
Line 1: let carPrice = "10,000";
Line 2: let priceAfterOneYear = "8,543";
Line 7: const priceDifference = carPrice - priceAfterOneYear;
Line 8: const percentageChange = (priceDifference / carPrice) * 100;
*/
// e) The expression Number(carPrice.replaceAll(",","")) is doing two things. First, it is using the replaceAll method to remove all commas from the string value of carPrice. This is necessary because the presence of commas would prevent us from converting the string to a number. After removing the commas, the expression then uses the Number function to convert the resulting string into a numeric value that can be used for calculations. The purpose of this expression is to ensure that carPrice is in a format that can be used for mathematical operations, specifically for calculating the percentage change.