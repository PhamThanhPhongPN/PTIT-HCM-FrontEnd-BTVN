let choice = +prompt("1. VND->USD   2. USD->VND");
if (choice < 1 || choice > 2 || isNaN(choice)){
    alert("Lựa chọn không hợp lệ");
} else {
    switch (choice){
        case 1:
            let vnd1 = +prompt("VND->USD");
            let usd1 = vnd1 / 23000;
            document.writeln(Math.floor(usd1) + " USD");
            break;
        case 2:
            let usd2 = +prompt("USD->VND");
            let vnd2 = usd2 * 23000;
            document.writeln(Math.floor(vnd2) + " VND");
            break;
        default:
            document.writeln("Hệ thống có lỗi. Vui lòng thử lại sau.");
            break;
    }
}



