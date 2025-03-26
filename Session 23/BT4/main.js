let n = parseInt(prompt("Số phần tử của mảng là:"));
let arr = [];
let check = 0;
if (n <= 0) {
    document.writeln("Số phần tử không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        let input;
        input = (prompt(`Phần tử thứ ${i} là:`));
        if (input === null || input === "") {
            continue;
        }
        arr.push(input);
    }
    if (arr.length === 0) {
        document.writeln(`Mảng không có phần tử`);
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (!isNaN(arr[i])) {
                document.writeln(arr[i] + "");
                check = 1;
            }
        }
    }
    if (check === 0) {
        document.writeln(`Không có ký tự số`);
    }
}


