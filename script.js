var hr = 0;
var min = 0;
var count = 0;
var sec = 0;
var timmer = false;

function start() {
    timmer = true;
    stopwatch();
}

function stop() {
    timmer = false;
}

function reset() {
    timmer = false;
    count = 0;
    sec = 0;
    hr = 0;
    min = 0;

    document.getElementById("micsec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
}

function stopwatch() {
    if (timmer == true) {
        count = count + 1;
        setTimeout(stopwatch, 10);
    }
    if (count == 100) {
        sec = sec + 1;
        count = 0;
    }
    if (sec == 60) {
        min = min + 1;
        sec = 0;
    }
    if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;
    }

    var hourString = hr < 10 ? "0" + hr : hr;
    var minString = min < 10 ? "0" + min : min;
    var secString = sec < 10 ? "0" + sec : sec;
    var countString = count < 10 ? "0" + count : count;

    document.getElementById("micsec").innerHTML = countString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("hr").innerHTML = hourString;
    document.getElementById("min").innerHTML = minString;
}
