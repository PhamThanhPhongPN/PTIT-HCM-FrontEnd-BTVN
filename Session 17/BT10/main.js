let n = +prompt("Nhập một số bất kỳ");
let sqrt = Math.sqrt(n);
let result = ((Number.isInteger(sqrt)) && n >= 0) ? " là số chính phương" : " không phải là số chính phương";

document.writeln(n + result);