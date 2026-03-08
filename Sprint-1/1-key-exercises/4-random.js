const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// Num represents a random integer between the minimum(1) and maximum values(100) (inclusive).
// The expression works as follows:
// 1. Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// 2. Multiplying this random number by (maximum - minimum + 1) scales it to the range of possible values (in this case, 100 - 1 + 1 = 100).
// 3. Math.floor() rounds the resulting number down to the nearest whole number, giving us an integer.
// 4. Finally, adding the minimum value shifts the range from starting at 0 to starting at the minimum value (1 in this case).

// Therefore, num will be a random integer between 1 and 100 each time you run the program.

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
