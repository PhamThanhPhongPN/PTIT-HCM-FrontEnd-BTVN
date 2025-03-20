let month = parseInt(prompt("Nhập một tháng bất kì"));

if (month < 1 || month > 12 || isNaN(month)){
    alert("Tháng không hợp lệ");
} else if (month < 4){
    document.writeln("Mùa xuân");
} else if (month < 7){
    document.writeln("Mùa hạ");
} else if (month < 10){
    document.writeln("Mùa thu");
} else {
    document.writeln("Mùa đông");
}