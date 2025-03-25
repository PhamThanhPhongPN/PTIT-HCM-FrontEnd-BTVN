let cash = +prompt("Tiền ban đầu = ?");
let interest = +prompt("Lãi suất = ? %");
let month = +prompt("Số tháng gửi = ?");
interest = interest / 100;
let cashAfter = 0;
for (let i = 0; i < month; i++) {
    if (i == 0) {
        cashAfter = (cash * interest) + cash;
    } else {
        cashAfter = (cashAfter * interest) + cashAfter;
    }
}
let interestCash = cashAfter - cash;
document.writeln("Tiền lãi: " + interestCash.toFixed(3));
document.writeln("Tiền nhận được: " + cashAfter.toFixed(3));