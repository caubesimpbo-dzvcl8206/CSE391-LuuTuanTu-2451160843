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

Câu A2:
1,h1
Chọn:"ShopTLU"
2,price
Chọn:
"25.990.000đ"
"45.990.000đ"
3,#app header
Chọn toàn bộ thẻ <header> bên trong id="app" có text content:
"ShopTLU Home Products About"
4,nav a:first-child
Chọn: "Home"
5,product.featured h2
Chọn: "MacBook Pro"
6,article > p
Chọn tất cả thẻ <p> là con trực tiếp của <article>:
"25.990.000đ"
"Mô tả sản phẩm..."
"45.990.000đ"
"Mô tả sản phẩm..."
7,a[href="/"]
Chọn: "Home"
8,top-bar.dark h1
Chọn: "ShopTLU"

Câu A3:
Trường hợp 1: content-box (mặc định)
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
Trong content-box:
width chỉ tính content
padding và border được cộng thêm ra ngoài
Công thức:
Rendered width=width+padding−left+padding−right+border−left+border−right
=400+20+20+5+5=450px
→ Chiều rộng hiển thị = 450px
Không gian chiếm trên trang còn tính cả margin:
450+10+10=470px
→ Không gian chiếm trên trang = 470px

Trường hợp 2: border-box
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
Trong border-box:
width đã bao gồm:
content
padding
border
Nên:
→ Chiều rộng hiển thị = 400px
Kích thước content thực tế:
400−(20+20)−(5+5)
=400−40−10=350px
→ Kích thước content thực tế = 350px
Không gian chiếm trên trang:
400+10+10=420px
→ Không gian chiếm trên trang = 420px

Trường hợp 3: Margin Collapse
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
Hai margin dọc liền nhau sẽ collapse.
Browser KHÔNG cộng:
25+40
Mà chỉ lấy margin lớn hơn:
max(25,40)=40px
→ Khoảng cách giữa box-a và box-b = 40px

Vì sao KHÔNG phải 65px?
Vì theo cơ chế margin collapsing của CSS:
Hai margin theo chiều dọc giữa các block liền kề sẽ gộp lại
Browser chỉ dùng giá trị lớn nhất
Điều này giúp tránh khoảng cách bị “phình to” khi nhiều block xếp chồng.
Nâng cao: margin âm
.box-a { margin-bottom: -10px; }
.box-b { margin-top: 40px; }
Khi có margin âm:
40+(−10)=30px
→ Khoảng cách = 30px

Câu A4:
Rule A
p { color: black; }
ID: 0
Class: 0
Element: 1 (p)
→ Specificity:
(0, 0, 1)

Rule B
.price { color: blue; }
ID: 0
Class: 1 (.price)
Element: 0
→ Specificity:
(0, 1, 0)

Rule C
#main-price { color: red; }
ID: 1
Class: 0
Element: 0
→ Specificity:
(1, 0, 0)

Rule D
p.price { color: green; }
ID: 0
Class: 1 (.price)
Element: 1 (p)
→ Specificity:
(0, 1, 1)

Element sẽ có màu gì?
<p class="price" id="main-price">
Element match tất cả rules.

So specificity:
Rule	Score
A	(0,0,1)
B	(0,1,0)
C	(1,0,0)
D	(0,1,1)

CSS ưu tiên:
!important
Specificity lớn hơn
Nếu bằng nhau → rule viết sau thắng

So sánh:
(1,0,0)
lớn hơn tất cả.
→ Rule C thắng.
→ Màu cuối cùng: đỏ (red)

Nếu thêm inline style
<p class="price" id="main-price" style="color: orange;">

Inline style có specificity đặc biệt:
(1, 0, 0, 0)
cao hơn selector thường.
→ Element sẽ có:
→ Màu cam (orange)

Nếu Rule A thêm !important
p { color: black !important; }
Thì thứ tự ưu tiên đổi thành:
!important
specificity

Dù Rule A specificity thấp hơn, nhưng có !important.
→ Rule A thắng tất cả rule thường.
→ Màu cuối cùng: đen (black)