let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let n = +prompt("Nhập một số nguyên bất kỳ");
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === n) {
        count++;
    }
}

if (count !== 0) {
    document.writeln(`Số ${n} xuất hiện ${count} lần trong mảng`);
} else {
    document.writeln(`Số ${n} không tồn tại trong mảng`);
}
