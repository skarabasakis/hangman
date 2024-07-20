import PropTypes from 'prop-types';

export default function Results({showResults = false, isGameOver = false, onRestart = () => {}}) {
  return showResults && (
    <div className="results">
      <div>
        <h3 className="heading">{isGameOver ? "Game Over!" : "Puzzle Solved!"}</h3>
        <button className="button" onClick={onRestart}>Play Again</button>
      </div>
    </div>
  )
}

Results.propTypes = {
  showResults: PropTypes.bool.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  onRestart: PropTypes.func.isRequired
};
