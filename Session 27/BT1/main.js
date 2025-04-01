while (true){
    const choice = parseInt(prompt(
        "1. Cộng hai số.\n" +
        "2. Trừ hai số.\n" +
        "3. Nhân hai số.\n" +
        "4. Chia hai số.\n" +
        "5. Thoát.\n" 
    ));

    switch (choice){
        case 1:
            SumNum();
            break;
        case 2:
            SubNum();
            break;
        case 3:
            MulNum();
            break;
        case 4:
            DivNum();
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

function SumNum(){
    let num1 = parseInt(prompt("Nhập số thứ nhất:"));
    let num2 = parseInt(prompt("Nhập số thứ hai:"));
    let result = num1 + num2;
    alert(`Kết quả là: ${result}`);
}

function SubNum(){
    let num1 = parseInt(prompt("Nhập số thứ nhất:"));
    let num2 = parseInt(prompt("Nhập số thứ hai:"));
    let result = num1 - num2;
    alert(`Kết quả là: ${result}`);
}

function MulNum(){
    let num1 = parseInt(prompt("Nhập số thứ nhất:"));
    let num2 = parseInt(prompt("Nhập số thứ hai:"));
    let result = num1 * num2;
    alert(`Kết quả là: ${result}`);
}

function DivNum(){
    let num1 = parseInt(prompt("Nhập số thứ nhất:"));
    let num2 = parseInt(prompt("Nhập số thứ hai:"));
    if (num2 === 0) {
        alert("Không thể chia cho 0.");
        return;
    }
    let result = num1 / num2;
    alert(`Kết quả là: ${result}`);
}