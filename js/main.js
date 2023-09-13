const clock = document.querySelector('.clock');

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





setInterval(updateTime, 1000);

