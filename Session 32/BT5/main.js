const taskList = [
    {
        task: "học dom js",
    },
    {
        task: "làm bài tập dom js",
    },
]

const divEl = document.querySelector("#taskList");

function renderTask(){
    let dataHTML = '';

    for (let i = 0; i < taskList.length; i++){
        dataHTML += `
        <div style = "width: 300px;">
        <div style = "display: flex; justify-content: space-between;">
            ${taskList[i].task}
            <button onclick = "deleteTask(${i})">X</button>
        </div>
        <hr style = "width: 295px;">
        </div>
        `
    }
    divEl.innerHTML = dataHTML;
}

function addTask() {
    const newTask = document.getElementById("task").value;
    if (newTask !== "") {
        taskList.push({ task: newTask });
        renderTask(); 
        document.getElementById("task").value = ""; 
    } else {
        alert("Tên nhiệm vụ không được để trống!");
    }
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTask();
}

renderTask();