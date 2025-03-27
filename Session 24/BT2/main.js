let arr = [];
while (true) {
    const choice = parseInt(prompt(
        "Menu:\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn thứ 2 trong mảng\n" +
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
            let Even = [];
            let Odd = [];
            for (let i = 0; i< arr.length; i++){
                if (arr[i] % 2 === 0){
                    Even.push(arr[i]);
                } else {
                    Odd.push(arr[i]);
                }
            }
            alert(`Các phần tử chẵn trong mảng là: ${Even}`);
            alert(`Các phần tử lẻ trong mảng là: ${Odd}`);
            break;
        case 4:
            let sumAverage = 0;
            for (let i = 0; i < arr.length; i++){
                sumAverage += arr[i];
            }
            sumAverage /= arr.length;
            alert(`Trung bình cộng của mảng là: ${sumAverage}`);
            break;
        case 5:
            let deleteIndex = parseInt(prompt("Nhập vị trí cần xóa:"));
            if (deleteIndex < 0 || deleteIndex >= arr.length){
                alert("Vị trí không hợp lệ");
            } else {
                arr.splice(deleteIndex, 1);
                alert(`Mảng sau khi xóa phần tử tại vị trí ${deleteIndex} là: ${arr}`);
            }
            break;
        case 6:
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
            alert(max2);
            break;
        case 7:
            alert("Thoát chương trình");
            break;
        default:    
            alert("Chọn sai, vui lòng chọn lại");
            break;
    }
    if (choice === 7) {
        break;
    }
}