import { useState } from "react";
import questions from '../questions'
import PlanetGallery from "./SubComponents/PlanetGallery";
import CharacterGenerator from "./SubComponents/CharacterGenerator";
import QuestionLogCard from "./SubComponents/QuestionLogCard";

const StatScreen = ({ playerId, setPlayerId, setSliderData, sliderData, playerUrl, getUrl, lives, numberCorrect, planetsCleared }) => {

  const [showQuestions, setShowQuestions] = useState(false)

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
            <h3> Planets Cleared </h3>
            <span> 🪐{planetsCleared} ✅{numberCorrect} ❤️{lives} </span>
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
            {questions.map((question) => {
              return <QuestionLogCard key={question.id} questionObject={question} />
            })}
          </div>
          : null}
      </div>
    </div>
  )
}
export default StatScreen;