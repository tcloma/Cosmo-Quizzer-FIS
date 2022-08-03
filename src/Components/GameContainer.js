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
  const [clearance, setClearance] = useState(1)

  const [lives, setLives] = useState(5)
  const [planetId, setPlanetId] = useState(1)
  const [playerId, setPlayerId] = useState(1)
  const [sliderData, setSliderData] = useState([])

  const reveal = (row, col, foundPlanet) => {
    if(row > clearance || col > clearance) return false;
    //squares[row][col].hidden = false;
    let newSquares = [...squares];
    newSquares[row][col].hidden = false;
    setSquares(newSquares)
    if (foundPlanet) setClearance(clearance + 1)
  }

  useEffect(() => {
    let newSquares = [...Array(ROWS)].map(() => [...Array(COLS)].map(() => {return {hidden: true, img: "", type: "empty", subtype: ""}}))
    newSquares[0][0] = {hidden: false, img: "Earth.jpg", type: "planet", subtype: "home"}; //Replace this with our starter planet
    for (let distance = 1; distance < ROWS; distance++) {
      const randomPos = Math.floor(Math.random() * (distance + distance + 1)) - distance
      const nextPlanet = { hidden: true, img: getUrl(distance), type: "planet", subtype: `${distance}` }
      randomPos > 0 ? newSquares[distance - randomPos][distance] = nextPlanet : newSquares[distance][distance + randomPos] = nextPlanet;
    }
    setSquares(newSquares)
  }, [])

  return (
    <div style={{ marginTop: '20px' }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <StarMap
              squares={squares}
              ROWS={ROWS}
              COLS={COLS}
              setPlanetId={setPlanetId}
              reveal={reveal}
              clearance={clearance}
            />} />
          <Route path="/Planet" element={
            <Planet
              planetId={planetId}
              playerId={playerId}
              sliderData={sliderData}
              lives={lives}
              setLives={setLives}
            />} />
          <Route path='/StatScreen' element={
            <StatScreen playerId={playerId}
              setPlayerId={setPlayerId}
              setSliderData={setSliderData}
              sliderData={sliderData}
              lives={lives}
            />} />
        </Routes>
      </Router>
    </div>
  )
}
export default GameContainer;