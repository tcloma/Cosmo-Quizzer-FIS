import StarMap from './StarMap'
import Planet from './Planet'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './NavBar';

const GameContainer = () => {
  return(
    <div>
      <h1> Game Container </h1>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<StarMap />} />
          <Route path="/Planet" element={<Planet />} />
        </Routes>
      </Router>
      
    </div>
  )
}
export default GameContainer;