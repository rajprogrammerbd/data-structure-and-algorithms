console.clear();

// SelectionSort
function selectSort(arr: number[]): number[] {
    let current: number, lowest: number | undefined;

    for (let i = 0; i < arr.length; i++) {
        current = i;

        for (let z = i; z < arr.length; z++) {
            if (arr[z] < arr[current]) {
                // only then we can store the lowest value
                if (lowest === undefined) {
                    lowest = z;
                } else {
                    if (arr[lowest] > arr[z]) {
                        lowest = z;
                    }
                }
            }
        }

        if (lowest !== undefined) {
            [arr[current], arr[lowest]] = [arr[lowest], arr[current]];
        }

        lowest = undefined;
    }

    return arr;
}

const selectSorted = selectSort([20, 30, 4, 5, 1, 8, 7, 2, 3, 5, 20, 50, 29, 30, 27, 25, 45, 38,31,36,32, 35]);

console.log('main result', selectSorted);