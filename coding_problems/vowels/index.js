
function Vowels(str) {
    const res =  str.split('').reduce((num, str) => {
        const txt = str.toLowerCase();
        if (txt === 'a' || txt === 'e' || txt === 'i' || txt === 'o' || txt === 'u') {
            num++;
        }

        return num;
    }, 0);
    return res;
}

const t = Vowels('Hi There!');
console.log('t', t);