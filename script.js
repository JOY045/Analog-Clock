function rotateClockHands() {
    var time = new Date(),
        second = (time.getSeconds() / 60) * 360,
        minute = ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360,
        hour = ((time.getHours() % 12 + time.getMinutes() / 60) / 12) * 360;

    document.getElementById("sec-hand").style.transform = `rotate(${second}deg)`;
    document.getElementById("min-hand").style.transform = `rotate(${minute}deg)`;
    document.getElementById("hr-hand").style.transform = `rotate(${hour}deg)`;
}

setInterval(rotateClockHands, 1000);
rotateClockHands();
