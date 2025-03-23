const input = prompt("Nhập vào một số nguyên:");
if (!isNaN(input) && Number.isInteger(Number(input))) {
    const strNum = input.toString();
    const reversedStr = strNum.split('').reverse().join('');
    if (strNum === reversedStr) {
        console.log(`${input} là số đối xứng.`);
    } else {
        console.log(`${input} không phải là số đối xứng.`);
    }
} else {
    console.log("Vui lòng nhập một số nguyên hợp lệ.");
}
