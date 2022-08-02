import { useState } from "react";
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

  const [planetId, setPlanetId] = useState(1)
  const [playerId, setPlayerId] = useState(1)

  return(
    <div style={{marginTop: '20px'}}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<StarMap setPlanetId={setPlanetId}/>} />
          <Route path="/Planet" element={<Planet planetId={planetId} playerId={playerId}/>} />
          <Route path='/StatScreen' element={<StatScreen playerId={playerId} setPlayerId={setPlayerId}/>} />
        </Routes>
      </Router>
      
    </div>
  )
}
export default GameContainer;