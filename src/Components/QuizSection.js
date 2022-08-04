import { useState } from "react"

const QuizSection = ({ timeRemaining, lives, currentQuestions, checkAnswer }) => {

  let hearts = ''
  for (let i = 0; i < lives; i++) {
    hearts += '❤️'
  }

  return (
    <div id="quiz-container">
      {currentQuestions !== undefined ?
        <div id="quiz-section">
          <div id="quiz-wing"> {hearts}</div>
          <h1>{currentQuestions.prompt}</h1>
          <div className="quiz-buttons">
            {currentQuestions.answers.map((answer, index) => {
              const isCorrect = currentQuestions.correctIndex === index
              return (
                <button
                  key={index}
                  onClick={() => checkAnswer(isCorrect)}>
                  {answer}
                </button>
              )
            })}
          </div>
          <br />
          <div id='progress-bar'>
            <div id='progress-inner' style={{ width: `${timeRemaining / 15 * 100}%` }}></div>
          </div>
        </div>
        : null }
    </div>
  )
}
export default QuizSection;