const num = parseInt(prompt("Nhập vào một số nguyên:"));
if (!isNaN(num) && num > 1) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.writeln(`${num} là số nguyên tố.`);
    } else {
        document.writeln(`${num} không phải là số nguyên tố.`);
    }
} else {
    document.writeln("Vui lòng nhập một số nguyên lớn hơn 1.");
}
