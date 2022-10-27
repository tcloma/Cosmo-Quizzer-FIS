const Scoreboard = ({ scoreBoardData }) => {
  return (
    <table className="scoreboard">
      <thead>
        <tr>
          <td>Player</td>
          <td>Planets Cleared</td>
          <td>Lives Remaining</td>
        </tr>
      </thead>
      <tbody>
        {scoreBoardData.map((score) => {
          return (
            <tr>
              <td>{score.Name}</td>
              <td>{score.PlanetsClearead}</td>
              <td>{score.LivesRemaining}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default Scoreboard;