'use strict';

function calculate() {
    var expression = document.getElementById('expression').value;
    var result = document.getElementById('result');
    if(expression !== '') {
        result.innerHTML = eval(expression);
    }
    else {
        result.innerHTML = '&nbsp';
    }
}