let array = [];

for (let i = 0; i < 10; i++) {
    let input = prompt(`Nhập một số cho array[${i}]:`);
    if (input === null || input.trim() === "" || isNaN(input)) {
        continue;
    }
    array.push(parseInt(input));
}

if (array.length === 0) {
    alert("Mảng không chứa phần tử");
} else if (array.some(item => typeof item !== 'number' || isNaN(item))) {
    alert("Giá trị không hợp lệ");
} else {
    let OverTen = array.filter(item => item > 10);
    alert(OverTen);
}