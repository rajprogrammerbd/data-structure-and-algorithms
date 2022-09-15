
export class Account {
    constructor (public readonly id: number, public owner: string, private balence: number) {
        this.id = id;
        this.owner = owner;
        this.balence = balence;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error('Invalid Amount');
        }

        this.balence += amount;
    }

    get getBalence(): number {
        return this.balence;
    }
}

// const account = new Account(1, 'Raj Dutta', 10);
// console.log(account.getBalence);

export class Count {
    private static count: number = 0;

    static increase() {
        Count.count++;
    }

    static getCount() {
        return Count.count;
    }
}

Count.increase();
Count.increase();

export class Common {
    constructor (protected readonly firstName: string, protected readonly lastName: string) {

    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

export class Student extends Common {
    constructor (firstNames: string, lastNames: string) {
        super(firstNames, lastNames);
    }

    name() {
        return this.fullName();
    }
}

const student = new Student('Raj', 'Dutta');
// console.log(student);


export function binarySearch(arr: number[], search: any): number {
    let start = 1;
    let end = arr.length - 1;
    let middle = Math.floor((end + start) / 2);

    while (start < middle) {
        if (arr[middle] === search) {
            return middle;
        }

        if ( arr[middle] > search ) {
            end = middle - 1;
        }

        if (arr[middle] < search) {
            start = middle + 1;
        }
        middle = Math.floor((end + start) / 2);
    }

    return arr[middle] === search ? middle : -1;
}

let arr = [1, 3, 5, 7, 8, 9, 10, 12, 17, 20, 32];

const foundNum = binarySearch(arr, 10);

export function bubbleSort(arr: any[]): any[] {
    let i = 0;
    let temp = 0;
    while (i < arr.length) {
        temp = 0;

        while (temp < arr.length) {
            if ( arr[temp + 1] !== undefined ) {
                if ( arr[temp] > arr[temp + 1] ) {
                    [arr[temp], arr[temp + 1]] = [arr[temp + 1], arr[temp]];
                }
            }
            temp++;
        }
        i++;
    }
    
    return arr;
}

// const arr2 = [10,25,8,3,5,2,6,9, 25];
const arr2 = ['z', 'u', 'i', 'j', 'k', 'l', 'm', 'd', 'c', 'b', 'a'];
const val1 = bubbleSort(arr2);

console.log('val1', val1);