let numbers = [];

while (true) {
    const choice = parseInt(prompt(
        "1. Nhập danh sách số nguyên.\n" +
        "2. Tính trung bình các số.\n" +
        "3. Tìm số chẵn lớn nhất.\n" +
        "4. Tìm số lẻ nhỏ nhất.\n" +
        "5. Thoát.\n"
    ));

    switch (choice) {
        case 1:
            inputNumbers();
            break;
        case 2:
            calculateAverage();
            break;
        case 3:
            findMaxEven();
            break;
        case 4:
            findMinOdd();
            break;
        case 5:
            alert("Tạm biệt!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            break;
    }
    
    if (choice === 5) {
        break;
    }
}

function inputNumbers() {
    let count = parseInt(prompt("Nhập số lượng số nguyên:"));
    for (let i = 0; i < count; i++) {
        let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
        numbers.push(num);
    }
}

function calculateAverage() {
    if (numbers.length === 0) {
        alert("Danh sách số nguyên trống.");
        return;
    }
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let average = sum / numbers.length;
    alert(`Trung bình các số là: ${average.toFixed(2)}`);
}

function findMaxEven() {
    let evenNumbers = numbers.filter(num => num % 2 === 0);
    if (evenNumbers.length === 0) {
        alert("Không có số chẵn trong danh sách.");
    } else {
        let maxEven = Math.max(...evenNumbers);
        alert(`Số chẵn lớn nhất là: ${maxEven}`);
    }
}

function findMinOdd() {
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    if (oddNumbers.length === 0) {
        alert("Không có số lẻ trong danh sách.");
    } else {
        let minOdd = Math.min(...oddNumbers);
        alert(`Số lẻ nhỏ nhất là: ${minOdd}`);
    }
}
