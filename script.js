// Khởi tạo ứng dụng khi DOM đã load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Khởi tạo ứng dụng
function initializeApp() {
    console.log('🚀 Ứng dụng đã được khởi tạo!');
    
    // Khởi tạo các tính năng
    initializeCounter();
    initializeTodo();
    initializeInfo();
    initializeThemeToggle();
    
    // Hiển thị thông báo chào mừng
    showWelcomeMessage();
}

// === COUNTER FUNCTIONALITY ===
let counterValue = 0;

function initializeCounter() {
    const counterDisplay = document.getElementById('counter');
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const resetBtn = document.getElementById('reset');
    
    // Event listeners cho các nút
    increaseBtn.addEventListener('click', () => {
        counterValue++;
        updateCounterDisplay();
        animateCounter();
    });
    
    decreaseBtn.addEventListener('click', () => {
        counterValue--;
        updateCounterDisplay();
        animateCounter();
    });
    
    resetBtn.addEventListener('click', () => {
        counterValue = 0;
        updateCounterDisplay();
        animateCounter();
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            counterValue++;
            updateCounterDisplay();
            animateCounter();
        } else if (e.key === 'ArrowDown') {
            counterValue--;
            updateCounterDisplay();
            animateCounter();
        } else if (e.key === 'r' || e.key === 'R') {
            counterValue = 0;
            updateCounterDisplay();
            animateCounter();
        }
    });
}

function updateCounterDisplay() {
    const counterDisplay = document.getElementById('counter');
    counterDisplay.textContent = counterValue;
    
    // Thay đổi màu sắc dựa trên giá trị
    if (counterValue > 0) {
        counterDisplay.style.color = '#28a745';
    } else if (counterValue < 0) {
        counterDisplay.style.color = '#dc3545';
    } else {
        counterDisplay.style.color = '#667eea';
    }
}

function animateCounter() {
    const counterDisplay = document.getElementById('counter');
    counterDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 150);
}

// === TODO FUNCTIONALITY ===
let todos = [];
let todoIdCounter = 1;

function initializeTodo() {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodo');
    
    // Event listeners
    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    // Load todos từ localStorage
    loadTodosFromStorage();
    renderTodos();
}

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    
    if (todoText === '') {
        alert('Vui lòng nhập nội dung công việc!');
        return;
    }
    
    const newTodo = {
        id: todoIdCounter++,
        text: todoText,
        completed: false,
        createdAt: new Date().toLocaleString('vi-VN')
    };
    
    todos.push(newTodo);
    todoInput.value = '';
    
    renderTodos();
    saveTodosToStorage();
    
    console.log('✅ Đã thêm todo:', newTodo);
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
        saveTodosToStorage();
        console.log('🔄 Đã toggle todo:', todo);
    }
}

function deleteTodo(id) {
    const todoIndex = todos.findIndex(t => t.id === id);
    if (todoIndex > -1) {
        const deletedTodo = todos.splice(todoIndex, 1)[0];
        renderTodos();
        saveTodosToStorage();
        console.log('🗑️ Đã xóa todo:', deletedTodo);
    }
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    if (todos.length === 0) {
        todoList.innerHTML = '<li class="todo-item"><span>Chưa có công việc nào. Hãy thêm công việc đầu tiên!</span></li>';
        return;
    }
    
    todos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        todoItem.innerHTML = `
            <div>
                <span class="todo-text">${todo.text}</span>
                <small class="todo-date">${todo.createdAt}</small>
            </div>
            <div class="todo-actions">
                <button class="btn todo-btn btn-${todo.completed ? 'secondary' : 'success'}" 
                        onclick="toggleTodo(${todo.id})">
                    ${todo.completed ? 'Hoàn tác' : 'Hoàn thành'}
                </button>
                <button class="btn todo-btn btn-danger" onclick="deleteTodo(${todo.id})">
                    Xóa
                </button>
            </div>
        `;
        
        todoList.appendChild(todoItem);
    });
}

function saveTodosToStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodosFromStorage() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
        todoIdCounter = Math.max(...todos.map(t => t.id), 0) + 1;
    }
}

// === INFO FUNCTIONALITY ===
function initializeInfo() {
    // Hiển thị ngày hiện tại
    const currentDateElement = document.getElementById('currentDate');
    const now = new Date();
    currentDateElement.textContent = now.toLocaleDateString('vi-VN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Thêm thông tin về Git
    addGitInfo();
}

function addGitInfo() {
    // Tạo thẻ thông tin Git
    const infoGrid = document.querySelector('.info-grid');
    const gitInfoCard = document.createElement('div');
    gitInfoCard.className = 'info-card';
    gitInfoCard.innerHTML = `
        <h3>🐙 Git Status</h3>
        <p>Repository đã sẵn sàng cho GitHub</p>
    `;
    infoGrid.appendChild(gitInfoCard);
}

// === UTILITY FUNCTIONS ===
function showWelcomeMessage() {
    console.log(`
    🎉 Chào mừng đến với dự án test Cursor + GitHub!
    
    Các tính năng:
    - ⬆️⬇️ Sử dụng phím mũi tên để điều khiển counter
    - 🔄 Nhấn 'R' để reset counter
    - ✅ Thêm và quản lý todo list
    - 💾 Dữ liệu được lưu tự động
    
    Hãy thử các tính năng nhé! 🚀
    `);
}

// Thêm một số utility functions để test Git
function getProjectStats() {
    return {
        totalTodos: todos.length,
        completedTodos: todos.filter(t => t.completed).length,
        counterValue: counterValue,
        timestamp: new Date().toISOString()
    };
}

function exportData() {
    const data = {
        todos: todos,
        counter: counterValue,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cursor-github-test-data.json';
    link.click();
    
    URL.revokeObjectURL(url);
    console.log('📁 Đã xuất dữ liệu thành công!');
}

// Expose functions to global scope for testing
window.getProjectStats = getProjectStats;
window.exportData = exportData;
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;

// Thêm tính năng keyboard shortcuts info
function showKeyboardShortcuts() {
    const shortcuts = [
        '⬆️ Arrow Up: Tăng counter',
        '⬇️ Arrow Down: Giảm counter', 
        '🔄 R: Reset counter',
        '↩️ Enter: Thêm todo (khi focus vào input)',
        '🎮 F1: Hiển thị shortcuts này'
    ];
    
    alert('🎮 Keyboard Shortcuts:\n\n' + shortcuts.join('\n'));
}

// Thêm F1 shortcut
document.addEventListener('keydown', (e) => {
    if (e.key === 'F1') {
        e.preventDefault();
        showKeyboardShortcuts();
    }
});

// Expose function to global scope
window.showKeyboardShortcuts = showKeyboardShortcuts;

// === THEME TOGGLE FUNCTIONALITY ===
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '☀️ Light Mode';
    }
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
            console.log('🌙 Chuyển sang Dark Mode');
        } else {
            themeToggle.innerHTML = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');
            console.log('☀️ Chuyển sang Light Mode');
        }
    });
}

// Expose theme function to global scope
window.toggleTheme = () => {
    document.getElementById('themeToggle').click();
};

// Log thông tin khởi tạo
console.log('📝 Script.js đã được tải thành công!');
console.log('🔧 Các function đã được khởi tạo và sẵn sàng sử dụng.');
console.log('💡 Nhấn F1 để xem keyboard shortcuts!'); 