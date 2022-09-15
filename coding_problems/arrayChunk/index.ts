export function arrayChunk(array: any[], size: number) {
    const main = [];
    const loopCount = Math.ceil(array.length / size);

    for (let i = 0; i < loopCount; i++) {
        const resu = array.splice(0, size);
        if (resu.length !== 0) {
            main.push(resu);
        }
    }
    return main;
}

const v = arrayChunk([1, 2, 3, 4, 5], 2);
console.log('value1', v);