import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";

export default function Start() {
  const { id: examId } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const startExam = async () => {
      try {
        const res = await API.post(`/exams/${examId}/start`);

        localStorage.setItem(
          "currentExamSession",
          JSON.stringify({
            sessionId: res.data.sessionId,
            examId: res.data.examId,
            startedAt: res.data.startedAt,
            durationSeconds: res.data.durationSeconds,
            title: res.data.title || "Exam in Progress",
          })
        );
        localStorage.setItem("examQuestions", JSON.stringify(res.data.questions));
        localStorage.setItem("isExamMode", "true");

        navigate(`/exam/${res.data.examId}/session/${res.data.sessionId}`);
      } catch (err) {
        alert(err.response?.data?.message || "Could not start exam");
        navigate("/exams");
      } finally {
        setLoading(false);
      }
    };

    startExam();
  }, [examId, navigate]);

  return <div style={{ padding: 20 }}>{loading ? "Starting your exam..." : "Redirecting..."}</div>;
}
