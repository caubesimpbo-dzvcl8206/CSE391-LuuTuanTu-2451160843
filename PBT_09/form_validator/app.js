const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

const submitBtn = document.getElementById("submitBtn");

let validName = false;
let validEmail = false;
let validPassword = false;
let validConfirm = false;
let validPhone = false;

// ===== NAME =====

nameInput.addEventListener("input", () => {
    const msg = document.getElementById("nameMsg");

    if(nameInput.value.length >= 2 && nameInput.value.length <= 50){
        msg.textContent = "✅ Hợp lệ";
        msg.className = "valid";
        validName = true;
    }else{
        msg.textContent = "❌ 2-50 ký tự";
        msg.className = "invalid";
        validName = false;
    }

    checkForm();
});

// ===== EMAIL =====

emailInput.addEventListener("input", () => {
    const msg = document.getElementById("emailMsg");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(emailInput.value)){
        msg.textContent = "✅ Email hợp lệ";
        msg.className = "valid";
        validEmail = true;
    }else{
        msg.textContent = "❌ Email không đúng định dạng";
        msg.className = "invalid";
        validEmail = false;
    }

    checkForm();
});

// ===== PASSWORD =====

passwordInput.addEventListener("input", () => {
    const pass = passwordInput.value;

    const msg = document.getElementById("passwordMsg");
    const fill = document.getElementById("strengthFill");

    if(pass.length < 8){
        msg.textContent = "Yếu";
        fill.style.width = "33%";
        fill.style.background = "red";
        validPassword = false;
    }
    else if(
        /[a-zA-Z]/.test(pass) &&
        /\d/.test(pass)
    ){
        msg.textContent = "Trung bình";
        fill.style.width = "66%";
        fill.style.background = "orange";
        validPassword = true;
    }

    if(
        /[a-z]/.test(pass) &&
        /[A-Z]/.test(pass) &&
        /\d/.test(pass) &&
        /[^A-Za-z0-9]/.test(pass)
    ){
        msg.textContent = "Mạnh";
        fill.style.width = "100%";
        fill.style.background = "green";
        validPassword = true;
    }

    validateConfirm();
    checkForm();
});

// ===== CONFIRM =====

function validateConfirm(){
    const msg = document.getElementById("confirmMsg");

    if(confirmInput.value === passwordInput.value &&
       confirmInput.value !== ""){
        msg.textContent = "✅ Khớp mật khẩu";
        msg.className = "valid";
        validConfirm = true;
    }else{
        msg.textContent = "❌ Không khớp";
        msg.className = "invalid";
        validConfirm = false;
    }
}

confirmInput.addEventListener("input", () => {
    validateConfirm();
    checkForm();
});

// ===== PHONE =====

phoneInput.addEventListener("input", () => {

    let value = phoneInput.value.replace(/\D/g,'');

    if(value.length > 10){
        value = value.slice(0,10);
    }

    if(value.length > 4){
        value = value.slice(0,4) + "-" + value.slice(4);
    }

    if(value.length > 8){
        value = value.slice(0,8) + "-" + value.slice(8);
    }

    phoneInput.value = value;

    const msg = document.getElementById("phoneMsg");

    if(value.replace(/-/g,"").length === 10){
        msg.textContent = "✅ Số hợp lệ";
        msg.className = "valid";
        validPhone = true;
    }else{
        msg.textContent = "❌ Cần đủ 10 số";
        msg.className = "invalid";
        validPhone = false;
    }

    checkForm();
});

// ===== ENABLE SUBMIT =====

function checkForm(){
    submitBtn.disabled = !(
        validName &&
        validEmail &&
        validPassword &&
        validConfirm &&
        validPhone
    );
}

// ===== SUBMIT =====

form.addEventListener("submit", e => {
    e.preventDefault();

    document.getElementById("userInfo").innerHTML = `
        Họ tên: ${nameInput.value}<br>
        Email: ${emailInput.value}<br>
        Phone: ${phoneInput.value}
    `;

    document.getElementById("modal")
        .classList.remove("hidden");
});

// ===== CLOSE MODAL =====

document.getElementById("closeModal")
.addEventListener("click", () => {
    document.getElementById("modal")
        .classList.add("hidden");
});