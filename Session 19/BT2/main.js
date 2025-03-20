let input = prompt("Nhập vào ký tự");
let len = input.length;

if (len == 1 && isNaN(input)){
    document.writeln("Ký tự " + input + " là chữ cái.");
} else {
    document.writeln("Không phải là chữ cái.");
}
