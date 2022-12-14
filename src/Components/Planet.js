import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import QuizSection from "./QuizSection"
import Dialogue from "./SubComponents/Dialogue";

const Planet = ({ planetId, playerUrl, getUrl, lives, setLives, numberCorrect, setNumberCorrect, questions, cleared }) => {

  // States
  const [questionId, setQuestionId] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(15)
  const [timerStart, setTimerStart] = useState(false)
  const [startConvo, setStartConvo] = useState(false)
  const [leaving, setLeaving] = useState(false)

  // Constant Variables
  const planetUrl = getUrl(planetId)
  const currentQuestions = questions[planetId - 1].content[questionId]

  // console.log(currentQuestions)

  useEffect(() => {
    if (cleared) return
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
      setTimerStart(false)
      clearTimeout(timerId)

    }

    if (currentQuestions === undefined) {
      setTimerStart(false)
      clearTimeout(timerId)
    }


    return function () {
      clearTimeout(timerId);
    };
  }, [timeRemaining, timerStart, lives])


  useEffect(() => {
    if (cleared) return
    setTimeout(() => {
      setStartConvo(true)
    }, 2000)

    setTimeout(() => {
      setTimerStart(true)
      setStartConvo(false)
    }, 9000)
  }, [])

  const checkAnswer = (correct) => {
    correct ? alert("correct!") : alert("incorrect!")
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
      {leaving && <Navigate to="/Map" />}
      {(lives === 0) && <Navigate to="/Death" />}
      {(currentQuestions === undefined) && (planetId === "5" ? <Navigate to="/Win" /> : <Navigate to="/Map" />)}

      {startConvo ?
        <div className="dialogue-box">
          <Dialogue planetId={planetId} />
        </div>
        : null}
      <img className='planet' src={planetUrl} alt="planet" style={{ width: "800px", height: "800px", zIndex:"-5" }} />
      <img
        className='player'
        alt='player'
        src={playerUrl}
      />
      {cleared || <img
        className='enemy'
        alt="enemy"
        src={`https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?saturation=0&size=200&id=${planetId}`}
      />}

      {cleared && <button onClick={() => {setLeaving(true)}}>Return to Map</button>}

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