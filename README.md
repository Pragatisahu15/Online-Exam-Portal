# Online Exam Portal (MERN Stack)

**Full-Stack Online Exam Portal using MERN Stack with User Authentication and Interactive ExamRoom Features**

---

## 🔹 Project Overview

This is a **full-stack online examination system** built with **MongoDB, Express.js, React.js, and Node.js (MERN)**.  
It allows users to **register, login, and take timed exams** in a secure and interactive environment.  

The project includes a fully-featured **ExamRoom** that supports:  
- Timer countdown for exams  
- Question navigation and tracking  
- Answer selection  
- Marking questions for review  
- Automatic submission on time expiry  
- Real-time progress feedback  

---

## 🔹 Features

### **Authentication**
- User signup and login with **role-based access** (Student / Admin).  
- JWT-based authentication stored in localStorage.  
- Protected routes for exam access.  

### **ExamRoom**
- Display questions with multiple-choice options.  
- Select and submit answers for each question.  
- Mark/unmark questions for review.  
- Timer countdown with auto-submit on timeout.  
- Question navigator showing answered, not answered, and review questions.  
- Responsive design for both desktop and mobile devices.  

### **Admin / Organizer Features**
- Create, update, and manage exams.  
- View all participants and their scores (if implemented).  

---

## 🔹 Technologies Used

**Frontend:**  
- React.js  
- React Router  
- Axios  
- React-Toastify  
- CSS (with responsive design)  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JWT Authentication  

**Utilities:**  
- Helper functions for timer formatting, question status, and navigation.  

---


## 🔹 Installation & Setup

### **Backend**
1. Navigate to the server folder:  cd server
2. Install dependencies: npm install
3. Create a .env file and add your MongoDB URI and JWT secret:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
5. Start the backend server: npm run dev 

### **Frontend**
1. Navigate to the client folder: cd client
2. Install dependencies: npm install
3. Create a .env file and set the backend API URL: VITE_API_BASE_URL=http://localhost:5000/api
4. Start the frontend: npm run dev

## 🔹 Project Structure
```bash
root
│
├── client/             # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ExamRoom/
│   │   │   │   ├── ExamRoom.jsx
│   │   │   │   ├── ExamHeader.jsx
│   │   │   │   ├── QuestionPanel.jsx
│   │   │   │   ├── QuestionNavigator.jsx
│   │   │   │   └── css/ExamRoom.css
│   │   │   └── ...
│   │   ├── pages/
│   │   ├── utils/
│   │   └── ...
│   └── package.json
│
├── server/             # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md




