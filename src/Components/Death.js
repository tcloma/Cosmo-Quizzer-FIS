import { useState } from "react"
import { Navigate } from "react-router-dom"

const Death = () => {

    const [ready, setReady] = useState(false)


    return (
        <div>
            <h1>You died, loser</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>{<a href="/">Retry?</a>}</div>
        </div>
    )
}

export default Death