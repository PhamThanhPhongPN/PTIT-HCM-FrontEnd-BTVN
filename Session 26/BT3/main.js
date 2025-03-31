let array = [];

for (let i = 0; i < 5; i++) {
    let input = prompt(`Nhập một chuỗi cho array[${i}]:`);
    if (input === null || input.trim() === "" || !isNaN(input)) {
        continue;
    }
    array.push(input);
}

function ValidateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        return email;
    } else {
        return;
    }
}

if (array.length === 0) {
    alert("Mảng không chứa phần tử");
} else {
    let CheckedEmail = array.filter(email => ValidateEmail(email));
    if (CheckedEmail.length === 0) {
        alert("Mảng không có email hợp lệ");
    } else {
        alert(CheckedEmail.join(", "));
    }
}