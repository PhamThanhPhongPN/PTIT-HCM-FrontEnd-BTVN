const defaultTasks = [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci ớt ớt',
    },
];

let tasks = JSON.parse(localStorage.getItem("tasks")) || defaultTasks;

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        list.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${task.content}</td>
          <td>${task.dueDate}</td>
          <td>${task.status}</td>
          <td>${task.assignedTo}</td>
          <td>
            <button class="btn btn-sm btn-warning me-1" onclick="editTask(${task.id})">Sửa</button>
            <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">Xoá</button>
          </td>
        </tr>
      `;
    });
}

document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("taskId").value;
    const content = document.getElementById("content").value;
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;
    const assignedTo = document.getElementById("assignedTo").value;

    if (id) {
        const index = tasks.findIndex(t => t.id == id);
        tasks[index] = { id: +id, content, dueDate, status, assignedTo };
    } else {
        const newId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
        tasks.push({ id: newId, content, dueDate, status, assignedTo });
    }

    saveTasks();
    renderTasks();
    this.reset();
    document.getElementById("taskId").value = "";
});

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById("taskId").value = task.id;
    document.getElementById("content").value = task.content;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("status").value = task.status;
    document.getElementById("assignedTo").value = task.assignedTo;
}

function deleteTask(id) {
    if (confirm("Bạn có chắc chắn muốn xoá không?")) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
    }
}

renderTasks();