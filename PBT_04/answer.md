Phần A

Câu A1:
Câu 1
| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|---------------------------|-------------------|------------------|----------|
| `static` | Có | Mặc định, "nằm yên tại chỗ" | Có | Mặc định |
| `relative` | Có | Dịch chuyển so với vị trí gốc  | Có | Dịch nhẹ, làm mốc cho absolute |
| `absolute` | Không | Bay ra khỏi layout, bám theo cha relative | Có | Badge, dropdown, tooltip |
| `fixed` | Không | Dính vào viewport | Không | Chat button, modal overlay |
| `sticky` | Có → khi dính Viewport | Bình thường → dính khi scroll | Có → đến ngưỡng → chuyển thành fixed → không| Sticky header, sidebar |

- Câu hỏi thêm:
Khái niệm "Nearest positioned ancestor" là gì?
Trong CSS, Nearest positioned ancestor (Tổ tiên được định vị gần nhất) là phần tử cha, ông, hoặc cụ... bao bọc phần tử hiện tại mà có thuộc tính position được đặt là một trong các giá trị: relative, absolute, fixed, hoặc sticky (tức là khác static).

Khi nào absolute tham chiếu body?
Phần tử mang position: absolute sẽ tham chiếu đến thẻ <body> (hoặc chính xác hơn là <html> - initial containing block) khi tất cả các phần tử cha/tổ tiên bao bọc nó đều có position: static (mặc định), hoặc nó không nằm trong bất kỳ phần tử cha nào khác ngoài body.
Lúc này, tọa độ top: 0; left: 0; sẽ căn theo góc trên cùng bên trái của trang web.

Khi nào absolute tham chiếu parent?
Phần tử mang position: absolute sẽ tham chiếu trực tiếp đến phần tử cha trực tiếp (parent) của nó khi phần tử cha đó có thuộc tính position được set khác static (thông thường người ta hay dùng position: relative cho cha để tạo gốc tọa độ).
Lúc này, tọa độ top: 0; left: 0; sẽ nằm đúng góc trên cùng bên trái của phần tử cha đó.

Câu A2:
/* Trường hợp 1 */
CSS
.container { display: flex; }
.item { flex: 1; } /* 4 items */
Dự đoán Layout: Cả 4 items sẽ nằm trên cùng 1 hàng duy nhất. Nhờ thuộc tính flex: 1 (viết tắt của flex-grow: 1), không gian của container sẽ được chia đều 100% cho 4 items, giúp chúng có độ rộng bằng nhau tăm tắp.

Sơ đồ bố cục:

Plaintext
+-----------------------------------------------------------+
| [ Item 1 (25%) ] [ Item 2 (25%) ] [ Item 3 (25%) ] [ Item 4 (25%) ] |
+-----------------------------------------------------------+

/* Trường hợp 2 */
CSS
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; } /* 6 items */
Dự đoán Layout: Bố cục gồm 3 hàng, mỗi hàng có 2 cột.

Mỗi item chiếm 45% (width) + 2.5%*2 (margin) = 50% tổng độ rộng.

Vì vậy, một hàng vừa khít 2 items. Do có flex-wrap: wrap, các item tiếp theo sẽ tự động đẩy xuống hàng dưới.

Sơ đồ bố cục:

Plaintext
+-----------------------------------------------------------+
|  +--------------+               +--------------+          |
|  |    Item 1    |               |    Item 2    |          |
|  +--------------+               +--------------+          |
|  +--------------+               +--------------+          |
|  |    Item 3    |               |    Item 4    |          |
|  +--------------+               +--------------+          |
|  +--------------+               +--------------+          |
|  |    Item 5    |               |    Item 6    |          |
|  +--------------+               +--------------+          |
+-----------------------------------------------------------+

/* Trường hợp 3 */
CSS
.container { display: flex; justify-content: space-between; align-items: center; } /* 3 items */
Dự đoán Layout: Cả 3 items nằm trên 1 hàng duy nhất.

justify-content: space-between: Item 1 dính sát lề trái, Item 3 dính sát lề phải, Item 2 nằm chính giữa. Khoảng trống giữa các item là bằng nhau.

align-items: center: Cả 3 items sẽ được căn giữa theo chiều dọc của container (nếu container có chiều cao lớn hơn item).

Sơ đồ bố cục:

Plaintext
+-----------------------------------------------------------+
|                                                           |
| [ Item 1 ]               [ Item 2 ]               [ Item 3 ] |
|                                                           |
+-----------------------------------------------------------+

/* Trường hợp 4 */
CSS
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; } /* 3 items */
Dự đoán Layout: Bố cục dạng 3 cột trên 1 hàng (Holy Grail layout).

Cột 1 và cột 3 có độ rộng cố định là 200px.

Cột 2 (ở giữa) sử dụng đơn vị 1fr nên sẽ tự động co giãn để chiếm toàn bộ phần không gian còn lại ở giữa.

Khoảng cách giữa các cột là 20px.

Sơ đồ bố cục:

Plaintext
+-----------------------------------------------------------+
| [ Cột 1: 200px ]  gap  [   Cột 2: Tự co giãn (1fr)   ]  gap  [ Cột 3: 200px ] |
|    (Item 1)      20px         (Item 2)          20px     (Item 3)    |
+-----------------------------------------------------------+

/* Trường hợp 5 */
CSS
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; } /* 7 items */
Dự đoán Layout: Bố cục chia lưới gồm 3 cột và 3 hàng.

Hàng 1: Gồm Item 1, Item 2, Item 3 (mỗi item chiếm 1fr = 1/3 độ rộng lưới).

Hàng 2: Gồm Item 4, Item 5, Item 6.

Hàng 3: Chỉ chứa duy nhất Item 7 nằm ở cột đầu tiên bên trái. Do ta không gộp dòng hay gộp cột, Grid sẽ xếp tuần tự từ trái qua phải, từ trên xuống dưới. Các ô còn lại ở hàng 3 sẽ bỏ trống.

Sơ đồ bố cục:

Plaintext
+-----------------------------------------------------------+
| [   Item 1 (1fr)   ]   [   Item 2 (1fr)   ]   [   Item 3 (1fr)   ] |
|                           gap 10px                        |
| [   Item 4 (1fr)   ]   [   Item 5 (1fr)   ]   [   Item 6 (1fr)   ] |
|                           gap 10px                        |
| [   Item 7 (1fr)   ]   ( Trống )           ( Trống )      |
+-----------------------------------------------------------+