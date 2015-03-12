'use strict';

function setTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var seconds = time.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds;
}
setInterval(setTime, 1000);