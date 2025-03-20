let input = prompt("Nhập tên từ bàn phím");

if (input == "ADMIN"){
    let password = prompt("Nhập mật khẩu");
    if (password == "TheMaster"){
        alert("Welcome");
    } else if (password == ""){
        alert("Cancelled");
    } else {
        alert("Wrong password!");
    }
} else if (input == ""){
    alert("Cancelled");
} else {
    alert("I Don't know you")
}