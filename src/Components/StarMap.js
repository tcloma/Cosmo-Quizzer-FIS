import { useState } from "react"

import {Navigate} from "react-router-dom"

const StarMap = ({ROWS, COLS, squares, setPlanetId, move, playerUrl, position}) => {

  const [toPlanet, setToPlanet] = useState(null)


  const colorOf = (num) => {
    switch (num) {
      case 0:
        return "#fff"
      case 1:
        return "#c96"
      case 2:
        return "#c3c"
      case 3:
        return "#f03"
      case 4:
        return "#9c9"
      case 5:
        return "#33f"
      default:
        return "white"
    }
  }

  if (toPlanet) {

    if (toPlanet === "home") return (
      <Navigate to={`/StatScreen`} replace={true} />
    )

    return (
      <Navigate to={`/transition`} replace={true} />
    )
  }

  return (
    <div>
      <p> Star Map </p>
      {/*<img key="1" src={getUrl(1)} alt="planet 1" onClick={() => {setPlanetId(1)}} />
      <img key="2" src={getUrl(2)} alt="planet 2" onClick={() => { setPlanetId(2) }} />
      <img key="3" src={getUrl(3)} alt="planet 3" onClick={() => { setPlanetId(3) }} />
      <img key="4" src={getUrl(4)} alt="planet 4" onClick={() => { setPlanetId(4) }} />
      <img key="5" src={getUrl(5)} alt="planet 5" onClick={() => { setPlanetId(5) }} /> */}
      <div style={{
        display: "grid",
        gridTemplateRows: `repeat(${ROWS}, 13vh)`,
        gridTemplateColumns: `repeat(${COLS}, 13vh)`,
        justifyContent: "center",
      }}>
        {squares.map((element, row) => {
          return element.map((el, col) => {
            return (<div key={`${row},${col}`}
            onClick={() => {
              if (el.subtype === "home") {setToPlanet("home")} 
              if (move(row, col, el)) {
                if (el.type === "planet" && el.subtype !== "home") setPlanetId(el.img.slice(-1));
                if (el.type === "planet" && el.subtype !== "home") setToPlanet(el.subtype);
              }
            }} style={{
              // width: "10vh",
              // height: "10vh",
              border: `1px solid ${colorOf(Math.max(row, col))}`,
              display: "flex",
              placeContent: "center",
              backgroundImage: `${!el.hidden ? `url(${el.img})` :"url(space.jpeg)"}`,
              backgroundSize: "100% 100%",
            }}>
              <div className="popup hidden" id={`popup@(${row},${col})`}
              style={{
                position: "absolute",
                backgroundColor: "#000",
                maxWidth: "13vh"
              }}>You can't go here (find planets!)</div>
              {(position[0] === row && position[1] === col) 
                ? <img src={playerUrl} alt="player" style={{height:"70%", width:"51%", marginTop:"15%"}}/>
                : <p style={{ fontSize: "0.2em" }}>{`${row}, ${col}`}</p>}
            </div>)
          })
        })}
      </div>
    </div>
  )
}
export default StarMap