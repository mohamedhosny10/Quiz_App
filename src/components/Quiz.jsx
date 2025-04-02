import { useState } from "react";
import QUESTIONS from "../questions";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeUserAnswerIndex = userAnswers.length;
  function handleUserSelect(selectedAnswer) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }
  return (
    <>
      <div id="quiz">
        <div id="question">
          <h2>{QUESTIONS[activeUserAnswerIndex].text}</h2>
          <ul id="answers">
            {QUESTIONS[activeUserAnswerIndex].answers.map((answer) => (
              <li key={answer} className="answer">
                <button onClick={() => handleUserSelect(answer)}> {answer}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Quiz;
