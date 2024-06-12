const input_value = document.getElementById("input_value");
const addTodoButton = document.getElementById("add_task");
const displayItems = document.querySelector(".task_list_content");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

renderTodo();

addTodoButton.addEventListener("click", addTodo);

function renderTodo() {
  let todoListHtml = "";

  todoList.forEach((value, index) => {
    const html = `<div class="option "><label><form name="input_form"><input type="checkbox"  onclick="makeStrikeLine(${index})" /></form> <span class="bubble"></span></label></div><input type="text" value="${value}" class="input_value"  onkeydown="if(event.key==='Enter'){
      updateTodoList(${index});
    }" disabled/><button id="edit_btn" onclick="editInput(${index})" >Edit</button><button id="delete_btn" onclick="
      todoList.splice(${index},1);
      saveTodoList();
      renderTodo();
    " >Delete</button>`;
    todoListHtml += html;
  });
  displayItems.innerHTML = todoListHtml;
}

function addTodo() {
  const inputValue = input_value.value;
  if (inputValue === "") {
    document.querySelector(".input_content input").style.borderColor = "red";
    document.querySelector(".hide").style.display = "block";
  } else {
    document.querySelector(".input_content input").style.borderColor = "";
    document.querySelector(".hide").style.display = "none";
    todoList.push(inputValue);
    saveTodoList();
    renderTodo();
    input_value.value = "";
  }
}
const editableInput = document.querySelectorAll(".input_value");
console.log(editableInput);
function editInput(index) {
  const editableInput = document.querySelectorAll(".input_value")[index];
  editableInput.disabled = false;
  editableInput.focus();
}

// function updateTodoList(index) {
//   const editableInput = document.querySelectorAll(".input_value")[index];
//   const newInput = editableInput.value;
//   todoList[index] = newInput;
//   editableInput.disabled = true;
//   saveTodoList();
//   renderTodo();
// }

function makeStrikeLine(index) {
  const checkBox = document.querySelectorAll("input[type='checkBox'");

  const input_value = document.querySelectorAll(".input_value")[index];
  if (checkBox[index].checked) {
    input_value.style.textDecoration = "line-through";
  } else {
    input_value.style.textDecoration = "";
  }
}

function saveTodoList() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
