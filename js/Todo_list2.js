const userTask = document.getElementById("todo_input_value");
const add_button = document.getElementById("Add_todo");
const errorMessage = document.getElementById("errorMessage");
const clear_button = document.getElementById("clear_btn");
const tod_List_outPut = document.querySelector(".task_box");
const filters = document.querySelectorAll(".filters span");

let todoList = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : [];
showTodo("all");
add_button.addEventListener("click", addTodo);

clear_button.addEventListener("click", () => {
  todoList.splice(0, todoList.length);
  saveTodoList();
  showTodo("all");
});

filters.forEach((span) => {
  span.addEventListener("click", () => {
    document.querySelector("span.active").classList.remove("active");
    span.classList.add("active");
    showTodo(span.id);
  });
});

function showTodo(filters) {
  let todListHtml = "";
  const reverseTodoList = [...todoList].reverse();

  reverseTodoList.forEach((taskName, index) => {
    let isCompleted = taskName.statues == "completed" ? "checked" : "";
    if (filters == taskName.statues || filters == "all") {
      todListHtml += ` <ul class="task">
                            <li>
                            <label for="${index}">
                                <input type="checkbox" id="${index}" onclick="updateStatue(this)" ${isCompleted}/>
                                <span class="bubble"></span>
                                <input type="text" name="value" value="${taskName.name}" class="${isCompleted} input_value" onkeydown="if(event.key==='Enter'){
                                  editSubmit(${index})}
                                  " disabled/>
                            </label>
                            <div class="action">
                                <button id="edit_btn" onclick="editStatue(${index})">Edit</button>
                                <button id="delete_btn" onclick="deleteStatue(this)">Delete</button>
                            </div>
                            </li>
                        </ul>`;
    }
  });
  tod_List_outPut.innerHTML =
    todListHtml || `<span>You don't have any task</span>`;
}

function addTodo(filter) {
  const inputValue = userTask.value;
  if (inputValue === "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "";
    let taskInfo = {
      name: inputValue,
      statues: "pending",
    };
    todoList.push(taskInfo);
    saveTodoList();
    userTask.value = "";
    showTodo("all");
  }
}

function updateStatue(selectedTask) {
  let lineTHroughElement = selectedTask.parentElement.lastElementChild;
  console.log(lineTHroughElement);
  if (selectedTask.checked) {
    lineTHroughElement.classList.add("checked");
    todoList[selectedTask.id].statues = "completed";
  } else {
    lineTHroughElement.classList.remove("checked");
    todoList[selectedTask.id].statues = "pending";
  }
  saveTodoList();
}

function deleteStatue(deleteTask) {
  todoList.splice(deleteTask, 1);
  saveTodoList();
  showTodo("all");
}

function editStatue(editId) {
  const editableInput = document.querySelectorAll(".input_value")[editId];
  editableInput.disabled = false;
  editableInput.focus();
}

function editSubmit(index) {
  const editableInput = document.querySelectorAll(".input_value")[index];
  const newInput = editableInput.value;
  todoList[index].name = newInput;
  editableInput.disabled = true;
  saveTodoList();
  showTodo("all");
}

function saveTodoList() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
