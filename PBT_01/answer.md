Phần A: Kiểm tra đọc hiểu

Câu A1:
Các bước khi truy cập https://shopee.vn:
B1.Trình duyệt gửi request từ client
B2.Request đi qua router → nhà mạng → Internet
B3.Server nhận request tại data center
B4.Server xử lý yêu cầu
B5.Server trả về response
B6.Trình duyệt nhận dữ liệu
B7.Render giao diện trên màn hình
Nguồn tham khảo: 01_introduction_html_universe.md phần "Cuộc hành trình 0.3 giây"
Tab Network hiển thị:
Danh sách các request
Status Code
Loại tài nguyên
Thời gian tải
Kích thước file
Ảnh trong screenshots
Nguồn tham khảo: 01_introduction_html_universe.md phần 4.3. Developer Tools (F12) — "Kính hiển vi" cho website

Câu A2
Lỗi:
Dùng div thay vì header, nav, main, footer
Không có article cho sản phẩm
Không có thẻ heading h1
Ảnh không có alt
Nguồn: 04_visible_part_html.md phần Semantic HTML5 — "Thẻ có ý nghĩa”
Sửa:
<header>
    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>
<main>
    <article>
        <h1>iPhone 16 Pro</h1>
        <p>25.990.000đ</p>
        <img src="iphone.jpg" alt="iPhone 16 Pro">
    </article>
</main>
<footer>
    © 2026 ShopTLU
</footer>

Câu A3
Kết quả hiển thị:
Hộp 1

Text A Text B

Hộp 2

Text C Text D

Hộp 3

Giải thích:
div là block-Chiếm cả dòng
span và strong là inline-Chỉ chiếm nội dung
Nguồn tham khảo: 04_visible_part_html.md phần Block vs Inline — Hai loại element cơ bản

Câu A4 
1.Khác nhau:
thead: Tiêu đề cột
tbody: Dữ liệu chính
tfoot: Tổng kết
Nguồn tham khảo: 05_tables_hyperlinks.md phần Table — Bảng dữ liệu
Không nên dùng table để layout vì:
-Khó bảo trì
-Kém linh hoạt
-Sai mục đích (table chỉ dùng cho hàng cột)