/* + ở đây sẽ là nối chuỗi */
let result = "javascript" + 5;
/* - không áp dụng với chuỗi chỉ với số nên trả và NaN */
let result2 = "javascript" - 1;
/* + ở đây sẽ là nối chuỗi */
let result3 = "3" + 2;
/* chuỗi "5" tự động chuyển thành số để thực hiện phép trừ */
let result4 = "5" - 4;
/* "123" là chuỗi nhưng vẫn có thể chuyển thành số nên false*/
let result5 = isNaN( "123");
/* "hello" không thể chuyển thành số nên true */
let result6 = isNaN("hello");
/* isNaN() trả về true nếu giá trị là NaN, "123" ở đây là chuỗi khác NaN nên false */
let result7 = Number.isNaN("123");
/* tham số là NaN nên true*/
let result8 = Number.isNaN(NaN);


console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);