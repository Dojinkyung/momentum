const toDoForm=document.querySelector("#toDo_form");
const toDoInput=document.querySelector("#toDo_form input");
const todoList=document.querySelector("#todo_list");
let TODOs=[];
const TODO_KEY="TODO"
function deleteTodo(event){
    const target=event.target.parentElement;
    TODOs=TODOs.filter((todo)=> todo.id!==parseInt(target.id));
    // localStorage.removeItem(TODO_KEY,target);
    target.remove();
    saveTodo();
}
function saveTodo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(TODOs));
}
function createTodoList(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    const button=document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    button.innerText="❌";
    button.addEventListener("click",deleteTodo);
    span.innerText=newTodo.text;
    todoList.appendChild(li);
}

function submitTodo(event){  
    event.preventDefault();
    const toDo=toDoInput.value;
    toDoInput.value=""
    const newtoDoObj={
        text:toDo,
        id:Date.now(),
    };
    TODOs.push(newtoDoObj);
    createTodoList(newtoDoObj);
    localStorage.setItem(TODO_KEY,JSON.stringify(TODOs));
}

toDoForm.addEventListener("submit",submitTodo);

if (localStorage.getItem(TODO_KEY)){
    const savedTODOS=JSON.parse(localStorage.getItem(TODO_KEY));
    TODOs=savedTODOS;
    savedTODOS.forEach(createTodoList);
}