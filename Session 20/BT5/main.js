const a = parseInt(prompt("Nhập vào số a:"));
const b = parseInt(prompt("Nhập vào số b:"));
if (!isNaN(a) && !isNaN(b) && b >= 0) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    document.writeln(`${a}^${b} = ${result}`);
} else {
    document.writeln("Vui lòng nhập số nguyên hợp lệ, với b không âm.");
}