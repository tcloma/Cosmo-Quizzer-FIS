import PlanetGallery from "./SubComponents/PlanetGallery";
import CharacterGenerator from "./SubComponents/CharacterGenerator";
import QuestionLogCard from "./SubComponents/QuestionLogCard";
import questions from '../questions'
import { useState } from "react";

const StatScreen = ({ playerId, setPlayerId, setSliderData, sliderData, lives, getUrl }) => {

  const { sliderA, sliderB, sliderC } = sliderData;

  const [showQuestions, setShowQuestions] = useState(false)

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div id="stat-screen">
        <div className="top-section">
          <div className="player-img">
            <img
              className="player-closeup"
              alt='player'
              src={`https://app.pixelencounter.com/api/v2/basic/svgmonsters/image/png?size=200&saturation=${sliderA / 100}&colored=true&colorVariations=${sliderB / 100}&edgeBrightness=${sliderC / 100}&id=${playerId}`}
            />
            <img
              className="player-bg"
              alt="space"
              src='space.jpeg'
            />
          </div>
          <CharacterGenerator
            setSliderData={setSliderData}
            sliderData={sliderData}
            setPlayerId={setPlayerId}
            playerId={playerId}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="mid-text">
            <h3> Planets Cleared </h3>
            <span> ✅0 ❤️{lives} </span>
          </div>
        </div>
        <PlanetGallery 
        getUrl={getUrl} 
        showQuestions={showQuestions}
        setShowQuestions={setShowQuestions} 
        />
        {showQuestions ?
          <div className="log-container">
            {questions.map((question) => {
              return <QuestionLogCard questionObject={question} />
            })}
          </div>
          : null}
      </div>
    </div>
  )
}
export default StatScreen;