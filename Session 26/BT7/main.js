let array = [];

for (let i = 0; i < 5; i++) {
    let input = prompt(`Nhập một số cho array[${i}]:`);
    if (input === null || input.trim() === "" || isNaN(input)) {
        continue;
    }
    array.push(parseInt(input));
}

function SquareEvenNum(arr) {
    let evenSquares = [];
    for (let i = 0; i < arr.length; i++) {
        let squared = arr[i] * arr[i]; 
        if (squared % 2 === 0) {
            evenSquares.push(squared); 
        }
    }
    return evenSquares; 
}

if (array.length === 0) {
    alert("Mảng không chứa phần tử");
} else if (array.some(item => typeof item !== 'number' || isNaN(item))) {
    alert("Giá trị không hợp lệ");
} else {
    let result = SquareEvenNum(array);
    alert(result.join(", "));
}