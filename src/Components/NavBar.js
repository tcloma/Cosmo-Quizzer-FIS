
import { Link } from "react-router-dom"

const NavBar = () => {

  return (
    <nav>
      <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
        <Link to="/Map">Star Map</Link>
        <Link to="/Planet">Planet</Link>
        <Link to='/StatScreen'> Stat Screen </Link>
      </div>
    </nav>
  )
}

export default NavBar;