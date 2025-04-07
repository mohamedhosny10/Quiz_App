import { useState } from "react";
import QUESTIONS from "../questions";
import CompletePhoto from "../assets/quiz-complete.png";
import QuizTimer from "./QuizTimer";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeUserAnswerIndex = userAnswers.length;

  const quizIsComplete = activeUserAnswerIndex === QUESTIONS.length;

  function handleUserSelect(selectedAnswer) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }
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
          <QuizTimer timeOut={10000} onTimeOut={() => handleUserSelect(null)} />
          <h2>{QUESTIONS[activeUserAnswerIndex].text}</h2>
          <ul id="answers">
            {shuffledAnswer.map((answer) => (
              <li key={answer} className="answer">
                <button onClick={() => handleUserSelect(answer)}>
                  {" "}
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Quiz;
