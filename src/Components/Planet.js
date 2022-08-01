import { useState, useEffect } from "react";

const Planet = ({ planetId }) => {

  const planetUrl = `https://app.pixelencounter.com/api/basic/planets?frame=13&width=300&height=300&disableStars=true&disableBackground=true&id=${planetId}`

  return (
    <div>
      <p> Planet </p>
      <img src={planetUrl} alt="planet" />
    </div>
  )
}
export default Planet;

// Write planet component so it takes prop URL
// Monster player & player entry (placeholders)
// Quiz container