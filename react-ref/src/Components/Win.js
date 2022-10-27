import { useState } from "react"
import Scoreboard from "./SubComponents/Scoreboard"

const Win = ({ lost, lives, planetsCleared, scoreBoardData, setScoreBoardData }) => {

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
  
  const lifeCheck = () => {
    if (lost){
      return 'You died, loser'
    }
    else {
      return 'You win, winner!'
    }
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

  const sortedScoreBoard = [...scoreBoardData].sort((score1, score2) => {
    return score2.LivesRemaining.localeCompare(score1.LivesRemaining)
  })

  return (
    <div>
      <h1>{lifeCheck()}</h1>
      <a href="/"><p className="retry">Play Again?</p></a>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {submitted ?
          <Scoreboard scoreBoardData={sortedScoreBoard}/>
          :
          <>
            <form onSubmit={handleSubmit} className='end-form'>
              <h2> Enter your name:</h2>
              <input
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                type='text'
              />
              <button type="submit"> Submit </button>
            </form>
          </>
        }
      </div>
    </div>
  )
}

export default Win