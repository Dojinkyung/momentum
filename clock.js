const todayDate=document.getElementById("todayDate");
const clock=document.getElementById("clock");
const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function time(){
    const data=new Date();
    todayDate.innerText=`${data.getFullYear()}/${data.getMonth()}/${data.getDate()}-${day[data.getDay()]}`;
    clock.innerText=`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
}

setInterval(time,1000);