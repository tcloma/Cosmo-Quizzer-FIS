const PlanetGallery = ({getUrl}) => {

  const idArr = [1, 2, 3, 4, 5]
  
  return(
    <div className="bottom-section">
      <div className="planet-gallery">
        {idArr.map((id, index) => {
          return (
            <div className="gallery-item">
              <img
                className="gallery-planet"
                alt='planet'
                key={index}
                src={getUrl(index)}
              />
              <img
                className="gallery-inhabitant"
                alt='inhabitant'
                key={5 + index}
                src={`https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?saturation=0&size=200&id=${id}`}
              />
            </div>
          )
        })}
      </div>
      <div className="stat-buttons">
        <button> Question Log </button>
        <button> Other Button </button>
      </div>
    </div>
  )
}
export default PlanetGallery