'use strict';

function validate() {
    var content = document.getElementsByName('email')[0].value;
    var pattern = /^\w+@\w+\.\w{2,3}$/;
    var result = document.getElementsByTagName('div')[0];
    result.innerHTML = content === '' ? '&nbsp' : content;
    result.style.background = pattern.test(content) ? '#95ef95' : 'red';
}