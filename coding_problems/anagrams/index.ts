
// 'rail safety' -> 'fairy tales'
// RAIL! -> 'fairy tales'
// Hi there -> Bye there
interface IProp {
    [key: string]: any;
}
function anagram(str1: string, str2: string) {
    const arrStr1: string[] = str1.toLowerCase().split('');
    const arrStr2: string[] = str2.toLowerCase().split('');
    const obj1 = {} as IProp;
    const obj2 = {} as IProp;
    let ans = true;
    // How to remove space and special charecters from a string, here is a regex
    // /[^\w]/g
    for (let i = 0; i < arrStr1.length; i++) {
        if (arrStr1[i] == '!') {
            arrStr1.splice(i, 1);
        }
        if (arrStr1[i] === ' ') {
            arrStr1.splice(i, 1);
        }
        
        obj1[arrStr1[i]] = obj1[arrStr1[i]] !== undefined ? obj1[arrStr1[i]] + 1 : 1;
    }

    for (let i = 0; i < arrStr2.length; i++) {
        if (arrStr2[i] == '!') {
            arrStr2.splice(i, 1);
        }
        if (arrStr2[i] === ' ') {
            arrStr2.splice(i, 1);
        }
        
        obj2[arrStr2[i]] = obj2[arrStr2[i]] !== undefined ? obj2[arrStr2[i]] + 1 : 1;
    }

    if ( Object.keys(obj1).length === Object.keys(obj2).length ) {
        for (const key in obj1) {
            if (obj1[key] === obj2[key]) {
                ans = true;
            } else {
                ans = false;
                break;
            }
        }
    } else {
        ans = false;
    }

    return ans;
}

const value1 = anagram('rail safety', 'fairy tales');
const value2 = anagram('RAIL! SAFETY','fairy tales');
const value3 = anagram('Hi there', 'Bye there');

console.log(`Value1 is ${value1}, value2 is ${value2} and value3 is ${value3}`);