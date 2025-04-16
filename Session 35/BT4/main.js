let employees = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        position: "Developer"
    },
    {
        id: 2,
        name: "Trần Thị B",
        position: "Designer"
    },
    {
        id: 3,
        name: "Phạm Văn C",
        position: "Project Manager"
    }
];

if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
} else {
    employees = JSON.parse(localStorage.getItem("employees"));
}

function updateData() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

const urlParams = new URLSearchParams(window.location.search);
let curPage = parseInt(urlParams.get("page")) || parseInt(localStorage.getItem("curPage")) || 1;

const maxItem = 2;
let countPage = Math.ceil(employees.length / maxItem);

let paginBoxEL = document.querySelector(".pagin_box");
let tbody = document.getElementById("employee-list");

function renderEmployees() {
    tbody.innerHTML = "";

    let start = (curPage - 1) * maxItem;
    let end = curPage * maxItem;
    let currentEmployees = employees.slice(start, end);

    currentEmployees.forEach((emp, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${start + index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
      `;
        tbody.appendChild(row);
    });
}

function addEmployee() {
    const name = document.getElementById("name").value.trim();
    const position = document.getElementById("position").value.trim();

    if (name && position) {
        employees.push({ id: Date.now(), name, position });
        updateData();
        countPage = Math.ceil(employees.length / maxItem);
        setPage(countPage); 
        document.getElementById("name").value = "";
        document.getElementById("position").value = "";
    }
}

function renderPagin() {
    let paginHtml = ``

    paginHtml += `
      <button class="${curPage === 1 ? "disabled" : ""}" onclick="setPage(${curPage - 1})">Previous</button>
    `;
    for (let i = 1; i <= countPage; i++) {
        paginHtml += `
        <button class="${i === curPage ? "active" : ""}" onclick="setPage(${i})">${i}</button>
      `
    }
    paginHtml += `
      <button class="${curPage === countPage ? "disabled" : ""}" onclick="setPage(${curPage + 1})">Next</button>
    `
    paginBoxEL.innerHTML = paginHtml;
}


function setPage(pageNumber) {
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > countPage) pageNumber = countPage;

    curPage = pageNumber;
    localStorage.setItem("curPage", curPage);
    window.history.pushState({}, "", "?page=" + curPage);

    renderEmployees();
    renderPagin();
}

window.onload = function () {
    renderEmployees();
    renderPagin();
};
