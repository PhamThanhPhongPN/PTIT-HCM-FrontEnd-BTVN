let day1 = prompt("Hãy nhập ngày thứ 1 (Lưu ý : YYYY-MM-DD)");
const date1 = new Date(day1);
let day2 = prompt("Hãy nhập ngày thứ 2 (Lưu ý : YYYY-MM-DD)");
const date2 = new Date(day2);
let datediff = Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
document.writeln("Số ngày chênh lệch của " + day1 + " và " + day2 + " là: " + datediff + " ngày.");