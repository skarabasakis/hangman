import PropTypes from 'prop-types';

export default function Results({isGameOver = false}) {
  return (
    <div className="results" style={{display: isGameOver ? "initial" : "none"}}>
      <div>
        <h3 className="heading">Puzzle Solved!</h3>
        <button className="button">Next puzzle</button>
      </div>
    </div>
  )
}

Results.propTypes = {
  isGameOver: PropTypes.bool.isRequired
};
