Phần A

Câu A1 

1. 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
- Giải thích:
+ width=device-width: chiều rộng trang bằng chiều rộng màn hình thiết bị.
+ initial-scale=1.0: mức zoom ban đầu là 100%.

2.
- iPhone sẽ xem trang như website desktop rồi tự thu nhỏ lại.
- Kết quả:
+ chữ rất nhỏ
+ phải zoom để đọc
+ layout bị khó nhìn trên mobile

3. 
- Mobile-First 
+ Viết CSS cho mobile trước.

.col {
    width: 100%;
}

@media (min-width: 768px) {
    .col {
        width: 50%;
    }
}

- Desktop-First
+ Viết CSS cho desktop trước.

.col {
    width: 50%;
}

@media (max-width: 768px) {
    .col {
        width: 100%;
    }
}

- Tại sao Mobile-First được khuyên dùng?
+ Mobile có nhiều người dùng hơn
+ Tải ít CSS hơn → nhanh hơn
+ Responsive dễ quản lý hơn
+ Phù hợp xu hướng hiện nay

Câu A2:

| Breakpoint | Pixel | Thiết bị | Ví dụ grid |
|---------------------|--------------------|---------------------|--------------------|
| Extra small | <576px | Điện thoại | 1 cột |
| Small | ≥576px | Điện thoại lớn | 2 cột |
| Medium | ≥768px | Tablet | 2-3 cột |
| Large | ≥992px | Laptop | 3-4 cột |
| Extra large | ≥1200px | Desktop lớn | 4-5 cột |

Câu A3:

| Chiều rộng màn hình | `.container` width |
|---------------------|--------------------|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

Câu A4:

1. 
- Dùng biến để lưu màu, font, kích thước.
```html
$primary: blue;

h1 {
    color: $primary;
}
``` 

2. Nesting
- Viết CSS lồng nhau theo cấu trúc HTML.
```html
nav {
    a {
        color: red;
    }
}
``` 

3. Mixins
- Tạo đoạn CSS dùng lại nhiều lần.
```html
@mixin button {
    padding: 10px;
    border-radius: 5px;
}
.btn {
    @include button;
}
``` 

4. @extend
- Kế thừa style từ class khác.
```html
.box {
    padding: 20px;
}

.card {
    @extend .box;
}
``` 

- Tại sao  trình duyệt không đọc được .scss?
+ Vì SCSS không phải CSS chuẩn, trình duyệt chỉ đọc được .css
+ huyển SCSS → CSS  cần compile

Câu B3

Dùng variables để quản lý màu sắc, spacing, font dễ hơn.
Dùng nesting để CSS giống cấu trúc HTML.
Dùng mixins để tái sử dụng code responsive, flex, shadow.
Dùng partials để chia nhỏ file SCSS dễ quản lý.
Lệnh compile: sass style.scss style.css

Câu C1

Mobile (375px)
Navigation thu gọn, menu nhỏ hơn.
Nhiều mục bị ẩn để tiết kiệm không gian.
Nội dung hiển thị 1 cột.
Font nhỏ hơn desktop.
Sidebar/quảng cáo gần như bị ẩn.
Tablet (768px)
Navigation hiển thị nhiều mục hơn mobile.
Content bắt đầu chia 2 cột.
Một số tin phụ xuất hiện lại.
Font lớn hơn mobile.
Desktop (1440px)
Navigation đầy đủ ngang màn hình.
Trang chia nhiều cột:
Tin chính
Tin phụ
Quảng cáo/sidebar
Hiển thị thêm nhiều nội dung phụ.
Font và khoảng cách lớn hơn.

Câu C2

1. Mobile
┌──────────────────────┐
│ LOGO     ☎ Hotline   │
├──────────────────────┤
│     HERO IMAGE       │
├──────────────────────┤
│    ẢNH MÓN ĂN        │
│      (1 cột)         │
├──────────────────────┤
│    FORM ĐẶT BÀN      │
│  ngày / giờ / note   │
├──────────────────────┤
│     GOOGLE MAP       │
├──────────────────────┤
│       FOOTER         │
└──────────────────────┘
- Grid ảnh: 1 cột
- Form nằm dưới gallery
- Một số text phụ có thể ẩn
- Map nằm cuối trang
- Không có sidebar

2. Tablet
┌──────────────────────────────┐
│ LOGO      MENU      HOTLINE │
├──────────────────────────────┤
│         HERO IMAGE           │
├──────────────────────────────┤
│      GRID ẢNH (2 cột)       │
├──────────────┬───────────────┤
│ FORM ĐẶT BÀN │ GOOGLE MAP    │
├──────────────┴───────────────┤
│           FOOTER             │
└──────────────────────────────┘
- Grid ảnh: 2 cột
- Form và map nằm cạnh nhau
- Navigation ngang đơn giản
- Không cần sidebar riêng

3. Desktop 
┌─────────────────────────────────────┐
│ LOGO   MENU NGANG      ☎ HOTLINE   │
├─────────────────────────────────────┤
│             HERO IMAGE              │
├──────────┬──────────────────┬───────┤
│ FILTER   │ GRID ẢNH 3 cột  │ MAP   │
│ SIDEBAR  │                  │       │
├──────────┴──────────────────┴───────┤
│           FORM ĐẶT BÀN              │
├─────────────────────────────────────┤
│               FOOTER                │
└─────────────────────────────────────┘
- Layout 3 cột
- Grid ảnh: 3 cột
- Có sidebar filter/menu
- Map đặt bên phải
- Form rộng phía dưới

4. CSS Skeleton
```html
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.header,
.hero,
.gallery,
.booking,
.map,
.footer {
    padding: 20px;
}

.gallery {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

.layout {
    display: block;
}

.sidebar {
    display: none;
}

@media (min-width: 768px) {

    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }

    .booking-map {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
}

@media (min-width: 1024px) {

    .layout {
        display: grid;
        grid-template-columns: 200px 1fr 300px;
        gap: 20px;
    }

    .sidebar {
        display: block;
    }

    .gallery {
        grid-template-columns: repeat(3, 1fr);
    }
}
```