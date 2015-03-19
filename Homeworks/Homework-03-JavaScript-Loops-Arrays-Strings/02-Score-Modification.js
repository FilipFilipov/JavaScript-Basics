'use strict';

function modifyScore(arr) {
    var scoreArr = [];

    scoreArr = arr.filter(isValid).map(scaleDown).sort(ascend);

    function isValid(element) {
        return (element > 0) && (element < 400);
    }
    function scaleDown(element) {
        return element * 0.8;
    }
    function ascend(a, b) {
        return a > b;
    }

    for(var num in scoreArr) {
        if(scoreArr[num] % 1 !== 0) {
            scoreArr[num] = Number(scoreArr[num].toFixed(1));
        }
    }

    console.log(scoreArr);
}

modifyScore([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);