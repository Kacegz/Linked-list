class node{
    constructor(value=null,nextNode=null){
        this.value=value
        this.next=nextNode
    }
}
class LinkedList{
    constructor(node){
        this.next=node;
    }
    prepend(value){
        this.next=new node(value,this.next)
    }
    append(value){
        if(this.next===null){
            this.prepend(value)
        }else{
            let pointer=this.next
            while(pointer.next!==null){
                pointer=pointer.next
            }
            pointer.next= new node(value,null)
        }
    }
    size(){
        let counter=0
        let pointer=this.next
        while(pointer!==null){
            counter++
            pointer=pointer.next
        }
        return counter        
    }
    head(){
        return this.next
    }
    tail(){
        let pointer=this
        while(pointer.next!==null){
            pointer=pointer.next
        }
        return pointer
    }
    at(index){
        let pointer=this
        for(let i=0;i<=index;i++){
            pointer=pointer.next
        }
        return pointer.value
    }
    pop(){
        let pointer=this.next
        let previous=this
        while(pointer.next!==null){
            previous=pointer
            pointer=pointer.next
        }
        previous.next=null
        return "Value popped"
    }
    contains(value){
        let pointer=this.next
        while(pointer!==null){
            if(pointer.value===value){
                return true
            }
            pointer=pointer.next
        }
        return false
    }
    find(value){
        let pointer=this.next
        let counter=0
        while(pointer!==null){
            if(pointer.value===value){
                return counter
            }
            counter++
            pointer=pointer.next
        }
        return null
    }
    toString(){
        let string=""
        let pointer=this.next
        if(pointer===null){
            return "null"
        }else{
            string=string.concat("(",pointer.value)
            pointer=pointer.next
        }
        while(pointer!==null){
            string=string.concat(") -> (",pointer.value)
            pointer=pointer.next
        }
        string=string.concat("",")-> null")
        return string
    }
    insertAt(value,index){
        if(index===0){
            return this.prepend(value)
        }
        let pointer=this.next
        let previous
        if(index>this.size()) return this.append(value)
        for(let i=0;i<index;i++){
            previous=pointer
            pointer=pointer.next
        }
        previous.next=new node(value,pointer)
    }
    removeAt(index){
        let previous
        let pointer=this.next
        for(let i=0;i<index;i++){
            previous=pointer
            pointer=pointer.next
        }
        previous.next=pointer.next
    }
}
const list= new LinkedList(new node("first"))
list.append("second")
list.append("third")
list.prepend("zero")

console.log(list)
console.log("Count: "+ list.size())
console.log("Start: "+ list.head())
console.log("End: "+ list.tail())
console.log("At 2: "+ list.at(2))
console.log(list.pop())
console.log("End: "+ list.tail())
console.log("Contains: "+ list.contains("zero"))
console.log("Not contains: "+ list.contains("czwarta"))
console.log("Found at: "+ list.find("druga"))
console.log("String: "+ list.toString())
list.insertAt("custom",1)
console.log("String: "+ list.toString())
list.removeAt(1)
console.log("String: "+ list.toString())