'use strict';

function countDivs(html) {
    var index,
        count = 0;

    while(index !== -1) {
        index++;
        index = html.indexOf('<div', index);
        count += (index !== -1) ? 1 : 0;
    }

    return count;
}

console.log(countDivs('<!DOCTYPE html><html><head lang="en">' +
'<meta charset="UTF-8"><title>index</title><script src="/yourScript.js" defer></script>' +
'</head><body><div id="outerDiv"><div class="first"><div><div>hello</div></div></div>' +
'<div>hi<div></div></div><div>I am a div</div></div></body></html>'));