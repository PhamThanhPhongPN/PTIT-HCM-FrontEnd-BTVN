let employeesList = {
    employees: [],

    addEmployees(id, name, position, salary) {
        this.employees.push({ id, name, position, salary });
    }
}

function addEmployee(employeesList) {
    let id = prompt("Nhập id");
    let name = prompt("Nhập tên");
    let position = prompt("Nhập position");
    let salary = prompt("Nhập salary");

    employeesList.addEmployees(id, name, position, salary);
}


function deleteEmployees(employeesList) {
    if (employeesList.employees.length === 0) {
        alert("Danh sách chưa có nhân viên nào.");
        return;
    } else {
        let inputId = prompt("Nhập vào id để xóa");
        for (let i = 0; i < employeesList.employees.length; i++) {
            if (inputId === employeesList.employees[i].id) {
                employeesList.employees.splice(i, 1);
                alert("Đã xóa thành công!");
                return;
            }
        }
        alert("Không tìm được id bạn nhập.");
        return;
    }
}

function updateSalaryById(employeesList) {
    if (employeesList.employees.length === 0) {
        alert("Danh sách chưa có nhân viên nào.");
        return;
    } else {
        let inputId = prompt("Nhập vào id để update");
        for (let i = 0; i < employeesList.employees.length; i++) {
            if (inputId === employeesList.employees[i].id) {
                let newSalary = prompt(`Đã tìm được id\n Nhập salart mới: (salary cũ: ${employeesList.employees[i].salary})`);
                employeesList.employees[i].salary = newSalary;
                alert("Đã thay đổi thành công!");
                return;
            }
        }
        alert("Không tìm được id bạn nhập");
        return;
    }
}

function findEmployeesByName(employeesList) {
    if (employeesList.employees.length === 0) {
        alert("Danh sách chưa có nhân viên nào.");
        return;
    } else {
        let inputName = prompt("Nhập vào tên để tìm kiếm");
        for (let i = 0; i < employeesList.employees.length; i++) {
            if (inputName === employeesList.employees[i].name) {
                alert(`id: ${employeesList.employees[i].id}, name: ${employeesList.employees[i].name}, position: ${employeesList.employees[i].position}, salary: ${employeesList.employees[i].salary}`);
                return;
            }
        }
        alert(`Không tìm thấy employees với tên ${inputName}`);
        return;
    }
}


while (true) {
    let choice = parseInt(prompt(
        "1. Thêm nhân viên mới\n" +
        "2. Xóa nhân viên theo id\n" +
        "3. Cập nhật mức lương theo id\n" +
        "4. Tìm kiếm nhân viên theo tên\n" +
        "5. Thoát"
    ));

    switch (choice) {
        case 1:
            addEmployee(employeesList);
            break;
        case 2:
            deleteEmployees(employeesList);
            break;
        case 3:
            updateSalaryById(employeesList);
            break;
        case 4:
            findEmployeesByName(employeesList);
            break;
        case 5:
            alert("Goodbye!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
    if (choice === 5) {
        break;
    }
}