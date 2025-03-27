let arr = [];
while (true) {
    const choice = parseInt(prompt(
        "Menu:\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n" +
        "4. Tính tổng các phần tử trong mảng\n" +
        "5. Tìm số lần xuất hiện của một phần tử trong mảng\n" +
        "6. Sắp xếp tăng dần\n" +
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
            let min = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                } else if (arr[i] < min) {
                    min = arr[i];
                }
            }
            alert(`Phần tử lớn nhất trong mảng là: ${max}`);
            alert(`Phần tử nhỏ nhất trong mảng là: ${min}`);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            alert(`Tổng các phần tử trong mảng là: ${sum}`);
            break;
        case 5:
            let count = 0;
            let num = parseInt(prompt("Nhập số cần kiểm tra:"));
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === num) {
                    count++;
                }
            }
            alert(`Số lần xuất hiện của ${num} trong mảng là: ${count}`);
            break;
        case 6:
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            alert(`Mảng sau khi sắp xếp tăng dần là: ${arr}`);
            break;
        case 7:
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 7");
            break;
    }
    if (choice === 7) {
        break;
    }
}
