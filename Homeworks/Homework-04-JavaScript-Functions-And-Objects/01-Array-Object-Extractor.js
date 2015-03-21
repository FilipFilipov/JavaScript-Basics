'use strict';

function extractObjects(array) {
    var objArr = [],
        element;

    for(element in array) {
        if(typeof array[element] === 'object' && !Array.isArray(array[element])) {
            objArr.push(array[element]);
        }
    }
    return objArr;
}

console.log(extractObjects([
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
]));