import { useState, useEffect } from "react";
import questions from "../questions";

const Planet = ({ planetId }) => {

  const [lives, setLives] = useState(5)
  const [questionId, setQuestionId] = useState(1)
  const [timeRemaining, setTimeRemaining] = useState(10)
  const [timerStart, setTimerStart] = useState(false)
  // Lives should be in GameContainer
  // Pass down player from game container / character customization

  const planetUrl = `https://app.pixelencounter.com/api/basic/planets?frame=13&width=800&height=800&size=500&disableStars=true&disableBackground=true&id=${planetId}`
  const currentQuestions = questions.find((question) => question.id === questionId)

  const handleTimerStart = () => {
    console.log(timerStart)
    setTimerStart(true)
  }

  useEffect(() => {
    if (timeRemaining < 0) {
      setTimeRemaining(10);
      setLives(lives => lives - 1)
      setQuestionId(questionId => questionId + 1)
      return;
    }
    
    const timerId = setTimeout(() => {
      if (timerStart === true && lives > 0){
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }
    }, 1000);
    
    if (lives === 0) {
      alert('dead')
    }

    return function () {
      clearTimeout(timerId);
    };
  }, [timeRemaining, timerStart, lives])

  const handleClick = (correct) => {
    console.log(correct)
    if (correct === true) {
      setQuestionId(questionId => questionId + 1)
      setTimeRemaining(10)
    } else {
      setQuestionId(questionId => questionId + 1)
      setTimeRemaining(10)
      setLives(lives => lives - 1)
    }
  }

  let hearts = ''
  for (let i = 0; i < lives; i++) {
    hearts += '❤️'
  }

  return (
    <div id="closeup-planet">
      <div>
        <img src={planetUrl} alt="planet" />
        <img
          className='player'
          alt='player'
          src="https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?saturation=0.5&size=100&colored=true" />
        <img
          className='enemy'
          alt="enemy"
          src="https://app.pixelencounter.com/api/basic/monsters/random/png?size=100" />
      </div>

      {!timerStart ? <button onClick={handleTimerStart}> Start quiz </button> : 
      
      <div id='quiz-section'>
        <h1>{currentQuestions.prompt}</h1>
        {currentQuestions.answers.map((answer, index) => {
          const isCorrect = currentQuestions.correctIndex === index
          return (
            <button
              key={index}
              onClick={() => handleClick(isCorrect)}>
              {answer}
            </button>
          )
        })}
        <br />
        <div id='progress-bar'>
          <div id='progress-inner' style={{width: `${timeRemaining*10}%`}}></div>
        </div>
        <br />
        <span> Lives remaining: {hearts} </span>
      </div>
      }
    </div>
  )
}
export default Planet;