let n = parseInt(prompt("Số phần tử của mảng là:"));
let arr = [];

if (n <= 0) {
    console.log("Số phần tử không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        let input;
        input = (prompt(`Phần tử thứ ${i} là:`));
        if (input === null || input === "" || isNaN(input)) {
            continue;
        }
        arr.push(Number(input));
    }
    if (arr.length === 0) {
        console.log(`Mảng không có phần tử`);
    } else {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                count++;
            }
        }
        console.log(`Có ${count} số âm trong mảng`);
    }
}


