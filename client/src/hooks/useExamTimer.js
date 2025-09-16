import { useState, useEffect, useRef } from "react";

export default function useExamTimer(initialTime, onTimeUp) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!timeLeft) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          onTimeUp();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [timeLeft, onTimeUp]);

  const resetTimer = (newTime) => setTimeLeft(newTime);

  return [timeLeft, resetTimer];
}
