const n = parseInt(prompt("Nhập vào số lượng số nguyên tố cần hiển thị:"));
if (!isNaN(n) && n > 0) {
    let count = 0;
    let num = 2;
    let result = "";
    while (count < n) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result += num + " ";
            count++;
        }
        num++;
    }
    document.writeln(result.trim());
} else {
    document.writeln("Không hợp lệ");
}