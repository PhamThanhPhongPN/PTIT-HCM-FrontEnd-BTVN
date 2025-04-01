while (true) {
    const choice = parseInt(prompt(
        "1. Nhập danh sách sinh viên.\n" +
        "2. Hiển thị danh sách sinh viên.\n" +
        "3. Tìm sinh viên theo tên.\n" +
        "4. Xóa sinh viên khỏi danh sách.\n" +
        "5. Thoát.\n"
    ));

    switch (choice) {
        case 1:
            addStudents();
            break;
        case 2:
            displayStudents();
            break;
        case 3:
            searchStudent();
            break;
        case 4:
            removeStudent();
            break;
        case 5:
            alert("Tạm biệt!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            break;
    }
    
    if (choice === 5) {
        break;
    }
}

let students = [];

function addStudents() {
    let numberOfStudents = parseInt(prompt("Nhập số lượng sinh viên:"));
    for (let i = 0; i < numberOfStudents; i++) {
        let studentName = prompt(`Nhập tên đầy đủ sinh viên thứ ${i + 1}:`);
        students.push(studentName);
    }
}

function displayStudents() {
    if (students.length === 0) {
        alert("Danh sách sinh viên trống.");
    } else {
        let list = "Danh sách sinh viên:\n";
        students.forEach((student, index) => {
            list += `${index + 1}. ${student}\n`;
        });
        alert(list);
    }
}

function searchStudent() {
    let nameToSearch = prompt("Nhập tên sinh viên cần tìm:");
    let foundStudents = students.filter(student => student.toLowerCase().includes(nameToSearch.toLowerCase()));

    if (foundStudents.length > 0) {
        let result = "Sinh viên tìm thấy:\n";
        foundStudents.forEach(student => result += student + "\n");
        alert(result);
    } else {
        alert("Sinh viên không có trong danh sách.");
    }
}

function removeStudent() {
    let nameToRemove = prompt("Nhập tên sinh viên cần xóa:");
    let indexToRemove = students.findIndex(student => student.toLowerCase() === nameToRemove.toLowerCase());

    if (indexToRemove !== -1) {
        students.splice(indexToRemove, 1);
        alert(`Đã xóa sinh viên: ${nameToRemove}`);
    } else {
        alert("Không tìm thấy sinh viên cần xóa.");
    }
}
