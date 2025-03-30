function getEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || !Number.isInteger(arr[i])) {
            return "dữ liệu không hợp lệ";
        }
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens.length > 0 ? evens.join(", ") : "mảng không chứa số chẵn";
}
console.log(getEvenNumbers([11, 4, 65, 6]));
console.log(getEvenNumbers([1, 3, 5, 17]));
console.log(getEvenNumbers("text"));          
