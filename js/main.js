const clock = document.querySelector(".clock");
const alarmTime = document.querySelector(".alarmTime");
const alarmSound = document.getElementById("sound");

function addZero(num){
    if (num < 10){
        return "0" + num;
    } else {
        return num;
    }
}

function updateTime(){
    let today = new Date();
    
    let min = addZero(today.getMinutes());
    let sec = addZero(today.getSeconds());
    let time = "";
    let hou = "";

    if(document.getElementById("12").checked){
        if (today.getHours() > 12){
            hou = addZero(today.getHours() - 12);
            time = hou + ":" + min + ":" + sec + " PM";
        }else {
            hou = addZero(today.getHours());
            time = hou + ":" + min + ":" + sec + " AM";
        }
    } else{
        hou = addZero(today.getHours());
        time = hou + ":" + min + ":" + sec;
    }
    clock.textContent = time;
}

function alarm(){
    alarmSound.play();
}

function isAlarm(){
    let today = new Date();
    let hou = addZero(today.getHours());
    let min = addZero(today.getMinutes());
    let time = hou + ":" + min;
    
    if (alarmTime == time) {
        alarm();
    }

}



setInterval(updateTime, 1000);
setInterval(isAlarm, 1000);

