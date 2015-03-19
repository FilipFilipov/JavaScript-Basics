'use strict';

function manipulateArray(arr) {
    var min=Number.MAX_VALUE,
        max=Number.MIN_VALUE,
        mostFreq,
        frequencies = [];

    arr = arr.filter(isANumber).sort(descending);

    function isANumber(element) {
        return !isNaN(element);
    }
    function descending (a, b) {
        return a < b;
    }

    for(var num in arr) {
        min = Math.min(min, arr[num]);
        max = Math.max(max, arr[num]);
        if(arr[num] in frequencies) {
            frequencies[arr[num]]++;
        }
        else {
            frequencies[arr[num]] = 1;
        }
    }
    frequencies = frequencies.filter(isNotEmpty).sort(descending);

    function isNotEmpty(element) {
        return element !== undefined;
    }

    console.log('Min number: ' + min + '\nMax number: ' + max +
    '\nMost frequent number: ' + frequencies[0] + '\n' + arr);
}

manipulateArray(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);