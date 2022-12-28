// Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays. The subarray from which this sum comes must contains at least 1 element.

// For 'inputArray = [4, -1, 2, -7, 3, 4]', the output should be 'arrayMaxConsecutiveSum2(inputArray) = 7'.

function arrayMaxConsecutiveSum2(arr: number[]): number {
    let max = 0;
    let temp = 0;

    for (let i = 0; i < arr.length; i++) {
        temp += arr[i];

        temp = Math.max(temp, 0);

        max = Math.max(max, temp);

    }

    return max;
}

const values = arrayMaxConsecutiveSum2([4, -1, 2, -7, 3, 4]);

console.log('main result', values);