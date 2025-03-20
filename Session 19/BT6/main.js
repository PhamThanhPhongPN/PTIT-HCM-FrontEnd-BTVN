let a = +prompt("a=?");
let b = +prompt("b=?");
let c = +prompt("c=?");

let delta = Math.pow(b, 2) - (4 * a * c);

if (delta < 0) {
    document.writeln("Phương trình vô nghiệm.");
} else if (delta == 0) {
    x = (-b) / (2 * a);
    document.writeln("Phương trình có nghiệm kép: x1 = x2 = " + x);
} else {
    let x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
    let x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
    document.writeln("Phương trình có 2 nghiệm phân biệt:" + "<br>" + "x1 = " + x1 + "; x2 = " + x2);
}