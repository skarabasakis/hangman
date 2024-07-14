import PropTypes from 'prop-types';

export default function Puzzle({
  category = "Quotes",
  phrase = "Be the change you wish to see in the world!",
}) {
  return (
    <div className="puzzle">
      <h2>{category}</h2>
      <div className="tiles">
        {
          phrase.split(' ').map((word, index) => (
            <span key={index} className='word'>
              {
                word.split('').map((char, index) => (
                  <span key={index} className={char.match(/[A-Za-z]/) ? 'tile letter' : 'tile'}>{char}</span>
                ))
              }
            </span>
          ))
        }
      </div>
    </div>
  )
}

Puzzle.propTypes = {
  category: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
};
