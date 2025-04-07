import React from "react";
import { useState, useEffect } from "react";
const QuizTimer = ({timeOut, onTimeOut}) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);
  useEffect(() => {
    setTimeout(onTimeOut, timeOut);
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevtime) => prevtime - 100);
    }, 100);
  }, []);
  return (
    
      <progress id="question-time" max={timeOut} value={remainingTime} />
    
  );
};

export default QuizTimer;
