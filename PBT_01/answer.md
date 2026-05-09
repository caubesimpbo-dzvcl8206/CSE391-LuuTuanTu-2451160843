Phần A: Kiểm tra đọc hiểu

Câu A1:
-Các bước khi truy cập https://shopee.vn:
1,Request của Minh xuất phát từ laptop → đi qua router WiFi nhà trọ
2,Qua nhà mạng VNPT → chạy xuyên cáp quang dưới đáy Thái Bình Dương
3,Đến data center của Shopee
4,Server xử lý: "Bạn muốn xem trang chủ Shopee"
5,Response chạy ngược lại: cáp quang → VNPT → router → laptop
6,Chrome nhận file HTML, CSS, JS → render ra giao diện → Minh thấy Shopee
Nguồn tham khảo: 01_introduction_html_universe.md phần "Cuộc hành trình 0.3 giây"
-Tab Network hiển thị:
Danh sách các request
Status Code
Loại tài nguyên
Thời gian tải
Kích thước file
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

Câu B3
-Lỗi 1: Dòng 1 — Thiếu !DOCTYPE html — Sửa !DOCTYPE thành !DOCTYPE html
-Lỗi 2: Dòng 4 — Thẻ title không đóng — Thêm /title
-Lỗi 3: Dòng 5 — Sai charset utf8 — Sửa thành UTF-8
-Lỗi 4: Dòng 8 — Thẻ h1 không đóng — Sửa thành /h1
-Lỗi 5: Dòng 12 — Thẻ a không đóng — Thêm /a
-Lỗi 6: Dòng 20 — Ảnh thiếu dấu ngoặc kép và thiếu alt — Thêm src="..." và alt
-Lỗi 7: Dòng 22 — Sai thứ tự thẻ b — Sửa thành strong đúng vị trí
-Lỗi 8: Dòng 31 — Table không có thead — Thêm thead
-Lỗi 9: Dòng 29,30 — Table dùng td cho header — Sửa thành th
-Lỗi 10: Dòng 40 — Dùng 2 thẻ main — Thay cái thứ 2 bằng aside
-Lỗi 11: Dòng 45 — Thẻ p trong footer không đóng — Thêm /p
-Lỗi 12: Thiếu ngôn ngữ trong html — Thêm lang="vi"

Câu B4:
3 thẻ semantic HTML5 mà trang đó sử dụng là:
-<header>:Thẻ này được dùng để chứa các thành phần đầu trang như logo, thanh tìm kiếm.
-<noscript>Thẻ semantic dùng để hiển thị nội dung thay thế cho những người dùng tắt trình chạy JavaScript.
-<header> (bên trong header-top-bar): Thẻ đầu trang để định danh khu vực quan trọng.
2 thẻ mà trang đó không dùng đúng semantic:
-Thẻ <div>
-Thẻ <i> cho icon

-Bảng này hiển thị Bảng so sánh thông số kỹ thuật và các mẫu điện thoại
-Có dùng <tbody> nhưng không dùng <thead>

-action: Giá trị là "/tim-kiem", method: thẻ <form> trên hình không hiển thị thuộc tính method.

Các loại input được dùng là:
-type="text"
-type="submit" 
-type="hidden"

Câu C1:
<!-- header: phần đầu trang -->
<header>
    <!-- nav: menu điều hướng -->
    <nav>
        <a href="#">Trang chủ</a>
        <a href="#">Sản phẩm</a>
        <a href="#">Liên hệ</a>
    </nav>
</header>

<main> <!-- main: nội dung chính -->

    <!-- breadcrumb: điều hướng đường dẫn -->
    <nav aria-label="breadcrumb"> <!-- nav vì là điều hướng -->
        <ol> <!-- ol vì có thứ tự -->
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <!-- khu vực ảnh sản phẩm -->
    <section>
        <h2>Ảnh sản phẩm</h2>

        <div> <!-- div: nhóm nhiều ảnh -->
            <img src="https://placehold.co/200" alt="ảnh 1">
            <img src="https://placehold.co/200" alt="ảnh 2">
            <img src="https://placehold.co/200" alt="ảnh 3">
            <img src="https://placehold.co/200" alt="ảnh 4">
            <img src="https://placehold.co/200" alt="ảnh 5">
        </div>
    </section>

    <!-- thông tin sản phẩm -->
    <section>
        <h1>iPhone 16</h1> <!-- h1: tên sản phẩm chính -->
        <p>Giá: 36.990.000đ</p>
        <p>Đánh giá: ⭐⭐⭐⭐☆</p>
        <p>Mô tả sản phẩm...</p>
    </section>

    <!-- bảng thông số -->
    <section>
        <h2>Thông số kỹ thuật</h2>

        <table border="1"> <!-- table: dữ liệu dạng bảng -->
            <tr>
                <th>Thông số</th>
                <th>Chi tiết</th>
            </tr>
            <tr>
                <td>Màn hình</td>
                <td>6.7 inch</td>
            </tr>
            <tr>
                <td>Camera</td>
                <td>48MP</td>
            </tr>
        </table>
    </section>

    <!-- đánh giá / bình luận -->
    <section>
        <h2>Đánh giá</h2>

        <article> <!-- article: 1 bình luận -->
            <p>Người dùng A: Sản phẩm tốt</p>
        </article>

        <article>
            <p>Người dùng B: Đáng mua</p>
        </article>
    </section>

</main>

<!-- sidebar -->
<aside> <!-- aside: nội dung phụ -->
    <h2>Sản phẩm tương tự</h2>

    <article>
        <p>iPhone 15</p>
    </article>

    <article>
        <p>Samsung S24</p>
    </article>
</aside>

<!-- footer -->
<footer>
    <p>© 2026 Shop</p>
</footer>

Câu C2:
Việc lạm dụng thẻ <div> thay vì Semantic HTML là một tư duy phổ biến nhưng lại là rào cản lớn đối với sự phát triển chuyên nghiệp của một lập trình viên. Dưới đây là những lý do tại sao đồng nghiệp của bạn nên cân nhắc lại:

1.Lý do kỹ thuật: SEO và Accessibility
Về mặt SEO, các công cụ tìm kiếm như Google sử dụng robot để "quét" nội dung. Nếu mọi thứ đều là <div>, robot sẽ khó xác định đâu là nội dung chính (<main>), đâu là bài viết quan trọng (<article>) hay thanh điều hướng (<nav>). Sử dụng Semantic HTML giúp trang web được định chỉ mục (indexing) chính xác hơn, từ đó cải thiện thứ hạng tìm kiếm.

Về Accessibility (Khả năng tiếp cận), những người khiếm thị sử dụng trình đọc màn hình (Screen Reader) để lướt web. Trình đọc màn hình dựa vào các thẻ semantic để thông báo cho người dùng biết họ đang ở đâu (ví dụ: "Đang ở vùng điều hướng"). Nếu toàn bộ là <div>, trình đọc chỉ thấy một khối văn bản phẳng, khiến trải nghiệm của người dùng khuyết tật trở nên cực kỳ khó khăn