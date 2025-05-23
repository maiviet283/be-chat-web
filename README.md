# be-chat-app

`be-chat-app` là hệ thống backend cho một ứng dụng chat thời gian thực giống như Zalo, được xây dựng với **Node.js**, **Express**, **MongoDB**, **JWT**, và **WebSocket (Socket.IO)**. Ứng dụng cho phép người dùng kết bạn, tạo nhóm, và trò chuyện cá nhân hoặc trong nhóm.

## 🚀 Tính năng chính

- ✅ Đăng ký & Đăng nhập với xác thực JWT
- 👤 Quản lý hồ sơ người dùng
- 🔍 Tìm kiếm và gửi lời mời kết bạn
- 👥 Chấp nhận lời mời và quản lý danh sách bạn bè
- 💬 Chat 1-1 và chat nhóm thời gian thực bằng WebSocket
- 🧑‍🤝‍🧑 Tạo, chỉnh sửa và rời khỏi nhóm chat
- 🔐 Middleware xác thực cho tất cả các API bảo mật

## 🛠️ Công nghệ sử dụng

- **Node.js**, **Express** – Framework backend
- **MongoDB** với **Mongoose** – Cơ sở dữ liệu NoSQL
- **JWT** – Xác thực người dùng
- **Socket.IO** – Giao tiếp thời gian thực
- **Bcrypt** – Mã hóa mật khẩu
- **Dotenv** – Quản lý biến môi trường