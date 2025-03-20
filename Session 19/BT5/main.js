let str = prompt("Nhập vào một chuỗi");
const space = " ";
let string = str.trim();

if (string.includes(space)) {
    document.writeln("Chuỗi chứa dấu cách.");
} else {
    document.writeln("Chuỗi không chứa dấu cách.");
}