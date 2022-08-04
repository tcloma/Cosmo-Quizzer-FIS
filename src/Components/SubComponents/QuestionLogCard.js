import { useState } from "react"

const QuestionLogCard = ({ questionObject }) => {

  const[isClicked, setIsClicked] = useState(false)

  const {prompt, answers, correctIndex} = questionObject
  const correctAnswer = answers[correctIndex]

  let localArray = []

  localArray.push(questionObject)

  return (
    <div className={isClicked ? 'log-card-flipped' : 'log-card'} onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? <h3>{correctAnswer}</h3> :<h3> {prompt} </h3>}
    </div>
  )
}
export default QuestionLogCard