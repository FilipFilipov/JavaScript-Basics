'use strict';

function calcQuad(a, b, c) {
    var discriminant = Math.pow(b, 2) - 4 * a *c;
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    if (discriminant < 0) {
        console.log('No real roots.');
    }
    else if (discriminant === 0) {
        console.log('X = ' + x1);
    }
    else {
        console.log('X1 = ' + x1 + '\nX2 = ' + x2);
    }
}

calcQuad(2, 5, -3);
console.log('');
calcQuad(2, -4, 2);
console.log('');
calcQuad(4, 2, 1);