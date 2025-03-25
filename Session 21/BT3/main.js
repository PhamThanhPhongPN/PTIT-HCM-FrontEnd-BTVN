let password = "Password123"

while (true) {
    let guess = prompt("Hãy nhập mật khẩu")
    if (guess === password) {
        alert("Mật khẩu đúng!");
        break;
    } else {
        alert("Sai rồi! Hãy nhập lại")
    }
}