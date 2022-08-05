import { useState } from "react"

const Win = ({ lives, planetsCleared, scoreBoardData, setScoreBoardData }) => {

  const [playerName, setPlayerName] = useState('')
  const [submitted, setSubmitted] = useState(false)


  let hearts = ''
  for (let i = 0; i < lives; i++) {
    hearts += '❤️'
  }

  let planets=''
  for (let i = 0; i < planetsCleared-1; i++) {
    planets += '🪐'
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      'Name': playerName,
      'PlanetsClearead': planets,
      'LivesRemaining': hearts
    }
    fetch('http://localhost:3001/scores', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    setScoreBoardData([...scoreBoardData, formData])
    console.log(scoreBoardData)
    setPlayerName('')
    setSubmitted(true)
  }

  

  return (
    <div>
      <h1>You won, winner!</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {submitted ?
          <table className="scoreboard">
            <thead>
              <tr>
                <td>Player</td>
                <td>Planets Cleared</td>
                <td>Lives Remaining</td>
              </tr>
            </thead>
            {scoreBoardData.map((score) => {
              return (
                <tbody>
                  <tr>
                    <td>{score.Name}</td>
                    <td>{score.PlanetsClearead}</td>
                    <td>{score.LivesRemaining}</td>
                  </tr>
                </tbody>
              )
            })}
          </table>
          :
          <>
            <form onSubmit={handleSubmit}>
              <h2> Enter your name:</h2>
              <input
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                type='text'
              />
              <button type="submit"> Submit </button>
            </form>
            <a href="/">Play Again?</a>
          </>
        }
      </div>
    </div>
  )
}

export default Win