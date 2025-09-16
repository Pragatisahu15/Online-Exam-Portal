import React from "react";
import "./css/QuestionPanel.css";

export default function QuestionPanel({
  question,
  qIdx,
  answers,
  review,
  handleSelect,
  toggleReview,
  setIdx,
  totalQuestions,
}) {
  return (
    <div className="left-panel">
      <p className="question-text">
        <strong>Q{qIdx + 1}.</strong> {question.questionText}
      </p>

      {question.options.map((opt, optIdx) => (
        <label key={optIdx} className="option">
          <input
            type="radio"
            name={`q-${qIdx}`}
            checked={answers[qIdx] === optIdx}
            onChange={() => handleSelect(qIdx, optIdx)}
          />
          {opt}
        </label>
      ))}

      <div className="nav-buttons">
        <button onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={qIdx === 0}>
          Previous
        </button>
        <button
          onClick={() => setIdx((i) => Math.min(totalQuestions - 1, i + 1))}
          disabled={qIdx === totalQuestions - 1}
        >
          Next
        </button>
        <button onClick={() => toggleReview(qIdx)}>
          {review[qIdx] ? "Unmark Review" : "Mark for Review"}
        </button>
      </div>
    </div>
  );
}
