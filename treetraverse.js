class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class Tree{
    constructor(){
        this.root=null
    }
    isempty(){
        return this.root===null
    }
    
    insert(value){
        let node=new Node(value)
        if(this.isempty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left.newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
 inorder(root = this.root) {
        if (root === null) {
            return;
        }
        this.inorder(root.left);
        console.log(root.value);
        this.inorder(root.right);
    }
    levelorder(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }


    // min

min(root=this.root){
    if(!root.left){
        return root.value
    }else{
       return this.min(root.left)
    }
}

// max
max(root=this.root){
    if(!root.right){
        return root.value
    }else{
       return this.max(root.right)
    }
}



}

const tree=new Tree()

tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)

console.log(tree.search(tree.root,100))
tree.levelorder()

console.log("minnn",tree.min());

console.log("maxx",tree.max());
