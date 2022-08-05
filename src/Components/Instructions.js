import { useState } from "react"
import { Navigate } from "react-router-dom"

const Instructions = () => {

  const [ready, setReady] = useState(false)


  return (
    <>
      <div className="instructions">
        <div className="star-wars">
          <div className="crawl">
            <h1>Take over the solar system! Gain control of planets by answering questions correctly <span style={{ fontSize: "1px" }}>unless its about micheal's main in which case you must answer as incorrectly as possible</span></h1>
            <h2>You can only go as far away from your home planet as your clearance (which starts at 1). You can increase your clearance by taking over planets.</h2>
            <h2>The planets themselves are guarded by fearsome beasts of convergent intellect who can only be destroyed in mental combat.</h2>
            <h2>During mental combat, you will always deal damage to the opponent using your main character powers. In retaliation, the monsters will ask you trivia quesitions.</h2>
            <h2>Answering the trivia question incorrectly will reduce your mental health (represented by the red hearts). When you run out of health, you lose!</h2>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: '2em' , fontSize:'1.3em'}}>{ready ? <Navigate to="/StatScreen" /> : <button style={{ maxWidth: "30vh" }} onClick={() => setReady(true)}>Click Here to Start</button>}</div>
    </>
  )
}

export default Instructions