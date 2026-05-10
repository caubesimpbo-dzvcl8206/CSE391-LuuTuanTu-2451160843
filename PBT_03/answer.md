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

Câu B1:
- Các loại selector đã sử dụng
1, Element selector
- body
- table
- footer

2, Class selector
- .profile-section
- .active

3, ID selector
- #main-header

4, Descendant selector
- nav a

5, Pseudo-class selector
- nav a:hover
- tr:hover
- tr:nth-child(even)

Câu B2:
Phần 1 — Content-box vs Border-box

Hộp 1 (content-box)
- Width CSS: 300px
- Padding: 20px trái + 20px phải
- Border: 5px trái + 5px phải
Chiều rộng thực tế:
300 + 20 + 20 + 5 + 5 = 350px
=> Hộp 1 (content-box): chiều rộng thực tế = 350px

Hộp 2 (border-box)

Width đã bao gồm:
- content
- padding
- border
=> Hộp 2 (border-box): chiều rộng thực tế = 300px

Giải thích sự khác biệt
- content-box:
  width chỉ tính phần content.
  Padding và border được cộng thêm ra ngoài.

- border-box:
  width đã bao gồm content + padding + border.
  Kích thước render thực tế không tăng thêm.

Phần 2 — Layout 3 cột
Trường hợp KHÔNG dùng border-box
Sidebar:
250 + 15 + 15 + 1 + 1 = 282px
Content:
500 + 20 + 20 + 1 + 1 = 542px
Ads:
250 + 15 + 15 + 1 + 1 = 282px
Tổng:
282 + 542 + 282 = 1106px
=> Layout bị vượt quá 1000px

Trường hợp dùng border-box
Các cột giữ nguyên:
250 + 500 + 250 = 1000px
Padding và border nằm bên trong width.
=> Layout đúng 1000px

Câu B3:
10 Rules + Specificity
Rule	Selector	          Specificity
1	    p	                  (0,0,1)
2	    .text	              (0,1,0)
3	    .highlight	          (0,1,0)
4	     p.text	              (0,1,1)
5	     p.highlight	      (0,1,1)
6	     .text.highlight	  (0,2,0)
7	     p.text.highlight	  (0,2,1)
8	     #demo	              (1,0,0)
9	     p#demo	              (1,0,1)
10	     p#demo.text.highlight (1,2,1)

Element cuối cùng hiển thị màu gì?
Màu cuối cùng: gold
Lý do:
Rule số 10 có specificity lớn nhất:
(1,2,1)
CSS sẽ ưu tiên selector có specificity cao hơn tất cả selector khác.
Nếu thay đổi thứ tự rules trong file CSS thì sao?
Trường hợp specificity khác nhau
Kết quả KHÔNG đổi.

Ví dụ:
#demo vẫn thắng .text
p#demo.text.highlight vẫn thắng tất cả
vì specificity cao hơn.

Trường hợp specificity bằng nhau
Thứ tự mới có ảnh hưởng.
Ví dụ:
.text {
    color: blue;
}

.highlight {
    color: green;
}
Cả hai đều có specificity:
(0,1,0)
Rule viết sau sẽ thắng.
Nếu .highlight viết sau .text
→ màu xanh lá.
Nếu .text viết sau .highlight
→ màu xanh dương.

Câu C1:
1, Tính chiều rộng thực tế
Sidebar
content-box ⇒ width KHÔNG gồm padding + border
width: 300
padding-left + right: 20 + 20 = 40
border-left + right: 1 + 1 = 2

Tổng:
300+40+2=342px
→ Sidebar thực tế = 342px

Content
width: 660
padding-left + right: 30 + 30 = 60
border-left + right: 1 + 1 = 2

Tổng:
660+60+2=722px
→ Content thực tế = 722px

2, Tại sao layout bị vỡ?

Tổng chiều rộng:
342+722=1064px
Trong khi container chỉ:
960px

→ Tổng lớn hơn container.
→ Browser không đủ chỗ đặt 2 block cùng hàng.
→ .content bị đẩy xuống dòng mới.

3, Hai cách sửa
Cách 1 — Dùng border-box
Ý tưởng:
width sẽ bao gồm:
content
padding
border

Khi đó:
sidebar = đúng 300px
content = đúng 660px

Tổng:
300+660=960px

Cách 2 — Không dùng border-box
Giữ content-box, nhưng giảm width content.

Ta cần:
960−342=618px

Content đang có:
padding: 60
border: 2
Nên width content phải:
618−60−2=556px

→ đổi:
.content {
    width: 556px;
}

Câu C2:
1, “Sản phẩm A” (h2.title.highlight)

HTML:
<h2 class="title highlight">Sản phẩm A</h2>
Font-size
Các rule liên quan:
body { font-size: 16px; }
.container { font-size: 14px; }
.card .title { font-size: 20px; }
Cascade:
body → 16px
.container → 14px (inherit xuống)
.card .title → 20px (áp trực tiếp lên h2)
Rule .card .title thắng inheritance.
→ font-size = 20px

Color
Các rule liên quan:
.card { color: blue; }
#featured .title { color: red; }
.highlight { color: green !important; }
Cascade:
.card
→ color: blue (inherit)
#featured .title
→ color: red
.highlight
→ color: green !important
!important ưu tiên cao nhất.
→ color = green
Kết quả
"Sản phẩm A"
font-size: 20px
color: green

2, “Mô tả sản phẩm” (p trong featured card)
HTML:
<p>Mô tả sản phẩm</p>
Color
Rule liên quan:
.card {
    color: blue;
}

.card p {
    color: inherit;
}
Quá trình inheritance
.card có:
color: blue;
nên toàn bộ text bên trong card sẽ kế thừa màu xanh.
Sau đó:
.card p {
    color: inherit;
}

inherit nghĩa là:
→ lấy color từ parent (.card)
→ parent = blue
→ color = blue
Kết quả
"Mô tả sản phẩm"
color: blue

3, “Sản phẩm B” (h2.title)

HTML:
<h2 class="title">Sản phẩm B</h2>
Font-size
Rule:
.card .title {
    font-size: 20px;
}
→ áp trực tiếp lên h2
→ font-size = 20px
Color
Không có:
#featured .title
vì h2 này không nằm trong #featured
Nên color được inherit từ:
.card {
    color: blue;
}
→ color = blue

Kết quả
"Sản phẩm B"
font-size: 20px
color: blue

4, “Mô tả sản phẩm B” (p.highlight)

HTML:
<p class="highlight">Mô tả sản phẩm B</p>
Color
Rules:
.card p {
    color: inherit;
}
.highlight {
    color: green !important;
}
Cascade
.card p
→ color: inherit
→ nhận blue từ .card

Nhưng:
.highlight {
    color: green !important;
}
có !important
→ thắng hoàn toàn.
→ color = green
Kết quả
"Mô tả sản phẩm B"
color: green