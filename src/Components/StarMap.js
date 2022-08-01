import { useEffect, useState } from "react"

const StarMap = () => {

  const [source, setSource] = useState("");

  useEffect(() => {
    setSource("https://app.pixelencounter.com/api/basic/planets?frame=13&id=1")
  }, [])




  return (
    <div>
      <p> Star Map </p>
      {source && <img src={source} alt="planet" />}
    </div>
  )
}
export default StarMap