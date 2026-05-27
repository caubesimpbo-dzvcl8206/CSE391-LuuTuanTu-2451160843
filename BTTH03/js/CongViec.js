// --- 1. BIẾN TOÀN CỤC VÀ ĐĂNG KÝ PHẦN TỬ DOM ---
let tasksArray = [];

const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const todoForm = document.getElementById('todo-form');
const formModeInput = document.getElementById('form-mode');
const btnSubmitForm = document.getElementById('btn-submit-form');
const listContainer = document.getElementById('todo-list-container');
const toastMsg = document.getElementById('toast-msg');

// Các phần tử ô nhập liệu trong form
const inputTitle = document.getElementById('todo-title');
const inputDesc = document.getElementById('todo-desc');
const inputDeadline = document.getElementById('todo-deadline');
const inputPriority = document.getElementById('todo-priority');

// Các phần tử hiển thị thống kê
const statTotal = document.getElementById('stat-total');
const statCompleted = document.getElementById('stat-completed');
const statPending = document.getElementById('stat-pending');


// --- 2. HÀM TIỆN ÍCH (UTILITIES) ---

// Hiển thị thông báo nhanh (Toast Notification)
function showToast(message, type = 'success') {
    toastMsg.innerText = message;
    toastMsg.className = `toast-${type}`;
    toastMsg.style.display = 'block';
    setTimeout(() => {
        toastMsg.style.display = 'none';
    }, 3000);
}

// Định dạng ngày (YYYY-MM-DD -> DD/MM/YYYY)
function formatDate(dateString) {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

// Đọc dữ liệu từ localStorage khi load trang
function loadDataFromStorage() {
    const data = localStorage.getItem('localTasksList');
    tasksArray = data ? JSON.parse(data) : [];
}

// Lưu dữ liệu vào localStorage
function saveTasksToStorage() {
    localStorage.setItem('localTasksList', JSON.stringify(tasksArray));
}

// Xóa sạch dữ liệu trên form và đưa về trạng thái "Thêm mới"
function resetForm() {
    todoForm.reset();
    formModeInput.value = '';
    modalTitle.innerText = "Thêm Công Việc Mới";
    btnSubmitForm.innerText = "Lưu công việc";
}


// --- 3. LOGIC HỆ THỐNG CHÍNH ---

// Cập nhật số liệu thống kê (Tổng, Đã hoàn thành, Chưa hoàn thành)
function updateStatistics() {
    const total = tasksArray.length;
    const completed = tasksArray.filter(task => task.completed).length;
    const pending = total - completed;

    statTotal.innerText = total;
    statCompleted.innerText = completed;
    statPending.innerText = pending;
}

// Render dữ liệu ra giao diện dưới dạng Card
function renderTasksList() {
    listContainer.innerHTML = ''; // Xóa sạch danh sách cũ

    if (tasksArray.length === 0) {
        listContainer.innerHTML = `<div class="empty-state">Hiện tại không có công việc nào cần xử lý. Hãy thêm mới!</div>`;
        return;
    }

    // Duyệt mảng và sinh code HTML động cho từng card
    tasksArray.forEach((task, index) => {
        const card = document.createElement('div');
        
        // Chuẩn hóa class CSS cho việc đổi màu theo độ ưu tiên (Bỏ dấu tiếng Việt cho an toàn lớp CSS)
        const priorityClass = task.priority === 'Trung bình' ? 'Trung-binh' : (task.priority === 'Thấp' ? 'Thap' : 'Cao');
        
        card.className = `todo-item priority-${priorityClass} ${task.completed ? 'is-completed' : ''}`;
        
        card.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${task.completed ? 'checked' : ''} onchange="handleStatusChange(${index})">
            <div class="todo-body">
                <div class="todo-content-title">${task.title}</div>
                <div class="todo-content-desc">${task.desc ? task.desc : '<i>Không có mô tả</i>'}</div>
                <div class="todo-meta">
                    <span>📅 Hạn: ${formatDate(task.deadline)}</span>
                    <span>Độ ưu tiên: <span class="badge p-${priorityClass}">${task.priority}</span></span>
                </div>
            </div>
            <div class="todo-actions">
                <button class="btn btn-edit" onclick="handleEditClick(${index})">Sửa</button>
                <button class="btn btn-delete" onclick="handleDeleteClick(${index})">Xóa</button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}


// --- 4. SỰ KIỆN GIAO DIỆN (EVENT LISTENERS) ---

// Click mở Form popup thêm mới
document.getElementById('btn-open-modal').addEventListener('click', () => {
    resetForm();
    modalOverlay.classList.add('active');
});

// Click đóng Form popup bằng nút X
document.getElementById('btn-close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Click ra ngoài vùng form để ẩn popup
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// Bắt sự kiện gửi dữ liệu từ Form (Gộp cả Thêm & Sửa)
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const modeIndex = formModeInput.value;

    if (modeIndex === '') {
        // CHẾ ĐỘ THÊM MỚI
        const newTask = {
            title: inputTitle.value.trim(),
            desc: inputDesc.value.trim(),
            deadline: inputDeadline.value,
            priority: inputPriority.value,
            completed: false // Công việc mới mặc định là chưa hoàn thành
        };
        tasksArray.push(newTask);
        showToast("Thêm công việc thành công!");
    } else {
        // CHẾ ĐỘ SỬA CẬP NHẬT
        const idx = parseInt(modeIndex);
        tasksArray[idx].title = inputTitle.value.trim();
        tasksArray[idx].desc = inputDesc.value.trim();
        tasksArray[idx].deadline = inputDeadline.value;
        tasksArray[idx].priority = inputPriority.value;
        
        showToast("Cập nhật công việc thành công!", "warning");
    }

    // Đồng bộ lại toàn bộ trạng thái
    saveTasksToStorage();
    renderTasksList();
    updateStatistics();
    modalOverlay.classList.remove('active');
});

// Sự kiện bấm nút Sửa trên từng Card công việc
window.handleEditClick = function(index) {
    const currentTask = tasksArray[index];

    formModeInput.value = index; // Lưu lại vị trí index cần sửa
    inputTitle.value = currentTask.title;
    inputDesc.value = currentTask.desc;
    inputDeadline.value = currentTask.deadline;
    inputPriority.value = currentTask.priority;

    modalTitle.innerText = "Chỉnh Sửa Công Việc";
    btnSubmitForm.innerText = "Cập nhật công việc";

    modalOverlay.classList.add('active');
};

// Sự kiện bấm nút Xóa trên từng Card công việc
window.handleDeleteClick = function(index) {
    const currentTask = tasksArray[index];
    const isConfirm = confirm(`Bạn có thực sự muốn xóa công việc [${currentTask.title}] không?`);

    if (isConfirm) {
        tasksArray.splice(index, 1); // Xóa khỏi mảng

        saveTasksToStorage();
        renderTasksList();
        updateStatistics();
        showToast("Đã xóa công việc!", "danger");
    }
};

// Sự kiện thay đổi trạng thái hoàn thành (Checkbox change)
window.handleStatusChange = function(index) {
    // Đảo ngược trạng thái hiện tại (true <-> false)
    tasksArray[index].completed = !tasksArray[index].completed;

    saveTasksToStorage();
    renderTasksList(); // Vẽ lại để áp dụng hiệu ứng gạch ngang CSS
    updateStatistics(); // Tính toán lại số liệu hoàn thành
    
    if (tasksArray[index].completed) {
        showToast("Chúc mừng! Bạn đã hoàn thành công việc.");
    }
};


// --- 5. CHẠY KHI KHỞI ĐỘNG ỨNG DỤNG ---
loadDataFromStorage();
renderTasksList();
updateStatistics();