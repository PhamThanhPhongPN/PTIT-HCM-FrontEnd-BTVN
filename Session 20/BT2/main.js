let n = parseInt(prompt("Nhập vào một số tự nhiên"));

document.writeln("Các số chia hết cho 5 từ 1 đến " + n + " là: ");
if (n < 0 || isNaN(n)) {
    alert("Dữ liệu nhập vào không hợp lệ.");
} else {
    let first = true;
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            if (!first){
                document.writeln(", ");
            }
            document.writeln(i);
            first = false;
        }
    }
}