let n1 = +prompt("Nhập vào số thứ nhất");
let n2 = +prompt("Nhập vào số thứ hai");
let n3 = +prompt("Nhập vào số thứ ba");

let max = (n1 > n2 && n1 > n3) ? n1 : (n2 > n1 && n2 > n3) ? n2 : n3;

document.writeln("Số lớn nhất trong 3 số là " + max);
