
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

function reverseInt(num) { // O(n)
    const isPositive = num > 0 ? true : false;
    let str;
    
    if (isPositive) {
        str = num.toString();
    } else {
        str = num.toString().slice(1);
    }

    let main = '';
    if (str.length === 1) {
        return isPositive ? parseInt(str) : parseInt(`-${str}`);
    } else {
        for ( let i = str.length - 1; i >= 0; i-- ) {
            main += str[i];
        }
        
        if (!isPositive) {
            main = '-' + main;
        }

        return parseInt(main); 
    }
}

const s = reverseInt(256);
console.log(s);