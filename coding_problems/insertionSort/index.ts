console.clear();

function insertionSort(arr: number[]): number[] {
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

const insertionSorted = insertionSort([20, 30, 4, 5, 1, 8, 7, 2, 3, 5, 20, 50, 29, 30, 27, 25, 45, 38,31,36,32, 35]);

console.log('main value ', insertionSorted);