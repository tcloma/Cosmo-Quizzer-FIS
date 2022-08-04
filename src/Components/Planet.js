import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import QuizSection from "./QuizSection"
import Dialogue from "./SubComponents/Dialogue";

const Planet = ({ planetId, playerUrl, getUrl, lives, setLives, numberCorrect, setNumberCorrect, questions, planetsCleared }) => {

  // States
  const [questionId, setQuestionId] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(15)
  const [timerStart, setTimerStart] = useState(false)
  const [startConvo, setStartConvo] = useState(false)

  // Constant Variables
  const planetUrl = getUrl(planetId)
  const currentQuestions = questions[planetId - 1].content[questionId]

  // console.log(currentQuestions)

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (timerStart === true && lives > 0) {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }
    }, 1000);

    if (timeRemaining < 0) {
      setTimeRemaining(15);
      setTimerStart(false)
      clearTimeout(timerId)
      setLives(lives => lives - 1)
      setQuestionId(questionId => questionId + 1)
      return;
    }

    if (lives === 0) {
      alert('death sequence or smth idk')
      setTimerStart(false)
      clearTimeout(timerId)
      
    }

    if (currentQuestions === undefined){
      alert('win sequence or smth')
      setTimerStart(false)
      clearTimeout(timerId)
    }


    return function () {
      clearTimeout(timerId);
    };
  }, [timeRemaining, timerStart, lives])

  
  useEffect(() => {
    setTimeout(() => {
      setStartConvo(true)
    }, 2000)
    
    setTimeout(() => {
      setTimerStart(true)
      setStartConvo(false)
    }, 5000)
  }, [])
  
  const checkAnswer = (correct) => {
    console.log(correct)
    if (correct === true) {
      setQuestionId(questionId => questionId + 1)
      setTimeRemaining(15)
      setNumberCorrect(numberCorrect + 1)
    } else {
      setQuestionId(questionId => questionId + 1)
      setTimeRemaining(15)
      setLives(lives => lives - 1)
    }
  }

  return (
    <div id="closeup-planet">
      {(currentQuestions === undefined) && <Navigate to="/Map" />}
      {(lives === 0) && <Navigate to="/Death" />}

      {startConvo ?
        <div className="dialogue-box">
          <Dialogue planetId={planetId} />
        </div>
        : null}
      <img className='planet' src={planetUrl} alt="planet" style={{ width: "800px", height: "800px" }} />
      <img
        className='player'
        alt='player'
        src={playerUrl}
      />
      <img
        className='enemy'
        alt="enemy"
        src={`https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?saturation=0&size=200&id=${planetId}`}
      />

      {!timerStart ? null :
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