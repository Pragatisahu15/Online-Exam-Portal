import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import { formatDate } from "../utils/helpers";
import "../styles/Results.css";

export default function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await API.get("/exams/results/mine");
        setResults(res.data);
      } catch (err) {
        alert(err.response?.data?.message || "Failed to load results");
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

  if (loading) return <p className="loading">Loading your results...</p>;
  if (!results.length) return <p className="empty-text">No results found.</p>;

  return (
    <div className="results-container">
      <h2 className="page-title">My Exam Results</h2>
      <div className="results-grid">
        {results.map((r) => (
          <div key={r._id} className="result-card">
            <h3>{r.exam?.title || "Untitled Exam"}</h3>
            <p><strong>Score:</strong> {r.score}/{r.totalQuestions}</p>
            <p><strong>Taken:</strong> {formatDate(r.takenAt)}</p>
            {r.exam && <Link to={`/exam/${r.exam._id}/start`}><button className="reattempt-btn">Reattempt Exam</button></Link>}
          </div>
        ))}
      </div>
    </div>
  );
}
