const wedding = new Date("2027-07-17T15:00:00");

function updateTimer(){

const now=new Date();

const diff=wedding-now;

const days=Math.floor(diff/1000/60/60/24);

const hours=Math.floor(diff/1000/60/60)%24;

const minutes=Math.floor(diff/1000/60)%60;

const seconds=Math.floor(diff/1000)%60;

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

setInterval(updateTimer,1000);

updateTimer();

document.getElementById("form").onsubmit=function(e){

e.preventDefault();

document.getElementById("success").innerHTML="Спасибо! Ваш ответ получен ❤️";

this.reset();

}