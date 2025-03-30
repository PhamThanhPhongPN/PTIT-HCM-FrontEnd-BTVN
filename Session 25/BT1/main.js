let array = [];
for (let i = 0; i < 5; i++) {
    array[i] = parseInt(prompt(`Phần tử thứ ${i} là:`));
}
function findMinValue(arr) {
    if (arr.length === 0) {
        return "Mảng không chứa phần tử";
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
            return "Giá trị không hợp lệ";
        }
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return `Phần tử nhỏ nhất trong mảng là: ${min}`;
}
let result = findMinValue(array);
console.log(result);