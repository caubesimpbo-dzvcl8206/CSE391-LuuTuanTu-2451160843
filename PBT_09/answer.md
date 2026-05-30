Phần A:

Câu A1:

1. DOM Tree
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
2. Query Selectors

Chọn thẻ <h1>
document.querySelector("h1");

Chọn input trong form
document.querySelector("#todoForm input");

Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");

Chọn link đang active
document.querySelector("a.active");

Chọn <li> đầu tiên trong #todoList
document.querySelector("#todoList li:first-child");

Chọn tất cả <a> bên trong <nav>
document.querySelectorAll("nav a");

Câu A2:

Khác nhau
innerHTML: đọc/ghi cả HTML.
textContent: chỉ đọc/ghi văn bản.
innerText: chỉ lấy văn bản đang hiển thị (ảnh hưởng bởi CSS).

Ví dụ:

element.innerHTML = "<b>Hello</b>";   
element.textContent = "<b>Hello</b>"; 

XSS là gì?
innerHTML có thể thực thi HTML/JS do người dùng nhập.

const userInput = '<img src=x onerror="alert(\'Hacked!\')">';
result.innerHTML = userInput;

--> Trình duyệt tạo thẻ <img> và chạy alert() → XSS.

Cách sửa

Dùng textContent:

const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;

--> Hiển thị dưới dạng text, không thực thi JavaScript.

Câu A3:

Click vào button

Event bubbling từ trong ra ngoài:

BUTTON
INNER
OUTER
Nếu bỏ comment e.stopPropagation()
document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    e.stopPropagation();
});

Output:

BUTTON
Giải thích ngắn gọn
Mặc định: sự kiện nổi bọt (bubbling) từ button → inner → outer.
stopPropagation() chặn sự kiện lan lên phần tử cha nên chỉ chạy handler của button.

Phần C:

Câu C1:

Các lỗi và cách sửa
1. Sai event "onclick"
addEventListener("onclick", ...)

✅ Sửa:

addEventListener("click", ...)
2. Gán lại biến const
countDisplay = count;

countDisplay là const.

✅ Sửa:

countDisplay.textContent = count;
3. Xóa history sai
historyList.innerHTML = null;

✅ Sửa:

historyList.innerHTML = "";
4. item.remove thiếu dấu ()
item.remove;

Không gọi hàm.

✅ Sửa:

item.remove();
5. Load count từ localStorage trả về String
count = localStorage.getItem("count");

✅ Sửa:

count = Number(localStorage.getItem("count")) || 0;
6. Không load lại history

Code chỉ lưu:

localStorage.setItem("history", historyList.innerHTML);

nhưng không khôi phục.

✅ Thêm:

historyList.innerHTML =
    localStorage.getItem("history") || "";
7. History sau khi load mất sự kiện click

Các <li> được tạo từ innerHTML không còn:

li.addEventListener(...)

✅ Sau khi load:

historyList.querySelectorAll("li")
.forEach(li => {
    li.addEventListener("click", function () {
        deleteHistory(this);
    });
});
8. Nên dùng textContent thay vì innerHTML
countDisplay.innerHTML = count;

✅ Sửa:
countDisplay.textContent = count;
Code đã sửa
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

document.querySelector("#incrementBtn")
.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;

    const li = document.createElement("li");
    li.textContent = "Count changed to " + count;

    li.addEventListener("click", function () {
        deleteHistory(this);
    });

    historyList.append(li);
});

document.querySelector("#decrementBtn")
.addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});

document.querySelector("#resetBtn")
.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
    historyList.innerHTML = "";
});

function deleteHistory(element) {
    element.remove();
}

document.querySelector("#clearHistory")
.addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");

    items.forEach(item => {
        item.remove();
    });
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});

window.addEventListener("load", () => {
    count = Number(localStorage.getItem("count")) || 0;

    countDisplay.textContent = count;

    historyList.innerHTML =
        localStorage.getItem("history") || "";

    historyList.querySelectorAll("li")
    .forEach(li => {
        li.addEventListener("click", function () {
            deleteHistory(this);
        });
    });
});

Câu C2:

1. Tại sao bind event lên 1000 elements là bad practice?
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
Tạo 1000 event listeners → tốn bộ nhớ.
Khó quản lý khi thêm/xóa phần tử động.
Hiệu năng kém hơn khi số lượng phần tử lớn.
Event Delegation

Gắn 1 listener lên phần tử cha:

parent.addEventListener("click", (e) => {
    if (e.target.matches(".item")) {
        console.log(e.target.textContent);
    }
});

➡️ Chỉ cần 1 listener, tận dụng cơ chế event bubbling.

2. Refactor dùng DocumentFragment

Code cũ:

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);
}

Code mới:

const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}

document.body.appendChild(fragment);
Tại sao nhanh hơn?
Code cũ: appendChild() vào DOM 1000 lần → nhiều lần reflow/repaint.
Code mới: thêm vào DocumentFragment (không nằm trong DOM thật), sau đó append 1 lần.

--> Giảm số lần cập nhật giao diện từ 1000 lần xuống 1 lần, nên nhanh và tiết kiệm tài nguyên hơn.