// LIST Data Structure.

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;

    // This methods helps us to find the passed param value is in the dataStore or not.
    function contains(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return true;
            }
        }

        return false;
    }

    // this length method returns the length of dataStore.
    function length() {
        return this.listSize;
    }

    // this method going to return the data based on the position.
    function getElement() {
        return this.dataStore[this.pos];
    }

    // This moveTo method sets the position to the passed param value.
    function moveTo(position) {
        this.pos = position;
    }

    // this append() method going to use for add one element to the end.
    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

    // toString() method simply going to return the dataStore itself.
    function toString() {
        return this.dataStore;
    }

    // remove() method going to use for removing an element from the dataStore.
    function remove(element) {
        var foundAt = this.find(element);

        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }

        return false;
    }

    // clear() method going to remove all the items from the main dataStore.
    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    // This find() method going to take a param and look for it in dataStore, if it able to find then it would return the index of that element otherwise it would return -1.
    function find(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }

        return -1;
    }

    // This insert() method going to add element after of the element which we provide as the second parameter, if the second params doesn't exist then it would return false.
    function insert(element, after) {
        var insertPos = this.find(after);

        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }

    // front() method going to set position to the first (0).
    function front() {
        this.pos = 0;
    }

    // end() method going to set the current position to the end of dataStore.
    function end() {
        this.pos = this.listSize - 1;
    }

    // this prev() method going to set the current position to -1 if we are not already in the first place.
    function prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }

    // this next() method going to set the current position to next element index if we are not already at the end.
    function next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }

    // this currPos() method simply returns the current position.
    function currPos() {
        return this.pos;
    }
}

const names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.moveTo(2);
names.front();
console.log(names.getElement());