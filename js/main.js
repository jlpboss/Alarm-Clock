const clock = document.querySelector('.clock');

var today = new Date();
var min = "";
if (today.getMinutes() < 10){
    min = "0" + today.getMinutes();
} else {
    min = today.getMinutes();
}
var sec = "";
if (today.getSeconds() < 10){
    sec = "0" + today.getSeconds();
} else {
    sec = today.getSeconds();
}
var time = today.getHours() + ":" + min + ":" + sec;

clock.textContent = time;