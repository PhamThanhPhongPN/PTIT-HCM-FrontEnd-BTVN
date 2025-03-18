let r = +prompt("Nhập bán kính hình cầu");
let V = (4/3) * Math.PI * Math.pow(r,3);
let S = 4 * Math.PI * Math.pow(r,2);
let C = 2 * Math.PI * r;

document.writeln("Thể tích hình cầu = " + V.toFixed(2) + "<br>");
document.writeln("Diện tích bề mặt = " + S.toFixed(2) + "<br>");
document.writeln("Chu vi lớn nhất hình cầu = " + C.toFixed(2) + "<br>");