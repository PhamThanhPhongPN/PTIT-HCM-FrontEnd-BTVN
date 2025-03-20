let n = +prompt("Nhập một tháng");

if (n < 1 || n > 12 || isNaN(n)) {
    document.writeln("Tháng không hợp lệ");
} else {
    switch (n) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.writeln("Tháng " + n + " có 31 ngày.");
            break;
        case 2:
            document.writeln("Tháng 2 có 28 hoặc 29 ngày năm nhuận.");
            break;
        default:
            document.writeln("Tháng " + n + " có 30 ngày.");
            break;
    }
}

