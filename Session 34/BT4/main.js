const taskInput = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("todos")) || [];

function saveTasks() {
  localStorage.setItem("todos", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">Xóa</button>
    `;
    taskList.appendChild(div);
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = "";
    saveTasks();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

addBtn.addEventListener("click", addTask);
window.addEventListener("load", renderTasks);
