
class MyNode {
    public next: any;

    constructor(public val: number) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    public first: any;
    public last: any;
    public length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val: number) {
        const newNode = new MyNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return ++this.length;
    }

    pop() {
        if ( !this.first ) {
            return null;
        }

        const temp = this.first;
        const next = this.first.next;

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = next;
        }

        --this.length;

        return temp.val;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(11);
stack.push(12);

stack.pop();
stack.pop();
// stack.pop();

console.log(stack);