import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api";
import { toast } from "react-toastify";
import ExamHeader from "./ExamHeader";
import QuestionPanel from "./QuestionPanel";
import QuestionNavigator from "./QuestionNavigator";
import "./css/ExamRoom.css";

export default function ExamRoom() {
  const { id: examId, sessionId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [review, setReview] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("isExamMode", "true");
    return () => localStorage.removeItem("isExamMode");
  }, []);

  useEffect(() => {
    const localQs = JSON.parse(localStorage.getItem("examQuestions") || "null");
    const sessionMeta = JSON.parse(localStorage.getItem("currentExamSession") || "null");

    if (localQs && sessionMeta && String(sessionMeta.sessionId) === sessionId) {
      initExam(localQs, sessionMeta.durationSeconds);
      return;
    }

    (async () => {
      try {
        const res = await API.get(`/exams/${examId}`);
        const qs = res.data.questions || [];
        initExam(qs, sessionMeta?.durationSeconds || (res.data.duration || 30) * 60);
      } catch {
        toast.error("Failed to load exam");
        navigate("/exams");
      }
    })();
  }, [examId, sessionId, navigate]);

  const initExam = (qs, duration) => {
    setQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setReview(new Array(qs.length).fill(false));
    setTimeLeft(duration);
  };

  useEffect(() => {
    if (!timeLeft) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleAutoSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [timeLeft]);

  const handleSelect = (qIdx, optIdx) => {
    const a = [...answers];
    a[qIdx] = optIdx;
    setAnswers(a);
  };

  const toggleReview = (qIdx) => {
    const r = [...review];
    r[qIdx] = !r[qIdx];
    setReview(r);
  };

  const cleanupExam = () => {
    localStorage.removeItem("currentExamSession");
    localStorage.removeItem("examQuestions");
    localStorage.removeItem("isExamMode");
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post(`/exams/${examId}/submit`, { answers });
      cleanupExam();
      const score = res.data.result?.score ?? res.data.score;
      const total = res.data.result?.totalQuestions ?? res.data.totalQuestions;
      toast.success(`✅ You scored ${score}/${total}`);
      navigate("/results");
    } catch (err) {
      toast.error(err.response?.data?.message || "Submit failed");
    }
  };

  const handleAutoSubmit = async () => {
    toast.info("⏰ Time's up! Exam submitted automatically.", { autoClose: 5000 });
    await handleSubmit();
  };

  if (!questions.length) return <p>Loading exam...</p>;

  return (
    <div className="exam-room">
      <ExamHeader timeLeft={timeLeft} />
      <div className="exam-body">
       <QuestionPanel
  question={questions[idx]}
  qIdx={idx}
  answers={answers}
  review={review}
  handleSelect={handleSelect}
  toggleReview={toggleReview}
  setIdx={setIdx}
  totalQuestions={questions.length}
  handleSubmit={handleSubmit}  
/>


      </div>
    </div>
  );
}
