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
+ huyển SCSS → CSS  cần compile: