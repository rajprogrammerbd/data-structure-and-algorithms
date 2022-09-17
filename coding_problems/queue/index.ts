export class MyNode {
    public next: any;

    constructor(public val: number) {
        this.val = val;
        this.next = null;
    }
}

export class Queue {
    public first: any;
    public last: any;
    public size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;        
    }

    enqueue(val: number) {
        const newNode = new MyNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;            
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }

        const temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.size--;
        return temp.val;
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
queue.dequeue();

console.log(queue);