class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class SelfOrganizedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
     insert(data){
        var node = new Node(data);
        if(this.head == null){
            this.head = node;
            this.tail = this.head;
            this.head.next= null;
            this.tail.prev = null;
            this.length++;
        }
        else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.tail.next = null;
            this.length++;
        }
    }
    size(){
        return this.length;
    }
    at(index){
        if(this.head == null || index > this.length){
            return null;
        }
        var i = 0;
        var temp = this.head;
        while(i !== index){
            temp = temp.next;
            i++;
        }
        return temp.data;
    }
    findNode(data) {
        var temp = this.head;
        while(temp != null){
            if(temp.data == data){
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }

    toArray() {
        var array = [];
        var temp = this.head;
        while(temp != null){
            array.push(temp.data);
            temp = temp.next;
        }
        return array;
    }

    removeAt(index) {
        var i = 0;
        var temp = this.head;
        if(index > this.length){
            return null;
        }
        if(this.length == 1 || this.length == 0){
            this.length = 0;
            this.head = null;
            this.tail = null;
            return;
        }
        if(index == 0){
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return;
        }
        while(i != index){
            temp = temp.next;
            i++;
        }
        if(temp == this.tail){
            this.tail = this.tail.prev;
            this.tail.next = null
            this.length--;
            return;
        }
        var prev = temp.prev;
        var next = temp.next;
        prev.next = next;
        next.prev = prev;
        temp = null;
        this.length--;
        return;
    }

    moveToFront(node) {
        var temp = this.head;
        while(temp != node){
            temp = temp.next;
        }
        if(this.head == node){
            return;
        }
        if(temp == this.tail){
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.head.prev = temp;
            temp.next = this.head;
            this.head = temp;
            return;
        }
        var prev = temp.prev;
        var next = temp.next;
        prev.next = next;
        next.prev = prev;
        temp.next = this.head;
        temp.prev = null;
        this.head.prev = temp;
        this.head = temp;      
    }

    reorganize(data) {
        var temp = this.head;
        while(temp != null){
            if(temp.data == data){
                this.moveToFront(temp);
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
}

module.exports = {
    SelfOrganizedList,
    Node
};
