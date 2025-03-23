const n = parseInt(prompt("n=?"));
if (!isNaN(n) && n > 0) {
    let a = 1, b = 1;
    let result = "1 1";
    for (let i = 2; i < n; i++) {
        let next = a + b;
        result += " " + next;
        a = b;
        b = next;
    }
    document.writeln(result);
} else {
    document.writeln("Không hợp lệ");
}
