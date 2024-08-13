class Stack {
    constructor() {
        this.item = []
    }
    push(value) {
        this.item.push(value)
    }
    pop() {
        return this.item.pop()
    }
    isempty() {
        return this.item.length === 0
    }
    peak() {
        return this.item[this.item.lenght - 1]
    }
    size() {
        return this.item.length;
    }
    print() {
        if (this.isempty()) {
            console.log("stackempty");
        } else {
            console.log(this.item.toString());
        }
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

stack.pop()
stack.print()