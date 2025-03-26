let n = parseInt(prompt("Số phần tử của mảng là:"));
let arr = [];
let check = 0;
let sum = 0;
if (n <= 0) {
    document.writeln("Số lượng phần tử không được âm");
} else {
    for (let i = 0; i < n; i++) {
        let input;
        input = (prompt(`Phần tử thứ ${i} là:`));
        if (input === null || input === "") {
            continue;
        }
        arr.push(Number(input));
    }
    if (arr.length === 0) {
        document.writeln(`Mảng không có phần tử`);
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (!isNaN(arr[i])) {
                sum += arr[i];
                check = 1;
            }
        }
    }
    if (check === 0) {
        document.writeln(`Không có phần tử nào là số`);
    } else {
        document.writeln(`Tổng các phần tử số trong mảng là: ${sum}`);
    }
}


