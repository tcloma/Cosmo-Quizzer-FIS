

const StarMap = ({setPlanetId}) => {

  const getUrl = (id) => `https://app.pixelencounter.com/api/basic/planets?frame=13&width=800&height=800&size=500&disableStars=true&disableBackground=true&id=${id}`




  return (
    <div>
      <p> Star Map </p>
      <img key="1" src={getUrl(1)} alt="planet 1" onClick={() => {setPlanetId(1)}} />
      <img key="2" src={getUrl(2)} alt="planet 2" onClick={() => { setPlanetId(2) }} />
      <img key="3" src={getUrl(3)} alt="planet 3" onClick={() => { setPlanetId(3) }} />
      <img key="4" src={getUrl(4)} alt="planet 4" onClick={() => { setPlanetId(4) }} />
      <img key="5" src={getUrl(5)} alt="planet 5" onClick={() => { setPlanetId(5) }} />
    </div>
  )
}
export default StarMap