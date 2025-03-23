const inputString = prompt("Nhập vào một chuỗi bất kỳ:");
const searchChar = prompt("Nhập vào ký tự cần tìm kiếm:");
let found = false;
for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === searchChar) {
        found = true;
        break;
    }
}
if (found) {
    document.writeln(`Ký tự '${searchChar}' tồn tại trong chuỗi.`);
} else {
    document.writeln(`Ký tự '${searchChar}' không tồn tại trong chuỗi.`);
}
