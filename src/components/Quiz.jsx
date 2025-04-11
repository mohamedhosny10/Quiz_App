import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import CompletePhoto from "../assets/quiz-complete.png";
import QuizTimer from "./QuizTimer";

const Quiz = () => {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeUserAnswerIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeUserAnswerIndex === QUESTIONS.length;

  const handelSelectUser = useCallback(function handelSelectUser(
    selectedAnswer
  ) {
    setAnswerState("answered");
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
    setTimeout(() => {
      if (selectedAnswer === QUESTIONS[activeUserAnswerIndex].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }
      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    }, 1000);
  },
  []);
  const handelSkipAnswer = useCallback(
    () => handelSelectUser(null),
    [handelSelectUser]
  );
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={CompletePhoto} alt="Fisished Quiz" />
        <h2>Quiz is completed !</h2>
      </div>
    );
  }
  const shuffledAnswer = [...QUESTIONS[activeUserAnswerIndex].answers];
  shuffledAnswer.sort(() => Math.random() - 0.5);
  return (
    <>
      <div id="quiz">
        <div id="question">
          <QuizTimer timeOut={10000} onTimeOut={handelSkipAnswer} />
          <h2>{QUESTIONS[activeUserAnswerIndex].text}</h2>
          <ul id="answers">
            {shuffledAnswer.map((answer) => {
              const isSelected = userAnswers[userAnswers.length - 1] === answer;
              let cssClass = "";

              if (answerState === "answered" && isSelected) {
                cssClass = "selected";
              }
              if (
                (answerState === "correct" || answerState === "wrong") &&
                isSelected
              ) {
                cssClass = answerState;
              }
              return (
                <li key={answer} className="answer">
                  <button
                    onClick={() => handelSelectUser(answer)}
                    className={cssClass}
                  >
                    {" "}
                    {answer}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Quiz;
