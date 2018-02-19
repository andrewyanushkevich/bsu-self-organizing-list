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
        var i = 1;
        var temp = this.head;
        if(index == 1){
            var head = this.head;
            this.head = this.head.next;
            return;
        }
        while(i != index){
            temp = temp.next;
            i++;
        }
        if(temp == tail){
            var tail = this.tail;
            this.tail = this.tail.prev;
            return;
        }
        var prev = temp.prev;
        var next = temp.next;
        prev.next = next;
        next.prev = prev;
        this.length--;
    }

    moveToFront(node) {

    }

    reorganize(data) {

    }
}

module.exports = {
    SelfOrganizedList,
    Node
};
