let n = +prompt("Nhập một số nguyên bất kì");

for (let i = 1 ; i < n + 1; i++){
    if (n % i ===0){
        document.writeln(i + " ");
    }
}