function isValidParentheses(s) {
    // Create a stack to store opening parentheses
    let stack = [];

    // Define a map to store the mappings of opening and closing parentheses
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // If the current character is an opening parenthesis, push it onto the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            // If the stack is empty or the current character does not match the expected closing parenthesis,
            
            // return false because the parentheses are not valid
            if (stack.length === 0 || char !== map[stack.pop()]) {
                return false;
            }
        }
    }

    // If the stack is empty at the end, all parentheses are valid

    // Otherwise, there are unclosed parentheses, so return false
    return stack.length === 0;
}

// Example usage:
console.log(isValidParentheses("()")); // true
console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true
