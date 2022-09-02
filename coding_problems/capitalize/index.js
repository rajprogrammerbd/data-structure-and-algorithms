
function capitatize(str) {
    return str.split(' ').map((word) => {
        const start = word[0].toUpperCase();
        const rest = word.slice(1).toLowerCase();
        return start + rest;
    }).join(' ');
}

const value = capitatize('Look, it is working!');
console.log('value ', value);