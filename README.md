# 📝 ToDoList Application

A full-stack **To-Do List** web application built with:

- 🌐 **Frontend**: React + TypeScript
- ⚙️ **Backend**: Java Spring Boot
- 📦 **API Communication**: RESTful API

> 🔗 **Repository**: [https://github.com/NithinU2802/ToDoList](https://github.com/NithinU2802/ToDoList)

---

## 📁 Project Structure

```
ToDoList/
├── backend/
│   └── ToDoList/       # Java Spring Boot backend
└── frontend/           # React TypeScript frontend
```

---

## 🚀 Getting Started

Follow these steps to run the application locally.

### 🔧 Prerequisites

- **Java 17+**
- **Maven 3.6+**
- **Node.js 16+**
- **npm** or **yarn**

---

## 🖥️ Backend - Java Spring Boot

### 📂 Path: `backend/ToDoList`

### ✅ Steps:

1. Navigate to the backend folder:

   ```bash
   cd backend/ToDoList
   ```

2. Build the application:

   ```bash
   mvn clean install
   ```

3. Run the Spring Boot server:

   ```bash
   mvn spring-boot:run
   ```

📌 The backend server will start on:  
`http://localhost:8001`

---

## 🌐 Frontend - React with TypeScript

### 📂 Path: `frontend/`

### ✅ Steps:

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

📌 The frontend app will be available at:  
`http://localhost:3000`

---

## 🔄 API Integration

Make sure the frontend is configured to communicate with the backend.  
Use the environment variable below or directly configure api.ts in src.

### 👉 Create a `.env` file inside `frontend/`:

```env
REACT_APP_API_BASE_URL=http://localhost:8001
```

---

## 📸 Screenshots

Output screenshots:

| Feature       | Screenshot                 |
|---------------|----------------------------|
| UI with Overdue task  |    <img width="956" alt="Overdue" src="https://github.com/user-attachments/assets/d0d3356c-79c3-4b2d-ab42-eef6f6d2a654" /> |
| Filling form to add task | <img width="957" alt="TaskFormFill" src="https://github.com/user-attachments/assets/b0b0fdac-8926-4299-8a02-634bae52e67d" /> |
| Task is added Now | <img width="958" alt="AddedTask" src="https://github.com/user-attachments/assets/1ccf51e2-de2d-4113-a49e-d2558bd55365" /> |
| Completed Tasks View | <img width="960" alt="CompletedTask" src="https://github.com/user-attachments/assets/adcca640-6306-4353-b184-34c55f0f0ddf" /> |

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

- [Nithin U](https://github.com/NithinU2802)

---

## 📌 Notes

- Ensure ports `8001` and `3000` are free before running the backend and frontend.
- You can use tools like **Postman** to manually test backend APIs.
- Cross-Origin issues? Spring Boot backend should have CORS configuration for local frontend use.
