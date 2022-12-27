
function selectionSort(arr: number[]): number[] {
    let sortFirstPointer: number | undefined;
    let minIndex: number | undefined = undefined;
    let temp: number | undefined;

    for (let i = 0; i < arr.length; i++) {
        sortFirstPointer = arr[i];
        temp = undefined;

        for (let z = i + 1; z < arr.length; z++) {
            temp =  (temp === undefined) ? (z - 1) : temp ;
        
            if (arr[temp] > arr[z]) {
                minIndex = z;
                temp = z;
            }
        }

        if (typeof minIndex === 'number') {
            arr[i] = arr[minIndex];
            arr[minIndex] = sortFirstPointer;
        }
        
        minIndex = undefined;
        sortFirstPointer = undefined;
    }

    return arr;
}

const arr = [20, 30, 4, 5, 1, 8, 7, 2, 3, 5, 20, 50, 29, 30, 27, 25, 45, 38,31,36,32, 35];
// const arr = [1,2,3,4,5,6,7,8,9];
const res: number[] = selectionSort(arr);
console.clear();
console.log(res);