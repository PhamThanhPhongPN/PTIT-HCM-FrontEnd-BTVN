let money = +prompt("Nhập vào số tiền gửi");
let month = +prompt("Nhập vào số tháng gửi");
let interest = money * month * 0.003583;
document.writeln("Số tiền lãi: " + interest.toLocaleString("de-DE") + " VNĐ");