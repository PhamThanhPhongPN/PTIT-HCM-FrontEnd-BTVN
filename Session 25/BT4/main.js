function isPrime(num) {
    if (typeof num !== "number" || !Number.isInteger(num) || num <= 0) {
        return "dữ liệu không hợp lệ";
    }
    if (num < 2) {
        return "không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "không phải là số nguyên tố";
        }
    }
    return "là số nguyên tố";
}

console.log(isPrime(17));
console.log(isPrime(6));
console.log(isPrime("text"));
