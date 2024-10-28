let todoList = [
  {
    item :  "Buy milk",
    dueDate:  "29-10-2024",

  }
];
displayTodos();
function addTodo(){
  let todoElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoText = todoElement.value;
  let todoDate = dateElement.value;
  if(todoText != "" && todoDate!=""){
    todoList.push({item: todoText, dueDate: todoDate});
    todoElement.value = '';
    dateElement.value = '';
  }
  else{
    alert("Please enter a todo item and date");
  }
  displayTodos();
};
function  displayTodos(){
  let containerElement = document.querySelector(".todo-container");
  let newitem = '';
  for(let i = 0; i < todoList.length; i++){
    // let item =  todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let {item,dueDate} =  todoList[i];
    newitem += `
    <span>${item}</span>
    <span>${dueDate}</span>
     <button class="delete-button" onclick="todoList.splice(${i},1)> displayTodos()">Delete</button>`
    }
    containerElement.innerHTML =newitem;
};


 