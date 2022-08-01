import { useState, useEffect } from "react";

const Planet = () => {

  const [source, setSource] = useState("");

  useEffect(() => {
    setSource("https://app.pixelencounter.com/api/basic/planets?frame=13&id=2")
  }, [])

  return(
    <div>
      <p> Planet </p>
      {source && <img src={source} alt="planet" />}
    </div>
  )
}
export default Planet;