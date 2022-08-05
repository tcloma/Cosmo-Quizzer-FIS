import { useState } from "react"
import { Navigate } from "react-router-dom"

const UI = () => {

  const [leaving, setLeaving] = useState(false)


  const handleClick = () => {
    setLeaving(true)
  }



  return(
    <div id="ui">
      {leaving && <Navigate to="/Map" />}
      <h3 onClick={handleClick}>
        Click here when ready to start/continue the game!
      </h3>
    </div>
  )
}
export default UI;