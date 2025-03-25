let numbers = prompt("Nhập vào chuỗi số bất kỳ");

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < '0' || numbers[i] > '9') {
        var check = 0;
        break;
    }
}

if (check === 0) {
    alert("Dãy không hợp lệ");
} else {
    let reversed = numbers.split('').reverse().join('');
    alert(reversed)
}