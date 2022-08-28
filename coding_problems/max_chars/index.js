
function maxChar(str) {
    const obj = {};
    let max;

    for (let i = 0; i < str.split('').length; i++) {
        obj[str[i]] = obj[str[i]] !== undefined ? obj[str[i]] + 1 : 1;
    }

    for ( const key in obj ) {
        if (max === undefined) {
            max = key;
        } else {
            if ( obj[key] > obj[max] ) {
                max = key;
            }
        }
    }
    
    return max;
}

const value = maxChar('abcaaaac');
console.log('value ', value);