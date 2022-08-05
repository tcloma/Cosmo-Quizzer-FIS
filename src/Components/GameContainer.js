import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import StarMap from './StarMap'
import Planet from './Planet'
import NavBar from './NavBar';
import StatScreen from "./StatScreen";
import questions from "../questions";
import Instructions from "./Instructions";
import Win from "./Win";

const GameContainer = () => {

  const getUrl = (id) => `https://app.pixelencounter.com/api/basic/planets?frame=13&width=240&height=240&disableStars=true&disableBackground=true&disableSatellites=true&id=${id}`

  const ROWS = 6
  const COLS = 6

  const Transition = () => {

    const [finish, setFinish] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setFinish(true);
      }, 500)
    })

    return (
      <div>
        {finish ? <Navigate to="/Planet" /> :
          <video autoPlay muted loop width="750" height="500" >
            <source src="transition.mp4" type="video/mp4" />
          </video>}
        <h1>Traveling to planet...</h1>
      </div>
    )
  }

  const [squares, setSquares] = useState([])
  const [clearance, setClearance] = useState(1)
  const [position, setPosition] = useState([0, 0])

  const [lives, setLives] = useState(5)
  const [planetId, setPlanetId] = useState(1)
  const [numberCorrect, setNumberCorrect] = useState(0)

  const [playerId, setPlayerId] = useState(1)
  const [sliderData, setSliderData] = useState({
    'sliderA': 100,
    'sliderB': 50,
    'sliderC': 25
  })

  const [scoreBoardData, setScoreBoardData] = useState([])

  const { sliderA, sliderB, sliderC } = sliderData;
  const playerUrl = `https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?size=200&saturation=${sliderA / 100}&colored=true&colorVariations=${sliderB / 100}&edgeBrightness=${sliderC / 100}&id=${playerId}`

  const move = (row, col, element) => {
    if (row > clearance || col > clearance) {
      document.getElementById(`popup@(${row},${col})`).classList.remove('hidden')
      setTimeout(() => { document.getElementById(`popup@(${row},${col})`).classList.add('hidden') }, 1000)
      return false
    }
    setPosition([row, col])
    //squares[row][col].hidden = false;
    if (element.type === "planet" && element.hidden) setClearance(clearance + 1)
    if (element.hidden) {
      let newSquares = [...squares];
      newSquares[row][col].hidden = false;
      setSquares(newSquares)
    }
    return true;
  }

  useEffect(() => {
    let newSquares = [...Array(ROWS)].map(() => [...Array(COLS)].map(() => { return { hidden: true, img: "", type: "empty", subtype: "" } }))
    newSquares[0][0] = { hidden: false, img: "Earth.png", type: "planet", subtype: "home" }; //Replace this with our starter planet
    for (let distance = 1; distance < ROWS; distance++) {
      const randomPos = Math.floor(Math.random() * (distance + distance + 1)) - distance
      const nextPlanet = { hidden: true, img: getUrl(distance), type: "planet", subtype: `${distance}` }
      randomPos > 0 ? newSquares[distance - randomPos][distance] = nextPlanet : newSquares[distance][distance + randomPos] = nextPlanet;
    }
    setSquares(newSquares)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      let request = await fetch('http://localhost:3001/scores')
      let data = await request.json()
      setScoreBoardData(data)
      console.log(scoreBoardData)
    }
    fetchData()

  }, [])

  return (
    <div style={{ marginTop: '20px' }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Instructions />} />
          <Route path="/Map" element={
            <StarMap
              squares={squares}
              ROWS={ROWS}
              COLS={COLS}
              setPlanetId={setPlanetId}
              move={move}
              playerUrl={playerUrl}
              position={position}
            />} />
          <Route path="/transition" element={
            <Transition />
          } />
          <Route path="/Planet" element={
            <Planet
              getUrl={getUrl}
              playerUrl={playerUrl}
              planetId={planetId}
              lives={lives}
              setLives={setLives}
              numberCorrect={numberCorrect}
              setNumberCorrect={setNumberCorrect}
              questions={questions}
              // setPlanetsCleared={setClearance}
              planetsCleared={clearance - 1}
            />} />
          <Route path='/StatScreen' element={
            <StatScreen playerId={playerId}
              setPlayerId={setPlayerId}
              setSliderData={setSliderData}
              playerUrl={playerUrl}
              getUrl={getUrl}
              lives={lives}
              numberCorrect={numberCorrect}
              planetsCleared={clearance - 1}
            />} />
          <Route path="/Death" element={
            <Win
              lost={true}
              lives={lives}
              planetsCleared={clearance}
              scoreBoardData={scoreBoardData}
              setScoreBoardData={setScoreBoardData} />
          } />
          <Route path="/Win" element={
            <Win
              lost={false}
              lives={lives}
              planetsCleared={clearance}
              scoreBoardData={scoreBoardData}
              setScoreBoardData={setScoreBoardData} />
          } />
        </Routes>
      </Router>
    </div>
  )
}
export default GameContainer;