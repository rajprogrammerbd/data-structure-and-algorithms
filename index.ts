/*
function binarySearchRecursive (arr, x, low = 0, high = arr.length - 1) {
    const mid = Math.floor((low + high) / 2);

    if (high >= low) {
      if (arr[mid] === x) {
        // item found => return its index
        return mid
      }
  
      if (x < arr[mid]) {
        // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
        return binarySearchRecursive(arr, x, low, mid - 1)
      } else {
        // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
        return binarySearchRecursive(arr, x, mid + 1, high)
      }
    } else {
      // if low > high => we have searched the whole array without finding the item
      return -1
    }
};

const arr = [1, 5, 6, 7, 8, 9, 10, 12, 15];
const val = binarySearchRecursive(arr, 15);

console.log('value ', val, arr[val]);
*/

function binarySearch(arr: any[], x: any, low = 0, high = arr.length - 1): any {
    const mid = Math.floor((low + high) / 2);

    if (high >= low) {
        if (arr[mid] === x) {
            return mid;
        }

        if (x < arr[mid]) {
            return binarySearch(arr, x, low, mid - 1);
        }
    } else {
        return -1;
    }
}

export default binarySearch;