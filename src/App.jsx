import Footer from "./components/Footer"
import Header from "./components/Header"
import Puzzle from "./components/Puzzle"
import Results from "./components/Results"
import Score from "./components/Score"

import { useState } from 'react';

function App() {

  const maxLives = 6;
  const [ remainingLives, setRemainingLives ] = useState(maxLives);

  const loseLife = () => {
    setRemainingLives(remainingLives - 1);
  }

  const isGameOver = () => remainingLives === 0;

  const currentStep = () => (maxLives - remainingLives).toString();

  return (
    <>
      <Header />
      <main>
        <Score
          step={currentStep()}
          />
        <Puzzle
          category = "Quotes"
          phrase = "Be the change you wish to see in the world!"
          />
      </main>
      <Results isGameOver={isGameOver()}/>
      <Footer />
    </>
  )
}

export default App
