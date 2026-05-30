Phần A

Câu A1:

1. Function Declaration
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
}

console.log(tinhThueBaoHiem(15000000));

Kết quả:

{
    thue: 1500000,
    thuc_nhan: 13500000
}

2. Function Expression
const tinhThueBaoHiem = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};

console.log(tinhThueBaoHiem(15000000));

3. Arrow Function
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;

    return {
        thue,
        thuc_nhan: luong - thue
    };
};

console.log(tinhThueBaoHiem(15000000));

Về hoisting, chỉ Function Declaration có thể được gọi trước khi xuất hiện trong mã nguồn. Function Expression và Arrow Function đều phải được khai báo xong rồi mới sử dụng.

Ví dụ:

hello1(); // OK

function hello1() {
    console.log("Declaration");
}

// Function Expression
hello2(); // Error

const hello2 = function() {
    console.log("Expression");
};

// Arrow Function
hello3(); // Error

const hello3 = () => {
    console.log("Arrow");
};

Câu A2:

Đoạn 1

Output:

1
2
3
2
2

Giải thích: count được giữ lại nhờ closure, nên các hàm cùng truy cập và cập nhật một biến count.

Đoạn 2

Sau 100ms:

var: 3
var: 3
var: 3

Sau 200ms:

let: 0
let: 1
let: 2

Giải thích:
var có function scope → chỉ có 1 biến i dùng chung cho tất cả callback. Khi setTimeout chạy, vòng lặp đã kết thúc nên i = 3.
let có block scope → mỗi lần lặp tạo 1 biến j mới. Callback ghi nhớ giá trị riêng của từng lần lặp nên in ra 0, 1, 2.

Câu A3:

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. Lấy các số chẵn                    → [2, 4, 6, 8, 10]
nums.filter(n => n % 2 === 0);
// 2. Nhân mỗi số với 3                  → [3, 6, 9, ..., 30]
nums.map(n => n * 3);
// 3. Tính tổng tất cả                   → 55
nums.reduce((sum, n) => sum + n, 0);
// 4. Tìm số đầu tiên > 7               → 8
nums.find(n => n > 7);
// 5. Kiểm tra CÓ số > 10 không         → false
nums.some(n => n > 10);
// . Kiểm tra TẤT CẢ đều > 0           → true
nums.every(n => n > 0);
// 7. Tạo mảng "Số X là [chẵn/lẻ]"      → ["Số 1 là lẻ", "Số 2 là chẵn", ...]
nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
// 8. Đảo ngược mảng (không mutate gốc)  → [10, 9, ..., 1]
[...nums].reverse();

Câu A4:

console.log(name, price, ram, color);
// iPhone 16 25990000 8 Titan

console.log(specs);
// ReferenceError: specs is not defined

console.log(updated.price);
// 23990000

console.log(updated.sale);
// true

console.log(product.price);
// 25990000

console.log(product.specs.ram);
// 16

Giải thích ngắn gọn:
const { name, price, specs: { ram, color } } = product;
→ chỉ tạo biến name, price, ram, color, không tạo biến specs.
const updated = { ...product, price: 23990000, sale: true };
→ tạo object mới, nên product.price vẫn là 25990000.
const copy = { ...product };
→ Spread chỉ shallow copy. copy.specs và product.specs cùng tham chiếu đến một object con.
copy.specs.ram = 16;

→ product.specs.ram cũng thành 16.