let n = +prompt("Nhập một số từ 0 -> 9");

switch (n) {
    case 1:
        document.writeln("Số một");
        break;
    case 2:
        document.writeln("Số hai");
        break;
    case 3:
        document.writeln("Số ba");
        break;
    case 4:
        document.writeln("Số bốn");
        break;
    case 5:
        document.writeln("Số năm");
        break;
    case 6:
        document.writeln("Số sáu");
        break;
    case 7:
        document.writeln("Số bảy");
        break;
    case 8:
        document.writeln("Số tám");
        break;
    case 9:
        document.writeln("Số chín");
        break;
    default:
        document.writeln("Số không nằm trong khoảng hoặc không phải là số!");
        break;
}