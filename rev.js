function reverseString(str) {
    
    if (str === "" || str.length === 1) {
        return str;
    }
    
    return reverseString(str.substring(1)) + str[0];
}

// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output will be "olleh"
