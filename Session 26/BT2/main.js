let array = [];

for (let i = 0; i < 5; i++) {
    let input = prompt(`Nhập một chuỗi cho array[${i}]:`);
    if (input === null || input.trim() === "" || !isNaN(input)) {
        continue;
    }
    array.push(input);
}

if (array.length === 0) {
    alert("Mảng không chứa phần tử hợp lệ.");
} else {
    let OverFiveChar = array.filter(str => str.length > 5);
    if (OverFiveChar.length === 0) {
        alert("Không có chuỗi nào có độ dài lớn hơn 5.");
    } else {
        alert(OverFiveChar.join(", "));
    }
}