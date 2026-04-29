Câu A!:
1,type="email" → Ô nhập text, tự kiểm tra định dạng có dấu @ → Dùng cho form đăng ký thành viên hoặc nhận bản tin khuyến mãi trên trang E-Commerce.
2,type="password" → Ô nhập văn bản nhưng ẩn ký tự (hiển thị dạng dấu chấm/sao) → Dùng để bảo mật mật khẩu người dùng khi đăng nhập vào hệ thống.
3,type="number" → Ô nhập số, có nút tăng/giảm giá trị ở cạnh → Dùng để chọn số lượng sản phẩm muốn mua trong giỏ hàng.
4,type="tel" → Ô nhập số điện thoại, tự động mở bàn phím số trên thiết bị di động → Dùng để thu thập thông tin liên lạc giao hàng.
5,type="date" → Ô nhập hiển thị bảng chọn lịch (Date picker) → Dùng để khách hàng chọn ngày nhận hàng mong muốn.
6,type="range" → Thanh trượt (slider) để chọn giá trị trong một khoảng → Dùng làm bộ lọc tìm kiếm sản phẩm theo khoảng giá.
7,type="file" → Nút nhấn để mở cửa sổ chọn tệp tin từ thiết bị → Dùng khi khách hàng tải lên ảnh đánh giá sản phẩm.
8,type="checkbox" → Ô tích chọn, cho phép chọn nhiều lựa chọn cùng lúc → Dùng để khách hàng chọn các danh mục quan tâm.
9,type="radio" → Nút chọn hình tròn, chỉ cho phép chọn duy nhất một lựa chọn trong nhóm → Dùng để chọn duy nhất một phương thức thanh toán.
10,type="search" → Ô nhập văn bản có thêm nút "X" để xóa nhanh nội dung → Dùng làm thanh tìm kiếm sản phẩm trên website.

Câu A2:
TH1:
dự đoán : trình duyêt ngăn chặn submit và hiển thị thông báo lỗi
tại sao : do thuộc tính required bắt buộc ô dữ liệu không được để trống, trong khi value= đang là giá trị rỗng

TH2:
dự đoán : Trình duyệt báo lỗi định dạng email không hợp lệ
tại sao : type= email có cơ chế tự động kiểm tra định dạng email cơ bản. Chuỗi "abc" thiếu kí tự @và tên miền nền vi phạm validation.

TH3:
dự đoán : trình duyệt báo lỗi giá trị phải nhỏ hơn hoặc bằng 10
tại sao : thuộc tính max = 10 thiết lập giới hạn cho giá trị nhập vào, nhưng giá trị hiện tại là 15, vượt quá vi phạm cho phép

TH4:
dự đoán : trình duyệt báo lỗi dữ liệu không khớp với định dạng được yêu cầu
tại sao : thuộc tính pantern sử dụng Regular Expresion yêu cầu đúng 10 chữ số từ 0-9. Giá trị "abc123" chứa ký tự chữ và không đủ độ dài nên bị từ chối

TH5:
dự đoán : trình duyệt báo lỗi yêu cầu tăng độ dài văn bản (thường ít nhất 8 ký tự)
tại sao : thuộc tính minlenght = 8 bắt buộ chuỗi nhập vào phải có 8 ký tự trở lên, trong kho 123 chỉ có 3 ký tự
Nguồn tham khảo: 07_forms_interactive.md: Mục HTML5 Validation & Attributes.

Câu A3:
1.Screen reader sẽ đọc nội dung của thẻ <label> khi người dùng focus vào ô nhập liệu, giúp họ biết chính xác ô đó dùng để nhập thông tin gì (ví dụ: "Email").
2.Khi nào dùng: Dùng để nhóm các phần tử có liên quan logic với nhau trong một form lớn, giúp cấu trúc form mạch lạc và dễ hiểu hơn cho cả người dùng bình thường và công cụ hỗ trợ.
Ví dụ cụ thể: Nhóm các thông tin về địa chỉ giao hàng trong form thanh toán:
  <fieldset>
      <legend>Thông tin giao hàng</legend>
      <label for="city">Thành phố:</label>
      <input type="text" id="city" name="city">
      <label for="addr">Địa chỉ chi tiết:</label>
      <input type="text" id="addr" name="addr">
  </fieldset>
3.aria-label: Dùng khi 1 phẩn tử tương tác(button) không có văn bản hiển thị trên màn hình nhưng vẫn cần mô tả cho screen reader vì aria-label sẽ ghi đè nội dung của <label>, có thể gây nhầm lẫn nếu thông tin không khớp nhau
Nguồn tham khảo: 07_forms_interactive.md: Mục Accessibility — Form cho mọi người.

Câu A4:
1.Cơ chế: Thuộc tính này cho phép trình duyệt trì hoãn việc tải hình ảnh cho đến khi người dùng cuộn trang đến gần vị trí của ảnh đó.
Cải thiện: Giúp tăng tốc độ tải trang ban đầu , tiết kiệm băng thông cho người dùng và giảm tải cho server.
Không nên dùng: Không nên dùng cho các ảnh nằm ở phần đầu trang như Banner chính hoặc Logo, vì sẽ làm chậm hiển thị nội dung quan trọng nhất khi vừa mở trang.
2.Khả năng tương thích: Mỗi trình duyệt hỗ trợ các định dạng video khác nhau; việc cung cấp nhiều nguồn giúp đảm bảo video luôn chạy được trên mọi nền tảng.
3 Format video web phổ biến:
1,mp4 (H.264): Phổ biến nhất, hỗ trợ hầu hết trình duyệt.
2,webm: Nhẹ, chất lượng cao, tối ưu cho Chrome và Firefox.
3,ogg: Một định dạng mã nguồn mở khác cho web.
3.Công dụng: Cung cấp văn bản thay thế nếu ảnh bị lỗi không hiển thị và giúp Screen Reader đọc mô tả ảnh cho người khiếm thị.
Viết alt tốt cho 3 trường hợp:
1,Ảnh sản phẩm iPhone 16: alt="Điện thoại iPhone 16 màu Titan Sa mạc góc nhìn nghiêng".
2,Ảnh trang trí (decorative): alt="" (Để trống để Screen Reader bỏ qua, tránh gây nhiễu thông tin).
3,Ảnh biểu đồ doanh thu Q1/2026: alt="Biểu đồ cột thể hiện doanh thu Quý 1 năm 2026 ".

Câu A5:
1.Thẻ <img> độc lập: Chỉ đơn thuần là chèn một hình ảnh vào trang web. Trình duyệt và các công cụ tìm kiếm xem nó như một phần tử đồ họa thông thường
Thẻ <figure>: Là một đơn vị nội dung độc lập. Nó bao bọc hình ảnh và các nội dung liên quan, giúp báo hiệu cho trình duyệt rằng đây là một khối tư liệu, sơ đồ hoặc ảnh minh họa có ý nghĩa cụ thể.
2.
<figure>
    <img src="Doraemon.jpg" 
         alt="Truyện Doraemon phiên bản mới nhất" 
         loading="lazy">
    <figcaption>Hình 1: truyện Doraemon phiên bản mới nhất - Tác giả Dale Carnegie</figcaption>
</figure>
Nguồn tham khảo: 06_graphics_multimedia.md: Mục Multimedia Elements — <figure> & <figcaption>.