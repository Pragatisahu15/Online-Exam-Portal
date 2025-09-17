import React from "react";
import { formatTime } from "../../utils/helpers";
import "./css/ExamHeader.css";

export default function ExamHeader({ timeLeft }) {
  return (
    <div className="exam-header">
      <h2 className="exam-title">Exam</h2>
      <div className="exam-timer">Time left: {formatTime(timeLeft)}</div>
    </div>
  );
}
