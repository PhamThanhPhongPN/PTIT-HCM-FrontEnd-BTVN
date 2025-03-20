let year = +prompt("Nhập một năm bất kỳ");

if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
    document.writeln(year + " là năm nhuận.");
} else {
    document.writeln(year + " là năm không nhuận.");
}