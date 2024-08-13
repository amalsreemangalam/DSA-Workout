class Queue {
    constructor() {
        this.item = []
    }

 enQueue(value){
    this.item.push(value)
}
deQueue(){
    return this.item.shift()
}

peek(){
     return this.item[0]
}

isEmpty(){
    return this.item.length===0
}

print(){
    if(this.isEmpty()){
        console.log("emp");
    }else{
       console.log(this.item.toString());
    }
}

}

let que=new Queue(10)
que.enQueue(10)
que.enQueue(20)
que.enQueue(30)


que.deQueue()
que.print()