import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { getExamButtonText } from "../utils/helpers";
import "../styles/Exams.css";

export default function Exams() {
  const [exams, setExams] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [examsRes, resultsRes] = await Promise.all([
          fetch("http://localhost:5000/api/exams").then((r) => r.json()),
          API.get("/exams/results/mine").then((r) => r.data),
        ]);
        setExams(examsRes);
        setResults(resultsRes);
      } catch (err) {
        console.error("Error fetching exams/results", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleStart = (examId) => navigate(`/exam/${examId}/start`);

  if (loading) return <p className="empty-text">Loading exams...</p>;
  if (!exams.length) return <p className="empty-text">No exams available</p>;

  return (
    <div className="exams-container">
      <h2 className="page-title">Available Exams</h2>
      <div className="exam-grid">
        {exams.map((exam) => (
          <div key={exam._id} className="exam-card">
            <h3>{exam.title}</h3>
            <p>Duration: {exam.duration} mins</p>
            <button
              className="start-btn"
              onClick={() => handleStart(exam._id)}
            >
              {getExamButtonText(results, exam._id)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
