console.clear();

function bubbleSort(arr: number[]): number[] {
    let current: number | undefined, next: number | undefined;

    for (let i = arr.length - 1; i >= 0; i--) {

        for (let z = 0; z < i; z++) {
            current = arr[z];
            next = arr[z + 1];

            if (current > next) {
                [arr[z], arr[z + 1]] = [arr[z + 1], arr[z]];
            }
        }
    }

    return arr;
}

const bubbleSorted = bubbleSort([100, 77, 98, 25, 50, 16, 10, 9, 8, 7, 6, 4, 5, 3, 2, 1, 0]);

console.log('main result ', bubbleSorted);