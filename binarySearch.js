// Binary Search

function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== num && start <= end) {
        if (arr[middle] > num) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === num ? middle : -1;
}

const array = [0, 4, 6, 8, 11, 13, 14, 16, 20, 21, 22, 25, 26, 30, 35, 38];

const result = binarySearch(array, 38);

console.log('Binary Search ', result);