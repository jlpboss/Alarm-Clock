const clock = document.querySelector(".clock");
const test = document.querySelector(".test");
const alarmTime = document.getElementById("alarmTime");
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

function alarm(act){
    if (act == "play"){
        alarmSound.play();
    }else if (act == "pause"){
        alarmSound.pause();
    }
}

function isAlarm(){
    let today = new Date();
    let hou = addZero(today.getHours());
    let min = addZero(today.getMinutes());
    let time = hou + ":" + min;

    if (alarmTime.value == time) {
        if (today.getSeconds() < 2){
            alarm("play");
        }
    }

}

function update(){
    updateTime();
    isAlarm();
}

updateTime();
setInterval(update, 1000);

