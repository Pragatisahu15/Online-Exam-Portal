import React from "react";
import { getQuestionClass } from "../../utils/helpers";
import "./css/QuestionNavigator.css";

export default function QuestionNavigator({ questions, answers, review, currentIdx, setIdx }) {
  return (
    <div className="right-panel">
      <h3>Question Navigator</h3>
      <div className="question-nav">
        {questions.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`${getQuestionClass(answers, review, i, currentIdx)} ${
              i === currentIdx ? "active" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="legend">
        <h4>Instructions</h4>
        <div className="legend-item">
          <div className="legend-color" style={{ background: "#28a745" }} /> Answered
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ background: "#dc3545" }} /> Not Answered
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ background: "#ffc107" }} /> Marked for Review
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ background: "#fff", border: "1px solid #ccc" }} /> Not Visited
        </div>
      </div>
    </div>
  );
}
