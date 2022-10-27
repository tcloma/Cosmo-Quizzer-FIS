import { useState } from "react"

const CharacterGenerator = ({ setPlayerId, setSliderData, playerId }) => {

  const [sliderA, setSliderA] = useState(100)
  const [sliderB, setSliderB] = useState(50)
  const [sliderC, setSliderC] = useState(25)

  const handleClick = () => {
    setPlayerId(playerId + 1)
    setSliderData({
      'sliderA': sliderA,
      'sliderB': sliderB,
      'sliderC': sliderC
    })
  }

  return (
    <div className="stats">
      <h1> Customization </h1>
      <p> Saturation </p>
      <input
        type='range'
        value={sliderA}
        onChange={(e) => setSliderA(e.target.value)}
      />
      <p> Color Variation </p>
      <input
        type='range'
        value={sliderB}
        onChange={(e) => setSliderB(e.target.value)}
      />
      <p> Edge Brightness </p>
      <input
        type='range'
        value={sliderC}
        onChange={(e) => setSliderC(e.target.value)}
      />
      <br></br>
      <button onClick={handleClick}> Generate </button>
    </div>
  )
}
export default CharacterGenerator;