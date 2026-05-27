//Understand how to reverse a string and check for palindromes in JavaScript by manipulating strings and using conditional logic.

// Function to reverse a string
// 1. Convert the input into characters
// 2. Loop them in reverse direction
// 3. Concatenate the string
// 4. Print the new string
function reverseString(str) {
  let reversed = "";
  
  // Loop through string in reverse direction
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  
  console.log(`Original string: "${str}"`);
  console.log(`Reversed string: "${reversed}"`);
  
  return reversed;
}

// Function to check if a string is a palindrome
// 1. Check if the reverse string and original string are the same
// 2. Return true if same, else false
function isPalindrome(str) {
  // Reverse the string
  const reversedStr = reverseString(str);
  
  // Compare original and reversed string (case-insensitive)
  if (str.toLowerCase() === reversedStr.toLowerCase()) {
    console.log(`"${str}" is a PALINDROME\n`);
    return true;
  } else {
    console.log(`"${str}" is NOT a palindrome\n`);
    return false;
  }
}

// Test the functions with various strings
console.log("=== Testing Palindrome Function ===\n");

// Test case 1: Simple palindrome
isPalindrome("radar");

// Test case 2: Not a palindrome
isPalindrome("hello");

// Test case 3: Single character (always palindrome)
isPalindrome("a");

// Test case 4: Palindrome with mixed case
isPalindrome("Madam");

