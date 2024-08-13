class Hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    Hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt[i]
        }
        return total%this.size
        }
    
    set(key,value){
        let index=this.Hash(key)
            this.table[index]=value
        
    }
    get(key){
        let index=this.Hash(key)
         return this.table[index]
        
    }
    remove(key){
        let  index=this.Hash(key)
             this.table[index]=undefined
        
    }
    display(){
        for(let i=0;i<table.length;i++){
            if(this.table[i]){
                console.log(i,table[i])
            }
        }
    }
}

const hash=new Hashtable()
hash.set("name","amal")
console.log(hash.get("name"))


