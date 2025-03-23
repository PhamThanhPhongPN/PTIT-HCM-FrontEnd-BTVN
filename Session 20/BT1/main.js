let n = parseInt(prompt("Nhập vào một số tự nhiên"));
let sum = 0;
if (n < 0 || isNaN(n)) {
    alert("Dữ liệu nhập vào không hợp lệ.");
} else {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
}

document.writeln(sum);