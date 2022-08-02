import { useState } from "react";

const StatScreen = ({ playerId, setPlayerId, setSliderData }) => {

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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div id="stat-screen">
        <div className="top-section">
          <div className="player-img">
            <img
              className="player-closeup"
              alt='player'
              src={`https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?size=200&saturation=${sliderA / 100}&colored=true&colorVariations=${sliderB/100}&edgeBrightness=${sliderC/100}&id=${playerId}`}
            />
          </div>
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
            {sliderA},{sliderB},{sliderC}
          </div>
        </div>
        <div className="bottom-section">
          <h1>Stats</h1>
        </div>
      </div>
    </div>
  )
}
export default StatScreen;