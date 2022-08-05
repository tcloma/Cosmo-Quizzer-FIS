import { useState } from "react";
import questions from '../questions'
import PlanetGallery from "./SubComponents/PlanetGallery";
import CharacterGenerator from "./SubComponents/CharacterGenerator";
import QuestionLogCard from "./SubComponents/QuestionLogCard";
import UI from "./UI";

const StatScreen = ({ playerId, setPlayerId, setSliderData, sliderData, playerUrl, getUrl, lives, numberCorrect, planetsCleared }) => {

  // States for ternary
  const [showQuestions, setShowQuestions] = useState(false)
  const [customQuestions, setCustomQuestions] = useState(false)

  // State for controlled form
  const [newPrompt, setNewPrompt] = useState('')
  const [newAnswers, setNewAnswers] = useState([])
  const [newCorrect, setNewCorrect] = useState(0)

  let localArray = []
  questions.map((object, index) => {
    if (planetsCleared - 1 >= index) {
      localArray.push(...object.content)
      // console.log(localArray)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newAnswers.split(','))
    const formData = {
      'prompt': newPrompt,
      'answers': newAnswers.split(','),
      'correctIndex': newCorrect-1
    }
    console.log(formData)
  }

  return (
    <>
    <UI />
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
          customQuestions={customQuestions}
          setCustomQuestions={setCustomQuestions}
          planetsCleared={planetsCleared}
        />

        {showQuestions ?
        <div className="log-container">
        {customQuestions ? 
          <form onSubmit={handleSubmit} className='question-form'>
            <input 
            value={newPrompt}
            onChange={(e) => setNewPrompt(e.target.value)}
            type='text' 
            name='prompt'
            placeholder="Question"/>
            <input
            value={newAnswers}
            onChange={(e) => setNewAnswers(e.target.value)}
            type='text'
            name='answers'
            placeholder="Choices"/>
            <input 
            value={newCorrect}
            onChange={(e) => setNewCorrect(e.target.value)}
            type='number'
            name='correct-choice'
            placeholder="Correct choice" />
            <button> Submit Question </button>
          </form>
        : 
              localArray.map((question, index) => {
                return <QuestionLogCard key={index} questionObject={question} />
              })}
        </div>
          : null}
      </div>
    </div>
    </>
  )
}
export default StatScreen;