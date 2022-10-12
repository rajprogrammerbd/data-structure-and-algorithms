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

class ListNode {
    val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
    }
}

 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): any {
    let arr1 = [];
    let arr2 = [];
    let num1 = 0;
    let current = l1;

    while (current !== null) {
        arr1.unshift(current.val);
        current = current.next;
    }
    
    current = l2;
    
    while (current !== null) {
        arr2.unshift(current.val);
        current = current.next;
    }
    
    const addition = Number(arr1.join('')) + Number(arr2.join(''));
    
    const splitedArr = addition.toString().split('');
    let res: any;

    for (let i = 0; i < splitedArr.length; i++) {
        if (res === undefined) {
            res = new ListNode(Number(splitedArr[i]));
        } else {
            console.log('check', res);
            while (res) {
                if (res) {
                    if (!res?.next) {
                        res.next = new ListNode(Number(splitedArr[i]));
                        break;
                    }
                    res = res.next;
                }
                console.log('my res',  res);
                break;
            }
        }
    }
    console.log('position', res);
    return 10;
};

const param1 = new ListNode(2);
param1.next = new ListNode(4);
// param1.next.next = new ListNode(3);

const param2 = new ListNode(5);
param2.next = new ListNode(6);
param2.next.next = new ListNode(4);

// const result = addTwoNumbers(param1, param2);
function recursive(obj: any, val: any): any {
    if (obj.next !== null) {
        return recursive(obj.next, val);
    } else {
        obj.next = new ListNode(val);
        return true;
    }
}

console.log(recursive(param1, 100), param1);

// console.log('mainly result', result)




            /*
            while (position) {
                if (position !== null) {
                    console.log('check', position);
                } else {
                    position = false;
                }
                position = position.next;
        
                if (position && position.next !== null) {
                    // position.next = new ListNode(Number(splitedArr[i]));
                }
                */
                // position = position.next;;