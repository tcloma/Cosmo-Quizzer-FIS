import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import StarMap from './StarMap'
import Planet from './Planet'
import NavBar from './NavBar';

const GameContainer = () => {

  const [planetId, setPlanetId] = useState(1)

  return(
    <div>
      <h1> Game Container </h1>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<StarMap setPlanetId={setPlanetId}/>} />
          <Route path="/Planet" element={<Planet planetId={planetId}/>} />
        </Routes>
      </Router>
      
    </div>
  )
}
export default GameContainer;