const textarea = document.querySelector("textarea");

const addbtn = document.getElementById("addBtn");

const todoContainer =document.querySelector(".todo-container");


let todoList =[];

function onInit(){
    if(!localStorage.getItem('todo'))
        return ;
    todoList= JSON.parse(localStorage.getItem('todo')).todoList
    updateUI();
}

onInit();

function addTodo(){
    const todo =textarea.value
    if (!todo)
        return;
    todoList.push(todo);
    updateUI();
    textarea.value="";
}

function editTodo(index){
    textarea.value = todoList[index];
    todoList= todoList.filter((todo,todoIndex)=>{
        if(index === todoIndex)
            return false;
        return true;
    });
    updateUI();
}

function deleteTodo(index){
    todoList=todoList.filter((todo,todoIndex)=>{
        if(index=== todoIndex)
            return false;
        return true;
    })
    updateUI();
}



function updateUI(){
    let newInnerHtml= '';
    todoList.forEach((todoElement,todoIndex)=>{

        newInnerHtml += ` <div class="todo">
                    <p>${todoElement}</p>
                    <div class="btnContainer">
                        <button class="iconbtn" onclick="editTodo(${todoIndex})">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button class="iconbtn" onclick="deleteTodo(${todoIndex})">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>  `
    })
    todoContainer.innerHTML =newInnerHtml;

    //saving to localstorage
    localStorage.setItem('todo',JSON.stringify({todoList}))

}

addbtn.addEventListener('click', addTodo);