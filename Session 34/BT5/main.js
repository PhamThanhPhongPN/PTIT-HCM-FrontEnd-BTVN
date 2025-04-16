let employees = JSON.parse(localStorage.getItem("employees")) || []

function renderEmployees() {
  const tbody = document.getElementById("employee-list")
  tbody.innerHTML = ""

  employees.forEach((emp, index) => {
    const row = document.createElement("tr")
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${emp.name}</td>
      <td>${emp.position}</td>
    `
    tbody.appendChild(row)
  })
}

function addEmployee() {
  const name = document.getElementById("name").value.trim()
  const position = document.getElementById("position").value.trim()

  if (name && position) {
    employees.push({ name, position })
    localStorage.setItem("employees", JSON.stringify(employees))
    renderEmployees()
    document.getElementById("name").value = ""
    document.getElementById("position").value = ""
  }
}

window.onload = renderEmployees
