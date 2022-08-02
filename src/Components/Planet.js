import { useState, useEffect } from "react";
import QuizSection from "./QuizSection"
import questions from "../questions";

const Planet = ({ planetId, playerId }) => {

  const [lives, setLives] = useState(5)
  const [questionId, setQuestionId] = useState(1)
  const [timeRemaining, setTimeRemaining] = useState(10)
  const [timerStart, setTimerStart] = useState(false)
  // Lives should be in GameContainer
  // Pass down player from game container / character customization

  const planetUrl = `https://app.pixelencounter.com/api/basic/planets?frame=13&width=800&height=800&size=500&disableStars=true&disableBackground=true&id=${planetId}`
  const currentQuestions = questions.find((question) => question.id === questionId)

  const handleTimerStart = () => {
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
      if (timerStart === true && lives > 0) {
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

  const checkAnswer = (correct) => {
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

  return (
    <div id="closeup-planet">
      <div>
        <img src={planetUrl} alt="planet" />
        <img
          className='player'
          alt='player'
          src={`https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?saturation=1&size=200&colored=true&colorVariations=1&id=${playerId}`}
          cache='immutable'
          />
        <img
          className='enemy'
          alt="enemy"
          src={`https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?saturation=0&size=200&id=${planetId}`}
        />
      </div>

      
        {!timerStart ? <button onClick={handleTimerStart}> Start quiz </button> :
          <QuizSection
            lives={lives}
            timeRemaining={timeRemaining}
            checkAnswer={checkAnswer}
            currentQuestions={currentQuestions}
          />}
    </div>
  )
}
export default Planet;