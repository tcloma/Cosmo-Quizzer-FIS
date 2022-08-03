import { useState, useEffect } from "react";
import QuizSection from "./QuizSection"
import questions from "../questions";

const Planet = ({ planetId, playerId, sliderData, lives, setLives }) => {

  // Destructured props
  const {sliderA, sliderB, sliderC} = sliderData;

  // States
  const [questionId, setQuestionId] = useState(1)
  const [timeRemaining, setTimeRemaining] = useState(10)
  const [timerStart, setTimerStart] = useState(false)

  // Constant Variables
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
        <img className='planet'src={planetUrl} alt="planet" />
        <img
          className='player'
          alt='player'
          src={`https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?size=200&saturation=${sliderA/100}&colored=true&colorVariations=${sliderB/100}&edgeBrightness=${sliderC/100}&id=${playerId}`}
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