
class Nodes {
    public next: any;
    public prev: any;

    constructor(public val: any) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    public head: any;
    public tail: any;
    public length: number;

    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: any) {
        const newNode = new Nodes(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
                        
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.length) return undefined;

        const oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            oldHead.next.prev = null;
            this.head = oldHead.next;
            oldHead.next = null;
        }

        this.length--;

        return oldHead;
    }

    unshift(val: any) {
        if (!this.head) {
            this.push(val);
            return true;
        }

        const newNode = new Nodes(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }
}

const list = new DoublyLinkedList();

list.push('Hello');
// list.push('world!');
// list.pop();
// list.push('world!');
// list.push('raj');
list.shift();
list.push('Hello');
list.push('World!');
list.unshift('RAJ');

console.log('list', list);