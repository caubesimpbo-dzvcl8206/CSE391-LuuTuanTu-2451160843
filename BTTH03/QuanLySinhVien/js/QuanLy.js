let studentsArray = [];

const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const studentForm = document.getElementById('student-form');
const formModeInput = document.getElementById('form-mode');
const btnSubmitForm = document.getElementById('btn-submit-form');
const tableBody = document.getElementById('student-table-body');
const toastMsg = document.getElementById('toast-msg');

const inputId = document.getElementById('student-id');
const inputName = document.getElementById('student-name');
const inputDob = document.getElementById('student-dob');
const inputClass = document.getElementById('student-class');
const inputEmail = document.getElementById('student-email');
const inputGpa = document.getElementById('student-gpa');

const statTotal = document.getElementById('stat-total');
const statAvgGpa = document.getElementById('stat-avg-gpa');

function showToast(message, type = 'success') {
    toastMsg.innerText = message;
    toastMsg.className = `toast-${type}`;
    toastMsg.style.display = 'block';
    setTimeout(() => {
        toastMsg.style.display = 'none';
    }, 3000);
}

function formatDate(dateString) {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

function loadDataFromStorage() {
    const data = localStorage.getItem('localStudentsList');
    studentsArray = data ? JSON.parse(data) : [];
}

function saveStudentsToStorage() {
    localStorage.setItem('localStudentsList', JSON.stringify(studentsArray));
}

function resetForm() {
    studentForm.reset();
    formModeInput.value = ''; 
    inputId.disabled = false; 
    modalTitle.innerText = "Thêm Sinh Viên Mới";
    btnSubmitForm.innerText = "Lưu dữ liệu";
}

function updateStatistics() {
    const total = studentsArray.length;
    statTotal.innerText = total;

    if (total === 0) {
        statAvgGpa.innerText = "0.00";
        return;
    }

    const totalScore = studentsArray.reduce((sum, item) => sum + parseFloat(item.gpa || 0), 0);
    const average = totalScore / total;
    statAvgGpa.innerText = average.toFixed(2);
}

function renderStudentsTable() {
    tableBody.innerHTML = ''; 

    if (studentsArray.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" class="empty-row">Hiện tại danh sách trống. Vui lòng thêm sinh viên mới!</td></tr>`;
        return;
    }

    studentsArray.forEach((student, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${student.id}</strong></td>
            <td>${student.name}</td>
            <td>${formatDate(student.dob)}</td>
            <td>${student.class}</td>
            <td>${student.email}</td>
            <td>${parseFloat(student.gpa).toFixed(1)}</td>
            <td>
                <button class="btn btn-edit" onclick="handleEditClick(${index})">Sửa</button>
                <button class="btn btn-delete" onclick="handleDeleteClick(${index})">Xóa</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

document.getElementById('btn-open-modal').addEventListener('click', () => {
    resetForm();
    modalOverlay.classList.add('active');
});

document.getElementById('btn-close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

studentForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const studentObj = {
        id: inputId.value.trim(),
        name: inputName.value.trim(),
        dob: inputDob.value,
        class: inputClass.value.trim(),
        email: inputEmail.value.trim(),
        gpa: parseFloat(inputGpa.value)
    };

    const modeIndex = formModeInput.value;

    if (modeIndex === '') {
        const isDuplicate = studentsArray.some(st => st.id.toLowerCase() === studentObj.id.toLowerCase());
        if (isDuplicate) {
            showToast(`Mã sinh viên [${studentObj.id}] đã tồn tại!`, 'danger');
            return;
        }

        studentsArray.push(studentObj);
        showToast("Thêm mới sinh viên thành công!");
    } else {
        studentsArray[parseInt(modeIndex)] = studentObj;
        showToast("Cập nhật thông tin thành công!", "warning");
    }
    saveStudentsToStorage();
    renderStudentsTable();
    updateStatistics();
    modalOverlay.classList.remove('active');
});

window.handleEditClick = function(index) {
    const targetStudent = studentsArray[index];
    
    formModeInput.value = index;
    inputId.value = targetStudent.id;
    inputId.disabled = true;
    
    inputName.value = targetStudent.name;
    inputDob.value = targetStudent.dob;
    inputClass.value = targetStudent.class;
    inputEmail.value = targetStudent.email;
    inputGpa.value = targetStudent.gpa;

    modalTitle.innerText = `Chỉnh Sửa Sinh Viên: ${targetStudent.id}`;
    btnSubmitForm.innerText = "Cập nhật thông tin";
    
    modalOverlay.classList.add('active');
};

window.handleDeleteClick = function(index) {
    const targetStudent = studentsArray[index];
    const confirmCheck = confirm(`Bạn có chắc chắn muốn xóa sinh viên [${targetStudent.name}]?`);
    
    if (confirmCheck) {
        studentsArray.splice(index, 1);

        saveStudentsToStorage();
        renderStudentsTable();
        updateStatistics();
        showToast(`Đã xóa sinh viên khỏi hệ thống!`, 'danger');
    }
};

loadDataFromStorage();
renderStudentsTable();
updateStatistics();