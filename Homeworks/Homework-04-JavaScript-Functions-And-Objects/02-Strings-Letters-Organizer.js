'use strict';

function sortLetters(string, boolean) {
    var chars = string.split('');

    if(boolean) {
        chars.sort(ascending);
    }
    else {
        chars.sort(descending);
    }

    function ascending (a, b) {
        return a.toLowerCase() > b.toLowerCase();
    }
    function descending (a, b) {
        return a.toLowerCase() < b.toLowerCase();
    }

    return chars.join('');
}

console.log(sortLetters('HelloWorld', true));
console.log(sortLetters('HelloWorld', false));