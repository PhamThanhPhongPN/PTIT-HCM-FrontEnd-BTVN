while (true) {
    const choice = parseInt(prompt(
        "1. Tính diện tích hình tròn.\n" +
        "2. Tính chu vi hình tròn.\n" +
        "3. Tính diện tích hình chữ nhật.\n" +
        "4. Tính chu vi hình chữ nhật.\n" +
        "5. Thoát.\n"
    ));

    switch (choice) {
        case 1:
            calculateCircleArea();
            break;
        case 2:
            calculateCirclePerimeter();
            break;
        case 3:
            calculateRectangleArea();
            break;
        case 4:
            calculateRectanglePerimeter();
            break;
        case 5:
            alert("Tạm biệt!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            break;
    }
    
    if (choice === 5) {
        break;
    }
}

function calculateCircleArea() {
    let radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
    if (radius > 0) {
        let area = Math.PI * Math.pow(radius, 2);
        alert(`Diện tích hình tròn là: ${area.toFixed(2)}`);
    } else {
        alert("Bán kính không hợp lệ.");
    }
}

function calculateCirclePerimeter() {
    let radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
    if (radius > 0) {
        let perimeter = 2 * Math.PI * radius;
        alert(`Chu vi hình tròn là: ${perimeter.toFixed(2)}`);
    } else {
        alert("Bán kính không hợp lệ.");
    }
}

function calculateRectangleArea() {
    let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
    let height = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
    if (width > 0 && height > 0) {
        let area = width * height;
        alert(`Diện tích hình chữ nhật là: ${area.toFixed(2)}`);
    } else {
        alert("Kích thước không hợp lệ.");
    }
}

function calculateRectanglePerimeter() {
    let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
    let height = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
    if (width > 0 && height > 0) {
        let perimeter = 2 * (width + height);
        alert(`Chu vi hình chữ nhật là: ${perimeter.toFixed(2)}`);
    } else {
        alert("Kích thước không hợp lệ.");
    }
}
