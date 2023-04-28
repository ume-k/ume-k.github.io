function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (seconds % 3 === 0 || seconds.toString().indexOf('3') !== -1) {
        document.getElementById("seconds").classList.add("blue");
    } else {
        document.getElementById("seconds").classList.remove("blue");
    }
    if (minutes % 3 === 0 || minutes.toString().indexOf('3') !== -1) {
        document.getElementById("minutes").classList.add("blue");
    } else {
        document.getElementById("minutes").classList.remove("blue");
    }
    if (hours % 3 === 0 || hours.toString().indexOf('3') !== -1) {
        document.getElementById("hours").classList.add("blue");
    } else {
        document.getElementById("hours").classList.remove("blue");
    }
}
updateClock();
setInterval(updateClock, 1000);