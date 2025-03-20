let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");
let phepTinh = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");

switch (phepTinh) {
    case "+":
        document.writeln(a + " + " + b + " = " + (a + b));
        break;
    case "-":
        document.writeln(a + " - " + b + " = " + (a - b));
        break;
    case "*":
        document.writeln(a + " * " + b + " = " + (a * b));
        break;
    case "/":
        document.writeln(a + " / " + b + " = " + (a / b));
        break;
    default:
        document.writeln("Bạn nhập sai rồi" + "<br>" + "Hãy thử lại");
        break;
}
