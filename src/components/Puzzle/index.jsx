import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Puzzle({category, phrase}) {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const [ hiddenLetters, setHiddenLetters ] = useState(alphabet);

  const revealLetter = (letter) => {
    setHiddenLetters(hiddenLetters.filter((l) => l !== letter));
  }

  const isInPuzzle = (letter) => {
    return phrase.toLowerCase().includes(letter);
  }

  const isLetterRevealed = (letter) => {
    return !hiddenLetters.includes(letter);
  }

  return (
    <>
      <div className="puzzle">
        <h2>{category}</h2>
        <div className="tiles">
          {
            phrase.split(' ').map((word, index) => (
              <span key={`word-${index}`} className='word'>
                {
                    word.split('').map((char, index) => {
                      if (char.match(/[A-Za-z]/)) {
                        return (
                          <span key={`puzzle-tile-${index}`} className='tile letter'>{ isLetterRevealed(char.toLowerCase()) ? char : '⠀' }</span>
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
            <button onClick={revealLetter.bind(this, letter)} key={`button-${letter}`} disabled={isLetterRevealed(letter)} className="letter">{letter}</button>
          ))}
        </div>
      </div>
    </>
  )
}

Puzzle.propTypes = {
  category: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
};
