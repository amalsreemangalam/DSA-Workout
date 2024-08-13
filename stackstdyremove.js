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

    peek() {

        return this.item[this.item.length - 1]

    }
    size() {
        
        return this.item.length
    }
    print() {
        if (this.isempty()) {
            console.log("stack empty");
        } else {
            console.log(this.item.toString());
        }
    }



    // removefrom value


    remove(value) {
        let index = this.item.indexOf(value);
        if (index === -1) {
            console.log(`${value} not found in the stack`);
        } else {
            this.item.splice(index, 1);
            console.log(`${value} removed from the stack`);
        }
    }
    


    // atindex


  remove(value){
    let index=this.item.indexOf(value)
    if(index===-1){
        console.log("value not found");
    }else{
        this.item.splice(index,1)
    }
  }

}


const stack = new Stack()

stack.push(10)

stack.push(20)

stack.push(30)

stack.push(40)

stack.remove(20)

stack.print()