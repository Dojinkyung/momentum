const todayDate=document.getElementById("todayDate");
const clock=document.getElementById("clock");
const DAY=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function time(){
    const date=new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const year = String(date.getFullYear()).padStart(2, "0");
    const month = String(date.getMonth()).padStart(2, "0");
    const d= String(date.getDate()).padStart(2, "0");
    const day=DAY[date.getDay()];
    todayDate.innerText = `${year}/${month}/${d} ${day}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(time,1000);