let clockdiv = document.getElementById('clock');
function showTime(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    clockdiv.textContent = hours + ':' + minutes + ':' + seconds;
}
setInterval(showTime,1000);
showTime();

if(minutes < 10){
    minutes = '0' + minutes
} 
if(seconds < 10){
    seconds = '0' + seconds
} 
if(hours < 10){
    hours = '0' + hours
} 

