// Sample array containing numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Variable to store the sum of odd numbers
let sumOfOdds = 0;

// Array to store the odd numbers
let oddNumbers = [];

// Loop through the array to find odd numbers and calculate their sum
for (let i = 0; i < numbers.length; i++) {
    // Check if the number is odd
    if (numbers[i] % 2 !== 0) {
        // Add the odd number to the oddNumbers array
        oddNumbers.push(numbers[i]);
        // Add the odd number to the sum
        sumOfOdds += numbers[i];
    }
}

// Output the odd numbers
console.log("Odd numbers:", oddNumbers);

// Output the sum of odd numbers
console.log("Sum of odd numbers:", sumOfOdds);
