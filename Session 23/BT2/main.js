let array = [];
let input;

for (let i = 0; i < 10; i++) {
    input = prompt(`Nhập một số cho array[${i}]:`);
    if (input === null || input.trim() === "") {
        continue;
    }
    array.push(Number(input));
}

if (array.length === 0) {
    document.writeln(`Không có số lớn nhất`);
} else {
    let max = array[0];
    let maxPos = 0;
    for (let i = 1; i < 10; i++) {
        if (array[i] > max) {
            max = array[i];
            maxPos = i;
        }
    }
    document.writeln(`Số lớn nhất: ${max}<br>Vị trí: ${maxPos}`);
}

