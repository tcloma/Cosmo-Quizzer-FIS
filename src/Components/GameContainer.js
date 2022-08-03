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
    newSquares[0][0] = "Earth.jpg"; //Replace this with out starter planet
    for (let distance = 1; distance < ROWS; distance++) {
      const randomPos = Math.floor(Math.random() * (distance + distance + 1)) - distance
      randomPos > 0 ? newSquares[distance - randomPos][distance] = getUrl(distance) : newSquares[distance][distance + randomPos] = getUrl(distance);
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