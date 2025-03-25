let numbers = [4, 8, 7, 8, 1, 9, 6, 9, 15, 3];

let num = [];
let count = [];

for (let i = 0; i < numbers.length;i++){
    let number = numbers[i];
    let index = num.indexOf(number);
    if (index === -1){
        num.push(number);
        count.push(1);
    } else {
        count[index]++;
    }
}

let maxCount = 0;
let minNum = 0;

for (let i = 0; i< num.length;i++){
    if (count[i] > maxCount || (count[i] === maxCount) && num[i] < minNum){
        maxCount = count[i];
        minNum = num[i];
    }
}

document.writeln(minNum);