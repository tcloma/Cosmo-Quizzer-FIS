import { useState } from "react";
import questions from '../questions'
import PlanetGallery from "./SubComponents/PlanetGallery";
import CharacterGenerator from "./SubComponents/CharacterGenerator";
import QuestionLogCard from "./SubComponents/QuestionLogCard";

const StatScreen = ({ playerId, setPlayerId, setSliderData, sliderData, playerUrl, getUrl, lives, numberCorrect, planetsCleared }) => {

  const [showQuestions, setShowQuestions] = useState(false)
  // console.log(currentQuestions)

  let localArray = []
  questions.map((object, index) => {
    if (planetsCleared-1 >= index){
      localArray.push(...object.content)
      // console.log(localArray)
    }
  })
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div id="stat-screen">
        <div className="top-section">
          <div className="player-img">
            <img
              className="player-closeup"
              alt='player'
              src={playerUrl}
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
            <h3> Planets Discovered </h3>
            <span> ✅{numberCorrect} ❤️{lives} </span>
          </div>
        </div>
        
        <PlanetGallery
          getUrl={getUrl}
          showQuestions={showQuestions}
          setShowQuestions={setShowQuestions}
          planetsCleared={planetsCleared}
        />
        {showQuestions ?
          <div className="log-container">
            {localArray.map((question, index) => {
              return <QuestionLogCard key={index} questionObject={question} />
            })}
          </div>
          : null}
      </div>
    </div>
  )
}
export default StatScreen;