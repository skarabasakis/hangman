import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Puzzle({puzzle, onWrongGuess = () => {}, onPuzzleSolved = ()=> {}, forceReveal = false}) {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const [ hiddenLetters, setHiddenLetters ] = useState(alphabet);

  const isCorrectGuess = letter => puzzle.phrase.includes(letter);
  const revealLetter = letter => setHiddenLetters(hiddenLetters.filter(l => l !== letter));
  const guessLetter = letter => {
    revealLetter(letter);
    isCorrectGuess(letter) || onWrongGuess();
  };

  const isLetter = char => char.match(/[a-z]/);
  const isLetterRevealed = letter => !hiddenLetters.includes(letter);
  const isPuzzleSolved = () => puzzle.phrase.split('').filter(isLetter).every(isLetterRevealed);

  useEffect(() => {
    if (forceReveal) {
      setHiddenLetters([]);
    }
  }, [forceReveal]);

  useEffect(() => {
    if (!forceReveal && puzzle && isPuzzleSolved()) {
      onPuzzleSolved();
    }
  }, [puzzle, forceReveal, hiddenLetters, onPuzzleSolved]); // eslint-disable-line react-hooks/exhaustive-deps

  return puzzle && (
    <>
      <div className="puzzle">
        <h2>{puzzle.category}</h2>
        <div className="tiles">
          {
            puzzle.phrase.split(' ').map((word, index) => (
              <span key={`word-${index}`} className='word'>
                {
                    word.split('').map((char, index) => {
                      if (isLetter(char)) {
                        return (
                          <span key={`puzzle-tile-${index}`} className='tile letter'>{ isLetterRevealed(char) ? char : '⠀' }</span>
                        )
                      } else {
                        return (
                          <span key={`puzzle-tile-${index}`} className='tile'>{char}</span>
                        )
                      }
                    })
                  }
              </span>
              ))
            }
        </div>
      </div>
      <div className="letterboard">
        <div className="letters">
          {alphabet.map((letter) => (
            <button key={`button-${letter}`} onClick={guessLetter.bind(this, letter)} disabled={isLetterRevealed(letter)} className="letter">{letter}</button>
          ))}
        </div>
      </div>
    </>
  )
}

Puzzle.propTypes = {
  puzzle: PropTypes.shape({
    category: PropTypes.string.isRequired,
    phrase: PropTypes.string.isRequired,
  }),
  onWrongGuess: PropTypes.func.isRequired,
  onPuzzleSolved: PropTypes.func.isRequired,
  forceReveal: PropTypes.bool.isRequired
};
