let array = [];

for (let i = 0; i < 5; i++) {
    let input = prompt(`Nhập một chuỗi ngày (yyyy-mm-dd)`);
    if (input === null || input.trim() === "" || !isNaN(input)) {
        continue;
    }
    array.push(input);
}

function convertDate(str) {
    if (!str.includes("-") || str.length !== 10) {
        return;
    } else {
        let date = str.split("-");
        date.reverse();
        date = date.join("/");
        return date;
    }
}


if (array.length === 0) {
    alert("Mảng không chứa phần tử");
} else {
    let newDate = [];
    for (let i = 0; i < array.length; i++) {
        let date = convertDate(array[i]);
        newDate.push(date);
    }
    alert(newDate.join(", "));
}
