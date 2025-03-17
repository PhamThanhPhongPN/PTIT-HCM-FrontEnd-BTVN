let math = +prompt("Nhập số điểm Math");

let physics = +prompt("Nhập số điểm physics");

let chemistry = +prompt("Nhập số điểm chemistry");

let totalAverage = (math + physics + chemistry) / 3;

document.write("Trung bình cộng của 3 môn là : " + totalAverage.toFixed(2) +" điểm");