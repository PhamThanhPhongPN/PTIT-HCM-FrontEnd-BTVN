let sum = 0;
for (let i = 0; i<5; i++){
    let n = parseInt(prompt("Nhập vào 1 số nguyên"));
    if (n % 2 !== 0){
        sum+= n;
    }
}
alert("Tổng các số lẻ trong 5 số bạn đã nhập là: " + sum);
