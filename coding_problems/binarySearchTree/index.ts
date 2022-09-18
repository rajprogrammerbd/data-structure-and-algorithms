class BSTNode {
    public left: any;
    public right: any;

    constructor(public value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    public root: any;

    constructor() {
        this.root = null;
    }

    log() {
        return this.root;
    }

    insert(val: number) {
        let check = true;
        const newNode = new BSTNode(val);
        let pointer = this.root;

        if (!this.root) {
            this.root = newNode;
            return this.root;
        }

        while (check) {

            if (pointer.value > val) {
                // Go to the left.
                if (  pointer.left !== null ) {
                    pointer = pointer.left;
                } else {
                    pointer.left = newNode;
                    check = false;
                    return pointer.left;
                }
            } else if (pointer.value < val) {
                // Go to the right.
                if (  pointer.right !== null ) {
                    pointer = pointer.right;
                } else {
                    pointer.right = newNode;
                    check = false;
                    return pointer.right;
                }
            } else {
                check = false;
                return null;
            }
        }
    }

    find(val: number) {
        if (this.root === null) {
            return null;
        }

        let check = true;
        let current = this.root;
        let found = false;
        
        while (check) {
            if ( current.value === val ) {
                found = current;
                check = false;
                break;
            }

            if (current.value > val) {                
                if (current.left === null) {
                    found = false;
                    check = false;
                    break;
                } else {
                    current = current.left;
                }
            } else if ( current.value < val ) {
                if (current.right === null) {
                    found = false;
                    check = false;
                    break;
                } else {
                    current = current.right;
                }
            } else {
                found = false;
                check = false;
            }
        }

        return found;
    }
}

const tree = new BinarySearchTree();

console.clear();
tree.insert(10);
tree.insert(8);
tree.insert(2);
tree.insert(80);
tree.insert(11);
tree.insert(7);
tree.insert(100);
tree.insert(5);
tree.insert(20);
tree.insert(10);

console.log(tree.find(70));
console.log(tree);