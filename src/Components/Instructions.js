import { useState } from "react"
import { Navigate } from "react-router-dom"

const Instructions = () => {

    const [ready, setReady] = useState(false)


    return (
        <div>
            <h1>Play the Game by playing the game 4head</h1>
            <div style={{ display: "flex", justifyContent: "center"}}>{ready ? <Navigate to="/Map" /> : <button style={{maxWidth:"30vh"}} onClick={() => setReady(true)}>Click Here to Start</button>}</div>
        </div>
    )
}

export default Instructions