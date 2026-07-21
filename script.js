const wedding = new Date("2027-07-17T15:00:00");

function updateTimer() {

const now = new Date();

const diff = wedding - now;

const days = Math.floor(diff / 1000 / 60 / 60 / 24);

const hours = Math.floor(diff / 1000 / 60 / 60) % 24;

const minutes = Math.floor(diff / 1000 / 60) % 60;

const seconds = Math.floor(diff / 1000) % 60;

document.getElementById("days").innerText = days;

document.getElementById("hours").innerText = hours;

document.getElementById("minutes").innerText = minutes;

document.getElementById("seconds").innerText = seconds;

}

setInterval(updateTimer,1000);

updateTimer();



const scriptURL="https://script.google.com/macros/s/AKfycbzF4Fy9ozeVlnaaTVHCXFNgw3-yYoywLj7O0WdywjCT2Nld7jUH0aqJH5ybZVv29G_T/exec";



document.getElementById("form").addEventListener("submit", async function(e){

e.preventDefault();

const alcohol=[];

document.querySelectorAll(".checks input:checked").forEach(item=>{

alcohol.push(item.value);

});

const data={

firstName:document.getElementById("firstName").value,

lastName:document.getElementById("lastName").value,

phone:document.getElementById("phone").value,

attending:document.getElementById("attending").value,

food:document.getElementById("food").value,

alcohol:alcohol,

transfer:document.getElementById("transfer").value,

children:document.getElementById("children").value,

music:document.getElementById("music").value,

comment:document.getElementById("comment").value

};

try{

await fetch(scriptURL,{

method:"POST",

body:JSON.stringify(data)

});

document.getElementById("success").innerHTML="❤️ Спасибо! Ваш ответ получен.";

document.getElementById("form").reset();

}catch{

document.getElementById("success").innerHTML="Ошибка отправки.";

}

});