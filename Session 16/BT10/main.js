let firstNumber = +prompt("Nhập vào số bắt đầu");

let secondNumber = +prompt("Nhập vào số cuối");

let result = Math.random() * (secondNumber - firstNumber) + firstNumber; 

document.write("Số ngẫu nhiên trong khoảng từ " + firstNumber + " đến " + secondNumber + " là: " + parseInt(result));