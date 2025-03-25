let numbers = [2,6,7,69,420];

let guess = +prompt("Nhập một số bất kỳ");

if (numbers.includes(guess)){
    alert("Bingo");
} else {
    alert("Chúc bạn may mắn lần sau")
}