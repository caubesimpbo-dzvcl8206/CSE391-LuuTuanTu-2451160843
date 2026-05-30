const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const countEl = document.getElementById("count");
const clearCompletedBtn = document.getElementById("clearCompleted");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function updateCount() {
    const active = todos.filter(todo => !todo.completed).length;
    countEl.textContent = `${active} items left`;
}

function renderTodos() {
    todoList.innerHTML = "";

    let filtered = todos;

    if (currentFilter === "active") {
        filtered = todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filtered = todos.filter(todo => todo.completed);
    }

    filtered.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";
        if (todo.completed) li.classList.add("completed");
        li.dataset.id = todo.id;

        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = todo.text;

        const btn = document.createElement("button");
        btn.className = "delete-btn";
        btn.textContent = "❌";

        li.append(span, btn);
        todoList.appendChild(li);
    });

    updateCount();
}

function addTodo() {
    const text = todoInput.value.trim();

    if (!text) return;

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    todoInput.value = "";
    saveTodos();
    renderTodos();
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", e => {
    if (e.key === "Enter") addTodo();
});

todoList.addEventListener("click", e => {
    const li = e.target.closest(".todo-item");
    if (!li) return;

    const id = Number(li.dataset.id);

    if (e.target.classList.contains("delete-btn")) {
        todos = todos.filter(todo => todo.id !== id);
    }

    if (e.target.classList.contains("todo-text")) {
        const todo = todos.find(t => t.id === id);
        todo.completed = !todo.completed;
    }

    saveTodos();
    renderTodos();
});

todoList.addEventListener("dblclick", e => {
    if (!e.target.classList.contains("todo-text")) return;

    const li = e.target.closest(".todo-item");
    const id = Number(li.dataset.id);

    const input = document.createElement("input");
    input.value = e.target.textContent;

    e.target.replaceWith(input);

    input.focus();

    input.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            const todo = todos.find(t => t.id === id);
            todo.text = input.value.trim();

            saveTodos();
            renderTodos();
        }
    });
});

document.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        renderTodos();
    });
});

clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);

    saveTodos();
    renderTodos();
});

renderTodos();