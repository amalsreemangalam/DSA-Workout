// stack using queue techniques or operations

class Stack{
    constructor(){
        this.top = []
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    add(val){
        this.top.push(val);
        this.size++
    }

    remove(){
        let val =this.top.pop();
        this.size--;
        return val
    }

}

class TwoStack{
    constructor(){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue(val){
        this.stack1.add(val)
    }

    dequeue(){
        if(this.stack1.isEmpty() && this.stack2.isEmpty()){
            return "empty queue"
        }
        while(!this.stack1.isEmpty()){
            let val = this.stack1.remove();
            this.stack2.add(val)
        }
        return this.stack2.remove()
    }
}

let table = new TwoStack()

table.enqueue(100)
table.enqueue(200)
table.enqueue(300)
table.enqueue(400)
table.dequeue()
table.dequeue()

console.log(table);