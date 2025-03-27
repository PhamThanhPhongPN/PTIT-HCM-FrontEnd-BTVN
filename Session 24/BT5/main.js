let arr = [];
let rows = 0;
let cols = 0;
while (true) {
    const choice = parseInt(prompt(
        "Menu:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tính tổng đường chéo chính\n" +
        "5. Tính tổng đường chéo phụ\n" +
        "6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)\n" +
        "7. Thoát chương trình"
    ));

    switch (choice) {
        case 1:
            rows = parseInt(prompt("Số hàng của mảng là:"));
            cols = parseInt(prompt("Số cột của mảng là:"));
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = parseInt(prompt(`Nhập phần tử ${i} ${j}`));
                }
            }
            break;
        case 2:
            if (arr.length === 0) {
                alert("Mảng chưa được khởi tạo. Vui lòng nhập mảng trước.");
                break;
            }
            let output = "";
            for (let i = 0; i < rows; i++) {
                output += arr[i].join(" ") + "\n";
            }
            alert(output);
            break;
        case 3:
            if (arr.length === 0) {
                alert("Mảng chưa được khởi tạo. Vui lòng nhập mảng trước.");
                break;
            }
            let sum = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    sum += arr[i][j];
                }
            }
            alert(`Tổng các phần tử trong mảng là: ${sum}`);
            break;
        case 4:
            let sumCrossMain = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (i === j) {
                        sumCrossMain += arr[i][j];
                    }
                }
            }
            alert(`Tổng đường chéo chính là: ${sumCrossMain}`);
            break;
        case 5:
            let sumCrossOther = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (i + j === cols - 1) {
                        sumCrossOther += arr[i][j];
                    }
                }
            }
            alert(`Tổng đường chéo phụ là: ${sumCrossOther}`);
            break;
        case 6:
            let choice2 = +prompt("Bạn muốn tính trung bình cộng của hàng hay cột? (1. Hàng, 2. Cột)");
            if (choice2 === 1) {
                let rowsAverage = parseInt(prompt("Nhập hàng cần tính trung bình cộng"));
                if (rowsAverage >= rows) {
                    alert("Hàng không tồn tại");
                    break;
                }
                let sumRow = 0;
                for (let i = 0; i < cols; i++) {
                    sumRow += arr[rowsAverage][i];
                }
                alert(`Trung bình cộng của hàng ${rowsAverage} là: ${sumRow / cols}`);
                break;
            } else if (choice2 === 2) {
                let colsAverage = parseInt(prompt("Nhập cột cần tính trung bình cộng"));
                if (colsAverage >= cols) {
                    alert("Cột không tồn tại");
                    break;
                }
                let sumCol = 0;
                for (let i = 0; i < rows; i++) {
                    sumCol += arr[i][colsAverage];
                }
                alert(`Trung bình cộng của cột ${colsAverage} là: ${sumCol / rows}`);
                break;
            }
            break;
        case 7:
            alert("Thoát chương trình");
            break;
        default:
            alert("Nhập sai, vui lòng chọn lại");
            break;
    }
    if (choice === 7) {
        break;
    }
}