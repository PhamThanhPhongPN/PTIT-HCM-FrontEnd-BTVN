let array = [];
let check = 0;

for (let i = 0; i < 10; i++) {
    array[i] = +prompt(`Nhập một số cho array[${i}]:`);
}

array.forEach(myFunction);

function myFunction(item) {
    if (item > 10) {
        document.writeln(item + " ");
        check = 1;
    }
}

if (check === 0) {
    document.writeln(`Không có số nào lớn hơn 10`);
}