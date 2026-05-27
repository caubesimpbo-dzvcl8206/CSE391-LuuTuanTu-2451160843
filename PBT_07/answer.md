Phần A

Câu A1:
- Đoạn 1
console.log(x);
var x = 5;
Dự đoán output
undefined
Giải thích
var được hoisting (đưa khai báo lên đầu).
JavaScript hiểu gần giống:
var x;
console.log(x);
x = 5;
Biến tồn tại nhưng chưa gán giá trị nên là undefined.

- Đoạn 2
console.log(y);
let y = 10;
Dự đoán output
ReferenceError: Cannot access 'y' before initialization
Giải thích
let cũng được hoisting nhưng nằm trong Temporal Dead Zone (TDZ).
Không thể truy cập biến trước khi dòng khai báo chạy xong.

- Đoạn 3
const z = 15;
z = 20;
console.log(z);
Dự đoán output
TypeError: Assignment to constant variable.
Giải thích
const không cho phép gán lại giá trị.
Chương trình lỗi ngay ở dòng:
z = 20;

nên console.log(z) không chạy.

- Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
Dự đoán output
[1, 2, 3, 4]
Giải thích
const không cho đổi tham chiếu của biến.
Nhưng vẫn có thể thay đổi nội dung object/array.

Ví dụ bị lỗi:

arr = [5,6];

Nhưng thao tác:

arr.push(4);

thì hợp lệ.

- Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
Dự đoán output
Trong block: 2
Ngoài block: 1
Giải thích
let có block scope.
Biến a bên trong {} là biến khác với a bên ngoài.

Câu A2:

- console.log(typeof null);        // "object"
- console.log(typeof undefined);   // "undefined"
- console.log(typeof NaN);         // "number"
- console.log("5" + 3);            // "53"
- console.log("5" - 3);            // 2
- console.log("5" * "3");          // 15
- console.log(true + true);        // 2
- console.log([] + []);            // ""
- console.log([] + {});            // "[object Object]"
- console.log({} + []);            // "[object Object]"
- Giải thích
+ "5" + 3 = "53" vì dấu + dùng để nối chuỗi, "5" là string, 3 bị đổi thành "3" , nối lại thành "53"
+ "5" - 3 = 2 vì dấu - chỉ dùng cho toán học, 5 - 3 = 2

Câu A3

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN == NaN); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
Giải thích
== so sánh giá trị, JavaScript tự ép kiểu dữ liệu
=== so sánh cả giá trị và kiểu dữ liệu, JavaScript không tự ép kiểu dữ liệu
Nên dùng
=== vì chính xác hơn, không bị lỗi do ép kiểu

Câu A4

Các giá trị falsy
false
0
-0
0n
""
null
undefined
NaN
document.all
Đáp án
if ("0") console.log("A"); // In
if ("") console.log("B"); // Không in
if ([]) console.log("C"); // In
if ({}) console.log("D"); // In
if (null) console.log("E"); // Không in
if (0) console.log("F"); // Không in
if (-1) console.log("G"); // In
if (" ") console.log("H"); // In
Kết quả
A
C
D
G
H

Câu A5

// Cách 1
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
// Cách 2
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
// Cách 3
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;