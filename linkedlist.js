class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }


    // to add a node in front


    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // to add a node in last

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {

            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node

        }
        this.size++
    }

    // insert



    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }


    // remove


    removefrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            // removedNode = prev.next
            prev.next = prev.next.next
        }
        this.size--
        // return removeNode.value

    }

    // removefrom middle

    fromMiddle() {
        const middle = Math.floor(this.size / 2);
        let prev = this.head;
        let removedNode;

        for (let i = 0; i < middle - 1; i++) {
            prev = prev.next;
        }

        removedNode = prev.next; // Corrected from prev.node to prev.next
        prev.next = removedNode.next;
        this.size--;
    }






    // search


    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    // reverse


    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev

    }

    // print  the value in the node


    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head
            let listvalue = ''
            while (curr) {
                listvalue += `${curr.value} `
                curr = curr.next
            }
            console.log(listvalue);
        }
    }

}

const list = new Linkedlist()

console.log('list is empty', list.isEmpty());
console.log('list size', list.getSize());
list.print()


// list.append(10)
list.print()

// list.append(20)
// list.append(30)
// list.print()

list.insert(10, 0)
list.print()
list.insert(50, 1)
list.print()

list.insert(80, 2)
list.print()

console.log(list.search(50));
list.reverse()

list.fromMiddle()

list.removefrom(1)
list.print()