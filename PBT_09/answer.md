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