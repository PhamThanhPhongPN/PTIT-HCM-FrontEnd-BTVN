let todoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false,
    },
    {
        id: 6,
        task: 'Organize office',
        completed: false,
    }
];

const ul = document.getElementById("myUL");

function renderTask(todo) {
  const li = document.createElement("li");
  if (todo.completed) li.classList.add("checked");
  li.textContent = todo.task;

  const closeBtn = document.createElement("span");
  closeBtn.className = "close";
  closeBtn.textContent = " X";

  li.appendChild(closeBtn);
  ul.appendChild(li);
}

todoList.forEach(renderTask);

function addTodo() {
  const input = document.getElementById("myInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const newTask = {
    id: todoList.length + 1,
    task: taskText,
    completed: false
  };

  todoList.push(newTask);
  renderTask(newTask);
  input.value = "";
}