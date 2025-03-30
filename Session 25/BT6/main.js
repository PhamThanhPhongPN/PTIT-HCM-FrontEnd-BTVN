function isSymmetrical(str) {
    if (typeof str !== "string") {
        return "Dữ liệu không hợp lệ";
    }
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return "không phải chuỗi đối xứng";
        }
    }
    return "là chuỗi đối xứng";
}

let userInput = prompt("Nhập vào một chuỗi:");
alert(isSymmetrical(userInput));

console.log(isSymmetrical("hello")); 
console.log(isSymmetrical("aloola"));
console.log(isSymmetrical("12345")); 
