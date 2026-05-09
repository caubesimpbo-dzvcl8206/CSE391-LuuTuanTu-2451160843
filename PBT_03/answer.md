Câu A1:
3 cách nhúng CSS vào trong thẻ:
Cách 1, Inline CSS (trong thẻ)
<h1 style="color: red; font-size: 24px;">Tiêu đề</h1>
+ Ưu điểm: Nhanh, tiện khi muốn test nhanh một thuộc tính hoặc ghi đè (override) các style khác.
+ Nhược điểm: Làm code HTML trở nên rối rắm, khó bảo trì và không thể tái sử dụng cho các thẻ khác.
+ Khi nào nên dùng: Khi bạn chỉ muốn thay đổi style cho duy nhất một phần tử và không muốn tạo file mới hay viết lên đầu trang.
Cách 2, Internal CSS (trong <style>) — Chấp nhận được cho prototype
<head>
    <style>
        h1 { color: red; font-size: 24px; }
    </style>
</head>
+ Ưu điểm: Kiểm soát tất cả style của một trang duy nhất tại một nơi. Không cần quản lý thêm file bên ngoài.
+ Nhược điểm: Nếu website có nhiều trang (Home, About, Contact...), bạn sẽ phải copy đoạn code này sang từng trang, rất mất công khi muốn sửa đổi chung.
+ Khi nào nên dùng: Khi website của bạn chỉ có duy nhất một trang (Single page) hoặc trang đó có phong cách riêng biệt hoàn toàn với các trang còn lại.
Cách 3, External CSS (file riêng)
<head>
    <link rel="stylesheet" href="styles.css">
</head>
+ Ưu điểm: Chuyên nghiệp nhất. Giúp code HTML sạch sẽ, dễ bảo trì. Một file CSS có thể dùng cho hàng nghìn trang HTML khác nhau, giúp tối ưu tốc độ tải trang (browser cache).
+ Nhược điểm: Tốn thêm một yêu cầu tải file từ server (HTTP request), nếu file CSS lỗi thì trang web mất định dạng hoàn toàn.
+ Khi nào nên dùng: Đây là cách tiêu chuẩn cho mọi dự án thực tế.

Cách nào "thắng"?
Nếu cùng một phần tử bị tác động bởi cả 3 cách, thứ tự ưu tiên (Specificity) sẽ như sau:
1, Inline CSS (Thắng tuyệt đối):** Đây là cách có độ ưu tiên cao nhất vì nó nằm "sát" phần tử nhất.
2, Internal & External CSS:** Hai cách này có độ ưu tiên **ngang nhau**. "Kẻ nào viết sau, kẻ đó thắng". 
    *   Nếu thẻ `<link>` nằm dưới thẻ `<style>`, External sẽ thắng.
    *   Nếu thẻ `<style>` nằm dưới thẻ `<link>`, Internal sẽ thắng.
**Giải thích:**
Trình duyệt đọc code từ trên xuống dưới. Trong CSS, quy tắc **"Cascading"** (Xếp chồng) quy định rằng nếu các lệnh có cùng độ ưu tiên, lệnh nào xuất hiện sau cùng sẽ ghi đè lên các lệnh trước đó. Tuy nhiên, **Inline CSS** được thiết kế đặc biệt để có trọng số cao hơn hẳn để lập trình viên có thể can thiệp trực tiếp vào phần tử mà không bị ảnh hưởng bởi các bộ quy tắc chung.