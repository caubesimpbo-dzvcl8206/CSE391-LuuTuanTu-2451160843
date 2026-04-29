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