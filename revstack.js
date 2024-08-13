class Stack {
    constructor() {
        this.items = [];
    }

    // Push element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the stack elements
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log(str);
    }
}

// Function to reverse a stack
function reverseStack(stack) {
    // Create an auxiliary stack
    let auxStack = new Stack();

    // Pop elements from the original stack and push them onto the auxiliary stack
    while (!stack.isEmpty()) {
        auxStack.push(stack.pop());
    }
    
    return auxStack
}


// Example usage:
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Original stack:");
stack.printStack(); // Output: 5 4 3 2 1

stack=reverseStack(stack);

console.log("Reversed stack:");
stack.printStack(); // Output: 1 2 3 4 5
