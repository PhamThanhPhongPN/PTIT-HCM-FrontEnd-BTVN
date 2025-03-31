let array = [];

for (let i = 0; i < 10; i++) {
    let input = prompt(`Nhập một số cho array[${i}]:`);
    if (input === null || input.trim() === "" || isNaN(input)) {
        continue;
    }
    array.push(parseInt(input));
}

function MaxNum(arr) {
    let max = arr[0];
    let maxPos = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxPos = i;
        }
    }
    return {max, maxPos};
}

if (array.length === 0) {
    alert("Mảng không chứa phần tử");
} else if (array.some(item => typeof item !== 'number' || isNaN(item))) {
    alert("Giá trị không hợp lệ");
} else {
    const { max, maxPos } = MaxNum(array);
    alert(`max = ${max} \nPosition: ${maxPos}`);
}