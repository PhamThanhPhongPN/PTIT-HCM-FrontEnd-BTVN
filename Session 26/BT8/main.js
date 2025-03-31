let array = [];

for (let i = 0; i < 10; i++) {
    let input = prompt(`Nhập một số cho array[${i}]:`);
    if (input === null || input.trim() === "" || isNaN(input)) {
        continue;
    }
    array.push(parseInt(input));
}

function isPrime(num){
    if (num < 2 ) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i == 0) return false; 
    }
    return true;
}

if (array.length === 0) {
    alert("Mảng không chứa phần tử");
} else if (array.some(item => typeof item !== 'number' || isNaN(item))) {
    alert("Giá trị không hợp lệ");
} else {
    let PrimeNumbers = array.filter(isPrime);
    let result = PrimeNumbers.filter(item => item %2 !== 0);
    if (result.length === 0) {
        alert("Không có số nguyên tố trong mảng");
    } else {
        alert(result.join(", "));
    }
}