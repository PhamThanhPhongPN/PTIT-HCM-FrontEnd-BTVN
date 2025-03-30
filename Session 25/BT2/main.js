function sumIntegers(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    } else {
        return "dữ liệu không hợp lệ";
    }
}

console.log(sumIntegers(2, 6));       
console.log(sumIntegers(3, "text"));  
console.log(sumIntegers(7, -7));     
console.log(sumIntegers(4.5, 3));     
