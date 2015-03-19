'use strict';

function calcCylinderVol(arr) {
    var r = arr[0];
    var height = arr[1];
    console.log((Math.PI * Math.pow(r, 2) * height).toFixed(3));
}

calcCylinderVol([2, 4]);
console.log();
calcCylinderVol([5, 8]);
console.log();
calcCylinderVol([12, 3]);
