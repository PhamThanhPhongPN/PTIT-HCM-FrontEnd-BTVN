let hour = +prompt("Nhập số giờ");
let min = +prompt("Nhập số phút");
let sec = +prompt("Nhập số giây");

let hourChange = Math.abs(hour - 12);

if (hour == 12){
    document.writeln(hour + ":" + min + ":" + sec + " PM");
} else if (hour >= 12) {
    document.writeln(hourChange + ":" + min + ":" + sec + " PM");
} else {
    document.writeln(hour + ":" + min + ":" + sec + " AM");
}