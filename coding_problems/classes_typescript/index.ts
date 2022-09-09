
class Account {
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

class Count {
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

class Common {
    constructor (protected readonly firstName: string, protected readonly lastName: string) {

    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Student extends Common {
    constructor (firstNames: string, lastNames: string) {
        super(firstNames, lastNames);
    }

    name() {
        return this.fullName();
    }
}

const student = new Student('Raj', 'Dutta');
console.log(student);