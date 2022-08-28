
function reverseString(str) {
    const splited = str.split('');
    let ans = '';

    for ( let i = splited.length - 1; i >= 0; i-- ) {
        ans += str[i];
    }
    return ans;
}

const value = reverseString('hello world!');

console.log(value);