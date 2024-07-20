import Footer from "./components/Footer"
import Header from "./components/Header"
import Puzzle from "./components/Puzzle"
import Results from "./components/Results"
import Score from "./components/Score"

import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid'

function App() {

  const maxLives = 6;
  const [remainingLives, setRemainingLives] = useState(maxLives);

  const [puzzle, setPuzzle] = useState(null);
  const [gameRoundId, setGameRoundId] = useState(uuid());
  const [isSolved, setIsSolved] = useState(false);

  const isGameOver = () => remainingLives === 0;
  const isRoundOver = () => isSolved || isGameOver();

  const restartGame = () => {
    setPuzzle(null);
    resetRound();
  }

  const resetRound = () => {
    setIsSolved(false);
    setRemainingLives(maxLives);
    setGameRoundId(uuid());
  };

  useEffect(() => {
    if (!puzzle) {
      fetch('https://cf-hangman-puzzles.skarabasakis.workers.dev/')
        .then(response => response.json())
        .then(data => {
          data.phrase = data.phrase.toLowerCase();
          setPuzzle(data);
        });
    }
  }, [puzzle]);

  return (
    <>
      <Header
        onReload={()=>restartGame()}
        />
      <main>
        <Score
          key={`score-${gameRoundId}`}
          step={(maxLives - remainingLives).toString()}
          />
        <Puzzle
          key={`puzzle-${gameRoundId}`}
          puzzle={puzzle}
          onWrongGuess={() => setRemainingLives(remainingLives - 1)}
          onPuzzleSolved={() => setIsSolved(true)}
          forceReveal={isRoundOver()}
          />
      </main>
      <Results showResults={isRoundOver()} isGameOver={isGameOver()} onRestart={()=>restartGame()}/>)
      <Footer />
    </>
  )
}

export default App
