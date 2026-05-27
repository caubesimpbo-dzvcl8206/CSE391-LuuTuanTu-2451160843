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

Phần C

Câu C1:

- Lỗi 1 — Không kiểm tra input có phải số hay không
Vấn đề
tinhGiaGiamGia("100000", 20)

"100000" là string, không phải number.

JavaScript vẫn tự ép kiểu nên code chạy được, nhưng dễ gây lỗi về sau.

Cách sửa

Kiểm tra kiểu dữ liệu:

if (typeof giaBan !== "number" || typeof phanTramGiam !== "number") {
    return "Input phải là số"
}

- Lỗi 2 — Dùng var thay vì let hoặc const
Vấn đề
var giamGia

var có function scope và dễ gây bug.

Cách sửa
const giamGia = giaBan * phanTramGiam / 100

Vì giá trị không thay đổi nên dùng const.

- Lỗi 3 — Dùng phép gán = thay vì so sánh
Sai
if (giaSauGiam = 0)

Đây là gán giá trị 0 cho giaSauGiam, không phải so sánh.

Hậu quả
giaSauGiam bị đổi thành 0
Điều kiện trả về false
Không bao giờ in "Sản phẩm miễn phí!"
Cách sửa
if (giaSauGiam === 0)

- Lỗi 4 — Thiếu dấu ;

Không bắt buộc trong JS nhưng dễ gây lỗi khi code lớn.

Ví dụ:

return "Phần trăm giảm không hợp lệ"
Cách sửa
return "Phần trăm giảm không hợp lệ";

- Lỗi 5 — Hàm có thể trả về string hoặc number
Vấn đề
return "Phần trăm giảm không hợp lệ"

và:

return giaSauGiam

Một lúc trả string, một lúc trả number → khó xử lý.

Cách sửa tốt hơn

Có thể:

throw Error
hoặc luôn return object

Ví dụ đơn giản:

return null;

hoặc:

throw new Error("Phần trăm giảm không hợp lệ");

- Lỗi 6 — Bug “ẩn” với var trong vòng lặp
Code lỗi
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
User thường nghĩ output là
Item 0
Item 1
Item 2
Item 3
Item 4
Nhưng thực tế là
Item 5
Item 5
Item 5
Item 5
Item 5
Vì sao?
var có function scope

Sau khi vòng lặp kết thúc:

i = 5

setTimeout chạy sau 1 giây nên tất cả callback đều dùng cùng biến i.

- Cách sửa bằng let
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
