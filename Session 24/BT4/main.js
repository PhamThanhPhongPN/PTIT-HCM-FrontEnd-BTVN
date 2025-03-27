let arr = [];
let rows = 0;
let cols = 0;
while (true) {
    const choice = parseInt(prompt(
        "Menu:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
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
            let max = arr[0][0];
            let pos = "";
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (max < arr[i][j]) {
                        max = arr[i][j];
                        pos = `[${i}] [${j}]`;
                    }
                }
            }
            alert(`Phần tử lớn nhất trong mảng là: ${max} ở vị trị ${pos}`);
            break;
        case 5:
            let rowsAverage = parseInt(prompt("Nhập hàng cần tính trung bình cộng"));
            let sumRow = 0;
            for (let i = 0; i < cols; i++) {
                sumRow += arr[rowsAverage][i];
            }
            alert(`Trung bình cộng của hàng ${rowsAverage} là: ${sumRow / cols}`);
            break;
        case 6:
            for (let i = 0; i < rows; i++) {
                arr[i].reverse();
            }
            let output2 = "";
            for (let i = 0; i < rows; i++) {
                output2 += arr[i].join(" ") + "\n";
            }
            alert(`Mảng sau khi đảo ngược các hàng là: \n${output2}`);
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