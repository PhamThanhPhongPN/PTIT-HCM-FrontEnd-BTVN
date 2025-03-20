let canh1 = +prompt("Nhập độ dài cạnh 1");
let canh2 = +prompt("Nhập độ dài cạnh 2");
let canh3 = +prompt("Nhập độ dài cạnh 3");

if (canh1 + canh2 > canh3 && canh1 + canh3 > canh2 && canh2 + canh3 > canh1){
    if (Math.pow(canh1,2) == Math.pow(canh2,2) + Math.pow(canh3,2) || Math.pow(canh2,2) == Math.pow(canh1,2) + Math.pow(canh3,2) || Math.pow(canh3,2) == Math.pow(canh2,2) + Math.pow(canh1,2)){
        document.writeln("Tam giác vuông");
    } else if (canh1 == canh2 && canh1 == canh3){
        document.writeln("Tam giác đều");
    } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3){
        document.writeln("Tam giác cân");
    } else {
        document.writeln("Tam giác thường");
    }
} else {
    document.writeln("Độ dài 3 cạnh không thỏa điều kiện của một tam giác!");
}
