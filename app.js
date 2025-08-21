let clockdiv = document.getElementById('clock');

function showTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Oldida 0 qo'shish
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    clockdiv.textContent = hours + ':' + minutes + ':' + seconds;
}

setInterval(showTime, 1000);
showTime();