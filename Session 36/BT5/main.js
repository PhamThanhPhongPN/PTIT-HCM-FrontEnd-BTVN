if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify([]));
}

function renderTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const pendingEl = document.getElementById("pendingTasks");
    const inProgressEl = document.getElementById("inProgressTasks");
    const doneEl = document.getElementById("doneTasks");

    pendingEl.innerHTML = '';
    inProgressEl.innerHTML = '';
    doneEl.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskHTML = `
            <div class="task">
                <p>${task.name}</p>
                ${task.status !== "done" ? `<button onclick="moveTask(${index})">Chuyển tiếp</button>` : ""}
            </div>
        `;

        if (task.status === "pending") {
            pendingEl.innerHTML += taskHTML;
        } else if (task.status === "in-progress") {
            inProgressEl.innerHTML += taskHTML;
        } else if (task.status === "done") {
            doneEl.innerHTML += taskHTML;
        }
    });
}

function addTask() {
    const input = document.getElementById("taskName").value.trim();
    const name = input.value;
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push({ name: name, status: "pending" });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = '';
    renderTasks();
}

function moveTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const currentStatus = tasks[index].status;

    if (currentStatus === "pending") {
        tasks[index].status = "in-progress";
    } else if (currentStatus === "in-progress") {
        tasks[index].status = "done";
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

renderTasks();
