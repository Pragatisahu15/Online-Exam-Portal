// client/src/utils/helpers.js

// Format seconds to MM:SS for exam timer
export const formatTime = (seconds) => {
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${mm}:${ss}`;
};

// Return question button class for navigator
export const getQuestionClass = (answers, review, i, currentIdx) => {
  if (answers[i] !== null) return "answered";
  if (review[i]) return "review";
  if (i !== currentIdx && answers[i] === null) return "not-answered";
  return "not-visited";
};

// Shuffle an array (utility for exam questions)
export const shuffleArray = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// Calculate score based on answers and correctAnswers
export const calculateScore = (answers, correctAnswers) => {
  return answers.reduce((score, ans, idx) => {
    return score + (ans === correctAnswers[idx] ? 1 : 0);
  }, 0);
};

// Get exam button text for Exams page
export const getExamButtonText = (results, examId) => {
  const found = results.find((r) => r.exam === examId);
  return found ? "Retake Exam" : "Start Exam";
};

// Format ISO date string to readable format
export const formatDate = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
