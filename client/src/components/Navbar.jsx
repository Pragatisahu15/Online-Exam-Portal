import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const isExamMode = localStorage.getItem("isExamMode") === "true";

  // Reset exam mode if user is not inside exam routes
  useEffect(() => {
    const inExamRoute = location.pathname.includes("/exam/");
    if (!inExamRoute && isExamMode) {
      localStorage.removeItem("isExamMode");
    }
  }, [location, isExamMode]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("currentExamSession");
    localStorage.removeItem("examQuestions");
    localStorage.removeItem("isExamMode");
    navigate("/login");
  };

  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  // Navbar during exam
  if (isExamMode && location.pathname.includes("/exam/")) {
    const sessionMeta = JSON.parse(
      localStorage.getItem("currentExamSession") || "{}"
    );
    const examTitle = sessionMeta?.title || "Exam in Progress";
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top shadow">
        <div className="container d-flex justify-content-between">
          <span className="text-white fw-bold">{examTitle}</span>
          <span className="text-warning">
            Time left visible in exam screen ⏳
          </span>
        </div>
      </nav>
    );
  }

  // If auth page → show only brand, ignore token
  if (isAuthPage) {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top shadow">
        <div className="container d-flex justify-content-center">
          <span
            className="navbar-brand fw-bold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.8rem",
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #ff8a00, #e52e71)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Exam Portal
          </span>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      {token ? (
        // After login: responsive dropdown menu
        <div className="container">
          <Link
            className="navbar-brand fw-bold mx-auto"
            to="/exams"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1.8rem",
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #ff8a00, #e52e71)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Exam Portal
          </Link>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item me-3 text-white">
                👋 <strong>{username}</strong>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/exams">
                  Exams
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/results">
                  Results
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
