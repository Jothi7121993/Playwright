//Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the number is odd and `"Even"` if the number is even.

function isOddOrEven(num) { 
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

// Call the function with a number
console.log(isOddOrEven(6)); // Output: Even
console.log(isOddOrEven(7)); // Output: Odd