import { useState } from "react"

const QuestionLogCard = ({ questionObject }) => {

  const[isClicked, setIsClicked] = useState(false)

  const {prompt, answers, correctIndex} = questionObject

  return (
    <div className="log-card" onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? {answers} :<h3> {prompt} </h3>}
    </div>
  )
}
export default QuestionLogCard