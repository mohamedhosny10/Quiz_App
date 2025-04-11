import React from "react";
import { useState, useEffect } from "react";
const QuizTimer = ({ timeOut, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);
  useEffect(() => {
    console.log("TImeOut");
    const timer = setTimeout(onTimeOut, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    console.log("Interval");
    const interval = setInterval(() => {
      setRemainingTime((prevtime) => prevtime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress id="question-time" max={timeOut} value={remainingTime} />;
};

export default QuizTimer;
