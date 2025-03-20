let n = +prompt("Nhập một số bất kỳ");

if (isNaN(n)){
    alert("Không phải là số");
} else {
    if (n % 3 ==0 && n % 5 ==0){
        document.writeln(n + " chia hết cho cả 3 và 5.");
    } else {
        document.writeln(n + " không chia hết cho cả 3 và 5.");
    }
}