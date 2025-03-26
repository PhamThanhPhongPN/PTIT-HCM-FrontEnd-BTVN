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
        let max1 = arr[0];
        let max2 = arr[1];
        if (max1 > max2){
            let temp = max1;
            max1 = max2;
            max2 = temp;
        }
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] > max1) {
                max2 = max1;
                max1 = arr[i];
            } else if (arr[i] > max2) {
                max2 = arr[i];
            }
        }
        document.writeln(max2);
    }
}


