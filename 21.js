class Node2{
    constructor(value, next, prev){
this.value = value;
this.next = next;
this.prev = prev;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToHead(value){
        const node = new Node2(value, null, this.head);
        if(this.head) this.head.next = node;
        else this.tail = node;
        this.head = node;
    }

    addToTail(value){
        const node = new Node2(value, this.tail, null);
        if(this.tail) this.tail.prev = node;
        else this.head = node;
        this.tail = node;
    }

    removeHead(){
        if(!this.head) return null;
        const value = this.head.value;
        this.head = this.head.prev;
        if(this.head) this.head.next = null;
        else this.tail = null;
        return value;
    }

    search(value){
        let current = this.head;
        while(current){
            if(current.value === value) return value;
            current = current.value
        }
        return null;
    }
}