// Linear Search

function linearSearch(arr: any[], num: any) {
    let ans = -1;

    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] === num) {
            ans = i;
        }
    }

    return ans;
}

const array = [1, 6, 74, 4, 3, 2, 10, 58, 30];

const result = linearSearch(array, 30);

console.log('linear Search Algorithms ', result);