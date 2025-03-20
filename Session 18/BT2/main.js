let toán = +prompt("Nhập điểm môn Toán:");

let anh = +prompt("Nhập điểm môn Anh:");

let văn = +prompt("Nhập điểm môn Văn:");

let Average = (toán + anh + văn) / 3;

document.writeln("Điểm trung bình 3 môn là " + Average + " điểm." + "<br>")

if (Average >= 8){
    document.writeln("Giỏi");
} else if (Average >= 6.5){
    document.writeln("Khá");
} else if (Average >= 5){
    document.writeln("Trung bình");
} else {
    document.writeln("Yếu");
}

