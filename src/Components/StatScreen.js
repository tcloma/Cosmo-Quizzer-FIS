const StatScreen = ({ playerId, setPlayerId }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div id="stat-screen">
        <div className="top-section">
          <div className="player-img">
            <img
              alt='player'
              src={`https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?saturation=1&size=200&colored=true&colorVariations=1&id=${playerId}`}
            />
          </div>
          <div className="stats">
            <h1> Customization </h1>
            <button onClick={() => setPlayerId(playerId+1)}> Generate Random </button>
          </div>
        </div>
        <div className="bottom-section">
          <h1>Stats</h1>
        </div>
      </div>
    </div>
  )
}
export default StatScreen;