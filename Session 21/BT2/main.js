let even = 0;
let odd = 0
for (let i = 0; i < 5; i++) {
    let n = parseInt(prompt("Nhập vào 1 số nguyên"));
    if (n % 2 !== 0) {
        odd++;
    } else {
        even++
    }
}

alert("Số chẵn: " + even);
alert("Số lẻ: " + odd);
