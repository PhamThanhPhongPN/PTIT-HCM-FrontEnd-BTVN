let array = [];

for (let i = 0; i < 10; i++) {
    let input = prompt(`Nhập một số cho array[${i}]:`);
    if (input === null || input.trim() === "" || isNaN(input)) {
        continue;
    }
    array.push(parseInt(input));
}

if (array.length === 0) {
    alert("Mảng không chứa phần tử");
} else if (array.some(item => typeof item !== 'number' || isNaN(item))) {
    alert("Giá trị không hợp lệ");
} else {
    let Even = array.filter(item => item % 2 === 0);
    let Odd = array.filter(item => item % 2 !== 0);
    let totalEven = 0;
    let totalOdd = 0;
    for (let i = 0; i < Even.length; i++) {
        totalEven += Even[i];
    }
    for (let i = 0; i < Odd.length; i++) {
        totalOdd += Odd[i];
    }
    alert(`totalEven = ${totalEven}`);
    alert(`totalOdd = ${totalOdd}`);
}