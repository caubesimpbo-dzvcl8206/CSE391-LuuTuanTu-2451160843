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

Phần C

Câu C1:
1. Navigation bar ngang (Logo + Menu + Buttons)Lựa chọn: FlexboxGiải thích ngắn gọn: Thanh điều hướng là layout dàn hàng theo 1 chiều (chiều ngang). Flexbox xử lý cực tốt việc căn giữa các phần tử theo chiều dọc (align-items: center) và tự động phân bổ khoảng trống linh hoạt giữa các cụm (justify-content: space-between).
2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)Lựa chọn: GridGiải thích ngắn gọn: Đây là layout 2 chiều (cả hàng và cột) tạo thành một hệ thống lưới hoàn hảo. Với CSS Grid, bạn chỉ cần định nghĩa số cột cố định bằng grid-template-columns: repeat(3, 1fr);, các ảnh mới khi tải thêm vào sẽ tự động xếp vào ô tiếp theo và tự rớt dòng mà không cần tính toán lề hay lo bị lệch dòng.
3. Layout blog: Main content + SidebarLựa chọn: Grid (hoặc Flexbox tùy độ phức tạp, nhưng Grid tối ưu hơn cho bộ khung lớn)Giải thích ngắn gọn: Bản chất của cấu trúc trang (Page Layout) tổng thể thường dựa trên các vùng cố định. Dùng Grid giúp bạn quy hoạch rõ ràng độ rộng của hai vùng bằng grid-template-columns: 1fr 300px; (hoặc tỷ lệ phần trăm) và dễ dàng kiểm soát khoảng cách giữa chúng bằng thuộc tính gap mà không lo vỡ bố cục khi thay đổi nội dung bên trong.
4. Footer với 4 cột thông tinLựa chọn: Grid (Dành cho layout cố định) hoặc Flexbox (Nếu muốn co giãn sang thiết bị di động) $\rightarrow$ Grid được khuyến khích hơn cho màn hình lớn.Giải thích ngắn gọn: Việc chia chính xác 4 cột có độ rộng bằng nhau hoặc theo tỷ lệ cố định là thế mạnh của Grid (grid-template-columns: repeat(4, 1fr);). Nó đảm bảo các cột thẳng hàng tuyệt đối từ trên xuống dưới. Tuy nhiên, khi chuyển sang màn hình nhỏ (Responsive), Grid đổi sang repeat(2, 1fr) hoặc 1fr cực kỳ gọn gàng.
5. Card sản phẩm (Ảnh trên, Text giữa, Nút dưới — Nút luôn dính đáy)Lựa chọn: FlexboxGiải thích ngắn gọn: Đây là layout sắp xếp theo 1 chiều dọc (flex-direction: column). Flexbox là lựa chọn hoàn hảo vì khi tên sản phẩm ở phần text giữa có độ dài ngắn khác nhau, bạn chỉ cần đặt thuộc tính margin-top: auto; cho nút bấm ở dưới cùng. Cơ chế của Flexbox sẽ tự động đẩy nút đó dính chặt vào đáy của card sản phẩm, giúp các nút bấm ở các card bên cạnh luôn thẳng hàng với nhau.