const QuizSection = ({ timeRemaining, lives, currentQuestions, checkAnswer }) => {

  let hearts = ''
  for (let i = 0; i < lives; i++) {
    hearts += '❤️'
  }

  return (
    <div id="quiz-section">
      <h1>{currentQuestions.prompt}</h1>
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
      <br />
      <div id='progress-bar'>
        <div id='progress-inner' style={{ width: `${timeRemaining * 10}%` }}></div>
      </div>
      <br />
      <span> Lives remaining: {hearts} </span>
    </div>
  )
}
export default QuizSection;