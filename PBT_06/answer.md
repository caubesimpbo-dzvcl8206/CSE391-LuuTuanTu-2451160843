TRACK A

Câu A1

1. Layout 
+ <768px
┌───────┐
│ Box 1 │
├───────┤
│ Box 2 │
├───────┤
│ Box 3 │
├───────┤
│ Box 4 │
└───────┘
+ 768px - 991px
┌───────┬───────┐
│ Box 1 │ Box 2 │
├───────┼───────┤
│ Box 3 │ Box 4 │
└───────┴───────┘
+ ≥992px
┌────┬────┬────┬────┐
│ B1 │ B2 │ B3 │ B4 │
└────┴────┴────┴────┘
2. 
| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|------------|---------|---------------|---------|
| Số cột | 1 cột | 2 cột | 4 cột |
| Box layout | Box 1 xuống hàng, Box 2 xuống hàng... | 2 box mỗi hàng | 4 box cùng 1 hàng |

Câu hỏi thêm:
col-md-6 nghĩa là gì?
Trên màn hình trung bình (md - máy tính bảng, laptop), hộp này sẽ chiếm 6/12 cột (tức là 50% chiều rộng). Kết quả: 4 hộp sẽ chia thành 2 hàng, mỗi hàng 2 hộp.
Tại sao không cần viết col-sm-12?
Vì Bootstrap thiết kế theo chuẩn Mobile-First (ưu tiên màn hình nhỏ). Class col-12 ở đầu sẽ tự động áp dụng cho cả màn hình nhỏ nhất cho đến màn hình cỡ sm. Viết thêm col-sm-12 là dư thừa.

Câu A2:

1. Ý nghĩa class d-none d-md-blockClass này dùng để ẩn/hiển thị phần tử dựa trên kích thước màn hình theo nguyên tắc từ nhỏ đến lớn:d-none (Ẩn toàn bộ): Mặc định ẩn phần tử này trên màn hình nhỏ nhất (Mobile).d-md-block (Hiện từ màn hình vừa): Khi màn hình đạt kích thước Trung bình (md $\ge 768px$) trở lên, phần tử sẽ xuất hiện trở lại dưới dạng khối (display: block).Ẩn khi nào? Trên màn hình Điện thoại (Kích thước cực nhỏ và nhỏ < 768px).Hiện khi nào? Trên màn hình Máy tính bảng, Laptop, Desktop (Kích thước từ md trở lên $\ge 768px$).
2. 5 Spacing Utilities (Margin / Padding) phổ biến 
Bootstrap sử dụng công thức: [Loại] [Hướng] - [Mức độ] (Mức độ từ 0 đến 5, dựa trên đơn vị rem).- mt-3 (Margin Top 3): Đẩy căn lề phía trên bên ngoài một khoảng bằng 1rem (thường là $16px$).- - px-4 (Padding X 4): Tạo khoảng trống bên trong về cả 2 phía Trái và Phải (Trục X) một khoảng bằng 1.5rem ($24px$). 
- mb-auto (Margin Bottom Auto): Tự động đẩy căn lề phía dưới bên ngoài để chiếm trọn khoảng trống còn lại. Thường dùng trong Flexbox để đẩy các phần tử khác về hai đầu.
- ms-2 (Margin Start 2): Đẩy căn lề bên trái bên ngoài (Start thay thế cho Left để hỗ trợ các ngôn ngữ đọc từ phải sang trái) một khoảng bằng 0.5rem ($8px$).
- py-5 (Padding Y 5): Tạo khoảng trống bên trong về cả 2 phía Trên và Dưới (Trục Y) một khoảng lớn nhất bằng 3rem ($48px$).
3. 

- .container
```html
<div class="container">
``` 
+ Có chiều rộng giới hạn theo breakpoint
+ Giữa màn hình
+ Desktop không full màn hình

+ → Dùng phổ biến nhất.

- .container-fluid
```html
<div class="container-fluid">
``` 
+ Luôn rộng 100%
+ Full chiều ngang màn hình

+ → Dùng cho banner, hero section.

- .container-md
```html
<div class="container-md">
``` 
+ Mobile: full width
+ Từ md (≥768px) trở lên:
+ Có max-width giống .container
+ → Responsive linh hoạt hơn.

Phần C
Câu C1:
Quy trình đổi màu $primary bằng SASS:

1,Công cụ cần: Node.js (để cài Bootstrap qua npm) và một trình biên dịch SASS (như extension Live Sass Compiler trong VS Code).

2,File cần modify: Tạo và sửa duy nhất 1 file SCSS tùy chỉnh của bạn (ví dụ: main.scss).

3,Cách viết trong file: Định nghĩa lại màu trước, import Bootstrap sau:

SCSS
$primary: #E63946; // Ghi đè mã màu mới
@import "node_modules/bootstrap/scss/bootstrap"; // Import gốc
Kết quả: Biên dịch file này ra file .css thông thường rồi nhúng vào HTML.

Tại sao KHÔNG nên ghi đè bằng CSS truyền thống?

Bị sót giao diện: Màu $primary không chỉ dùng cho nút (.btn-primary) mà còn tự động sinh ra hàng trăm class khác (text-primary, bg-primary, màu viền ô input khi click, màu trạng thái hover, focus...). Sửa bằng CSS tay sẽ không thể hết và làm giao diện bị chắp vá, nửa xanh nửa đỏ.

Mất tính năng tự động tương phản: SASS của Bootstrap tự tính toán nếu nền màu $primary tối thì chữ tự chuyển sang trắng, nền sáng chữ tự chuyển sang đen. Viết CSS tay bạn phải tự mò và sửa thủ công từng màu chữ.

Làm nặng code: Ép trình duyệt phải tải màu mặc định cũ rồi lại tải thêm code CSS mới của bạn để đè lên, gây lãng phí dung lượng.

Câu C2:

CSS
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background: black;
}

.nav-links {
    display: flex;
    gap: 16px;
}

.card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
}

.card img {
    width: 100%;
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
    }

    .nav-links {
        flex-direction: column;
    }
}
Bootstrap
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
        <a class="navbar-brand" href="#">Shop</a>
    </div>
</nav>

<div class="card" style="width: 18rem;">
    <img src="image.jpg" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">iPhone 16</h5>
        <p class="card-text">25.990.000đ</p>
    </div>
</div>
So Sánh

Số dòng CSS cần viết: CSS thuần Nhiều hơn
Thời gian phát triển: CSS thuần Chậm hơn
Khả năng tùy biến: CSS thuần linh hoạt hơn
Khi nào nên dùng Bootstrap
Dự án nhỏ
Prototype
Người mới học frontend

Khi nào không nên dùng Bootstrap

Website cần design riêng biệt
UI phức tạp
Project lớn