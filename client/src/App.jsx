import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Exams from "./pages/Exams";
import Start from "./pages/Start";
import ExamRoom from "./pages/ExamRoom/ExamRoom";
import Results from "./pages/Results";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/exams"
          element={
            <ProtectedRoute>
              <Exams />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exam/:id/start"
          element={
            <ProtectedRoute>
              <Start />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exam/:id/session/:sessionId"
          element={
            <ProtectedRoute>
              <ExamRoom />
            </ProtectedRoute>
          }
        />
        <Route
          path="/results"
          element={
            <ProtectedRoute>
              <Results />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Global Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
