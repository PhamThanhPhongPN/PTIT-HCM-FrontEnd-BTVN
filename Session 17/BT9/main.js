let a = +prompt("a = ?");
let b = +prompt("b = ?");
let c = +prompt("c = ?");

let delta = Math.pow(b,2) - (4 * a * c);

let x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
let x2 = ((-b) - Math.sqrt(delta)) / (2 * a);

document.writeln("x1 = " + x1 + "<br>" + "x2 = " + x2);
