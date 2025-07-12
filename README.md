# 🚀 Test Cursor với GitHub

Dự án JavaScript HTML nhỏ để test tích hợp Cursor với GitHub.

## 📋 Mô tả

Đây là một ứng dụng web đơn giản được tạo để kiểm tra khả năng tích hợp giữa Cursor AI và GitHub. Ứng dụng bao gồm:

- **Bộ đếm tương tác**: Tăng/giảm số với các nút hoặc phím tắt
- **Todo List**: Thêm, hoàn thành và xóa các công việc
- **Lưu trữ dữ liệu**: Sử dụng localStorage để lưu trữ dữ liệu
- **Giao diện đẹp**: Responsive design với hiệu ứng animation

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling với gradient, animations, và responsive design
- **JavaScript ES6**: Logic tương tác và xử lý dữ liệu
- **LocalStorage**: Lưu trữ dữ liệu phía client

## 🎯 Tính năng

### Bộ đếm
- Tăng/giảm giá trị bằng nút bấm
- Phím tắt: `↑` (tăng), `↓` (giảm), `R` (reset)
- Thay đổi màu sắc theo giá trị (xanh lá: dương, đỏ: âm, xanh dương: zero)
- Animation khi thay đổi giá trị

### Todo List
- Thêm công việc mới
- Đánh dấu hoàn thành/chưa hoàn thành
- Xóa công việc
- Hiển thị thời gian tạo
- Lưu trữ tự động vào localStorage

### Giao diện
- Responsive design cho mobile và desktop
- Gradient background đẹp mắt
- Glass morphism effect
- Smooth animations và transitions

## 🚀 Cách chạy

1. Clone repository này
2. Mở file `index.html` trong trình duyệt
3. Hoặc chạy với live server

```bash
# Nếu có Python
python -m http.server 8000

# Nếu có Node.js
npx http-server

# Nếu có Live Server extension trong VS Code
# Chỉ cần right-click vào index.html và chọn "Open with Live Server"
```

## 📁 Cấu trúc dự án

```
tcursorgit/
├── index.html      # Trang chính
├── style.css       # Stylesheet
├── script.js       # JavaScript logic
└── README.md       # Tài liệu này
```

## 🎮 Cách sử dụng

### Bộ đếm
- Click các nút `+`, `-`, `Reset` để điều khiển
- Hoặc sử dụng phím tắt trên bàn phím

### Todo List
- Nhập công việc vào ô input
- Nhấn `Enter` hoặc click nút `Thêm`
- Click `Hoàn thành` để đánh dấu xong
- Click `Xóa` để xóa công việc

### Console Commands
Mở Developer Tools (F12) và thử các lệnh sau:

```javascript
// Xem thống kê dự án
getProjectStats()

// Xuất dữ liệu
exportData()

// Thao tác với todo
toggleTodo(1)  // Toggle todo có ID = 1
deleteTodo(1)  // Xóa todo có ID = 1
```

## 🔧 Tính năng kỹ thuật

- **ES6 Modules**: Sử dụng modern JavaScript
- **Event Delegation**: Xử lý sự kiện hiệu quả
- **LocalStorage**: Persistence dữ liệu
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Keyboard navigation support

## 📝 Git Workflow

Dự án này được tạo để test workflow với Git:

```bash
# Khởi tạo git repository
git init

# Thêm files
git add .

# Commit đầu tiên
git commit -m "Initial commit: Tạo dự án test Cursor + GitHub"

# Thêm remote repository
git remote add origin <your-github-repo-url>

# Push lên GitHub
git push -u origin main
```

## 🤝 Đóng góp

Dự án này chỉ để test nên không cần contribution. Nhưng nếu bạn muốn:

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📄 License

Dự án này chỉ để test - không có license cụ thể.

## 👨‍💻 Tác giả

- **Cursor AI** - Tạo dự án để test tích hợp với GitHub
- **User** - Yêu cầu tạo dự án test

## 🙏 Cảm ơn

- Cursor AI cho việc hỗ trợ coding
- GitHub cho platform tuyệt vời
- Các web technologies hiện đại

---

**Lưu ý**: Đây là dự án demo để test tích hợp Cursor với GitHub. Không dành cho production use. 