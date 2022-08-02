import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import StarMap from './StarMap'
import Planet from './Planet'
import NavBar from './NavBar';
import StatScreen from "./StatScreen";

const GameContainer = () => {

  const getUrl = (id) => `https://app.pixelencounter.com/api/basic/planets?frame=13&width=800&height=800&size=500&disableStars=true&disableBackground=true&id=${id}`

  const ROWS = 6
  const COLS = 6


  const [squares, setSquares] = useState([])

  const [planetId, setPlanetId] = useState(1)
  const [playerId, setPlayerId] = useState(1)
  const [sliderData, setSliderData] = useState([])

  useEffect(() => {
    let newSquares = [...Array(ROWS)].map(() => Array(COLS).fill(""))
    for (let i = 0; i < ROWS; i++) {
      newSquares[i][Math.floor(Math.random() * COLS)] = getUrl(i + 1)
    }
    setSquares(newSquares)
  }, [])

  return (
    <div style={{ marginTop: '20px' }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<StarMap squares={squares} ROWS={ROWS} COLS={COLS} setPlanetId={setPlanetId} />} />
          <Route path="/Planet" element={<Planet planetId={planetId} playerId={playerId} sliderData={sliderData}/>} />
          <Route path='/StatScreen' element={<StatScreen playerId={playerId} setPlayerId={setPlayerId} setSliderData={setSliderData} sliderData={sliderData}/>} />
        </Routes>
      </Router>
    </div>
  )
}
export default GameContainer;