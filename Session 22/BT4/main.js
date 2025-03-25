let numbers = prompt("Nhập vào chuỗi số bất kỳ");
let check = 1;
let number = numbers.split('');
let max = number[0];
for (let i = 0; i < number.length; i++) {
    if (number[i] < '0' || number[i] > '9') {
        check = 0;
        break;
    } else {
        if (number[i] > max) {
            max = number[i];
        }
    }
}

if (check === 0) {
    alert("Dãy số không hợp lệ");
} else {
    alert(`${max} là số lớn nhất trong dãy số`);
}
