
const loginForm=document.querySelector("#login_form");
const loginInput=document.querySelector("#login_form input");
const greeting=document.getElementById("greeting");

const CLASSNAME_HIDDEN="hidden";
const USERNAME_KEY="userName";

function showGreeting(userName){
    greeting.innerText=`Hello ${userName}! `;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

function submitLogin(event){  
    event.preventDefault();
    const userName=loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    showGreeting(userName);
    loginForm.classList.add(CLASSNAME_HIDDEN);
}

if(localStorage.getItem(USERNAME_KEY)!==null){
    loginForm.classList.add(CLASSNAME_HIDDEN);
    showGreeting(localStorage.getItem(USERNAME_KEY));
}
else{
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit",submitLogin);
}
