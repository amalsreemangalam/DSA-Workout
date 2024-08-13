class queue {

    constructor() {
        this.items = []
        this.size = 0
    }

    enqueue(val) {
        this.items.push(val)
        this.size++
    }

    dequeue() {
        let val = this.items.shift()
        this.size--
        return val
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.size
    }

    peek() {
        return this.items[0]
    }
}
 
class QueueStack {
    constructor() {

        this.enqueuestack = new queue()

    }

    push(val) {
        this.enqueuestack.enqueue(val)
    }
    pop() {
        let dequeuestack = new queue()
        if (this.enqueuestack === 0) {
            return "queue is empty"
        }
        while (this.enqueuestack.size - 1) {
            dequeuestack.enqueue(this.enqueuestack.dequeue())
        }
        let remv = this.enqueuestack.dequeue()
        this.enqueuestack = dequeuestack
        return remv
    }
}

let table = new QueueStack()

table.push(100)

table.push(200)

table.push(300)

table.push(400)

table.pop()

// table.pop()

// table.pop()

console.log(table);