// Define an array of numbers to analyze
const data = [1, 2, 3, 4, 5];

// Calculate the mean (average) of the numbers
const mean = data.reduce((total, num) => total + num) / data.length;

// Calculate the standard deviation of the numbers
const variance = data.reduce((total, num) => total + Math.pow(num - mean, 2), 0) / data.length;
const stdDev = Math.sqrt(variance);

// Output the results to the console
console.log(`The mean of the numbers is ${mean.toFixed(2)}.`);
console.log(`The standard deviation of the numbers is ${stdDev.toFixed(2)}.`);
