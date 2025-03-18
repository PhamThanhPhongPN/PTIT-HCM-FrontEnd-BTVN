let r = +prompt("Nhập bán kính hình trụ");
let h = +prompt("Nhập chiều cao hình trụ");
let C = 2 * Math.PI * r;
let Sxq = C * h;
let Sđáy = Math.PI * Math.pow(r,2); 
let Stp = Sxq + 2 * Sđáy;
let V = Sđáy * h;

document.writeln("Diện tích xung quanh = " + Sxq.toFixed(2) + "<br>");
document.writeln("Diện tích toàn phần = " + Stp.toFixed(2) + "<br>");
document.writeln("Thể tích hình trụ = " + V.toFixed(2) + "<br>");
document.writeln("Chu vi  đáy = " + C.toFixed(2) + "<br>");