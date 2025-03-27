let arr = [];
while (true) {
    const choice = parseInt(prompt(
        "Menu:\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
        "7. Thoát chương trình"
    ));

    switch (choice) {
        case 1:
            if (arr.length !== 0) {
                arr.length = 0;
            }
            let n = parseInt(prompt("Số phần tử của mảng là:"));
            if (n <= 0) {
                alert("Số phần tử không được nhỏ hơn 0");
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
                    alert(`Mảng chưa có phần tử`);
                }
            }
            break;
        case 2:
            alert(`Mảng vừa nhập là: ${arr}`);
            break;
        case 3:
            let max = arr[0];
            let pos = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    pos = i;
                }
            }
            alert(`Phần tử lớn nhất trong mảng là: ${max} và ở vị trí ${pos}`);
            break;
        case 4:
            let sumPositive = 0;
            let countPositive = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sumPositive += arr[i];
                    countPositive++;
                }
            }
            alert(`Tổng các số dương trong mảng là: ${sumPositive}`);
            alert(`Trung bình cộng các số dương trong mảng là: ${sumPositive / countPositive}`);
            break;
        case 5:
            arr.reverse();
            alert(`Mảng sau khi đảo ngược là: ${arr}`);
            break;
        case 6:
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] !== arr[arr.length - i - 1]) {
                    alert("Mảng không đối xứng");
                    break;
                } else {
                    alert("Mảng đối xứng");
                    break;
                }
            }
            break;
        case 7:
            alert("Thoát chương trình");
            break;
        default:
            alert("Nhập sai, vui lòng nhập lại");
            break;
    }
    if (choice === 7) {
        break;
    }
}

