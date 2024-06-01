let tdate;
let timeInterval;
let running=false;
function startCount() {
    if(!running){
    const DateInp = document.getElementById('DateInp').value;
    tdate = new Date(DateInp);
    // console.log(tdate);
    countDownTimer();
    timeInterval=setInterval(countDownTimer,1000);
    document.querySelector('button').innerHTML='Stop';
   }
   
else{
    clearInterval(timeInterval);
    document.querySelector('button').innerHTML='Start';
    }
    running=!running;
}
function resetCount() {
    clearInterval(timeInterval);
    document.getElementById("Days").innerHTML = '00';
    document.getElementById("Hours").innerHTML = '00';
    document.getElementById("Minutes").innerHTML = '00';
    document.getElementById("Seconds").innerHTML = '00';
    document.querySelector('button').innerHTML='Start';
    document.getElementById('DateInp').value = '';

    running=!running;
}


function countDownTimer(){
    let curr = new Date();
    const ts = Math.floor((tdate - curr) / 1000);

    const days = Math.floor(ts / 3600 / 24);

    const hrs = Math.floor(ts / 3600) % 24;

    const mins = Math.floor(ts / 60) % 60;

    const sec = Math.floor(ts) % 60;

    document.getElementById("Days").innerHTML = days < 10 ? '0' + days : days;
    document.getElementById("Hours").innerHTML = hrs < 10 ? '0' + hrs : hrs;
    document.getElementById("Minutes").innerHTML= mins < 10 ? '0' + mins : mins;
    document.getElementById("Seconds").innerHTML = sec < 10 ? '0' + sec : sec;
}


