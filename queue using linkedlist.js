class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor(){
        this.head=null
    }

    isempty(){
        return this.head===null
    }

    enqueue(value){
        const node=new Node(value)
        if(this.isempty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }

    }

    dequeue(){
        let deletenode=this.head
        this.head=deletenode.next
        return deletenode
    }
    print(){
        let curr=this.head
        while(curr){
            console.log(curr.value);
            curr=curr.next
        }
    }
}
let queue=new Queue()


queue.enqueue(10)
queue.enqueue(20)

queue.enqueue(30)

queue.enqueue(40)
queue.dequeue()

queue.print()

