const PlanetGallery = ({ getUrl, showQuestions, setShowQuestions, planetsCleared }) => {

  const setStyle = (index) => {
    if(index < planetsCleared){
      return 100
    }
    else{
      return 0
    }
  }
  return (


    <div className="bottom-section">
      <div className="planet-gallery">
        {[2, 3, 4, 5, 6].map((id, index) => {
          return (
            <div key={index} className="gallery-item">
              <img
                className="gallery-planet"
                alt='planet'
                src={getUrl(index + 1)}
                style={{filter: `brightness(${setStyle(index)}%)`}}
              />
              <img
                className="gallery-inhabitant"
                alt='inhabitant'
                src={`https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?saturation=0&size=200&id=${id}`}
                style={{ filter: `brightness(${setStyle(index)}%)` }}
              />
            </div>
          )
        })}
      </div>
      <div className="stat-buttons">
        <button onClick={() => setShowQuestions(!showQuestions)}> Question Log </button>
      </div>
    </div>
  )
}
export default PlanetGallery