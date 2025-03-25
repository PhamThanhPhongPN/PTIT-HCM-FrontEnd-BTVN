let array = [9, 2, 6, 8, 5];
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        sumEven += array[i];
    } else {
        sumOdd += array[i];
    }
}

document.writeln(`Tổng các số chẵn: ${sumEven} <br>`);
document.writeln(`Tổng các số lẻ: ${sumOdd}`);