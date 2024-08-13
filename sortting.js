class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }


}
class   Queue {
    constructor() {
        this.head = null
    }

    enqueue(value) {
        const node = new Node(value)
        if (this.size == 0) {
            this.head = node
        } else {
            this.next = this.head
            this.head = node
        }


    }
    dequeue() {

        let removenode = this.head

        removenode = this.head
        this.head = removenode.next
        return removenode

    }


  print(){
    if(this.head==null){
console.log("empty queue");
    }else{
        console.log(this.head.toSting());
    }
  }
}

let queue=new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.dequeue()

queue.print()

