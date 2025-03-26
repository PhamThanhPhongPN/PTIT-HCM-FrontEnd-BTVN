let n = parseInt(prompt("Số phần tử của mảng là:"));
let arr = [];

if (n <= 0) {
    document.writeln("Số phần tử không được nhỏ hơn 0");
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
        document.writeln(`Không phải dãy số fibonacci`);
    } else {
        let check = 0;
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                document.writeln(`Không phải dãy số fibonacci`);
                break;
            } else {
                check++;
            }
        }
        if (check !== 0) {
            document.writeln(`Là dãy số fibonacci`);
        }
    }
}


