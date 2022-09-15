export class Nodes {
    public val: any;
    public next: any;

    constructor (val: any) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    public head: any;
    public tail: any;
    public length: number;

    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: any) {
        const newVal = new Nodes(val);

        if (!this.head) {
            this.head = newVal;
            this.tail = this.head;
            this.length++;
            return;
        }

        this.tail.next = newVal;
        this.tail = newVal;
        this.length++;
    }

    pop() {
        if (this.length) {
            let current = this.head;
            let last;

            if (this.length === 1) {
                last = this.head;
                this.head = null;
                this.tail = null;
                this.length--;
            } else {
                while (current.next) {
                    last = current;
                    current = current.next;
                }
                this.tail = last;
                this.tail.next = null;
                this.length--;
                return last;
            }
        } else {
            return undefined;
        }
    }

    shift() {
        if (this.length) {
            let temp;
            temp = this.head;

            if (this.length === 1) {
                this.head = null;
                this.tail = null;
                this.length--;
            } else {
                this.head = this.head.next;
                this.length--;
            }

            return temp;
        } else return undefined;
    }

    unshift(val: any) {
        if ( this.head !== undefined ) {
            const newVal = new Nodes(val);
            newVal.next = this.head;
            this.head = newVal;
            this.length++;
        } else return undefined;
    }

    get(index: number) {
        if (this.length === 0 || this.length - 1 < index) {
            return null;
        }

        let counting = true;
        let current = this.head;
        let indexes = 0;

        while (indexes < this.length && counting) {
             if ( indexes === index ) {
                counting = false;
                return current;
             }
            current = current.next;
            indexes++;
        }
    }

    set(index: number, val: any) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        } else return null;
    }

    insert(index: number, val: any) {
        if (this.length === 0 || this.length - 1 < index) {
            return null;
        }

        let current = this.head;
        let prevEle;
        let count = 0;
        let found = true;
        const newNode = new Nodes(val);

        if ( count === index ) {
            newNode.next = current;
            this.head = newNode;
            return true;
        } else {
            count = 1;
            current = this.head.next;
            while (count < this.length && found) {
                prevEle = this.get(count - 1);
                if (count === index) {
                    newNode.next = current;
                    prevEle.next = newNode;
                    found = false;
                    return true;
                }
                current = current.next;
                count++;
            }
        }
        this.length++;
        return true;
    }
}

const list = new SinglyLinkedList();

list.push('hello');
list.push('world!');
list.push('my');
list.push('name');
list.push('is');
list.push('raj');
list.push('dutta');

list.insert(6, 'RAJ DUTTA');

// list.pop();
// list.shift();
// list.unshift("Hello there!");
// list.set(0, 'Hello Raj');
// console.log('get function ', list.get(0));
list.get(3);
list.insert(3, 'v');
// console.log('list', list);

console.log(list);

export default SinglyLinkedList;
