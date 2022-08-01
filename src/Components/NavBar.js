
import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Star Map</Link>
                </li>
                <li>
                    <Link to="/Planet">Planet</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;