import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnwsers, setUserAnwsers] = useState([]);

  // Derived State
  const activeQuestionIndex = userAnwsers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnwsers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              {" "}
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
