import PropTypes from 'prop-types';

const hangmanClass = (step) => `hangman hangman-${step}`;

export default function Score({ step = 5 }) {
    return (
      <div className="score">
        <div className="stickman">
          <div className={hangmanClass(step)}></div>
        </div>
      </div>
    );
}

Score.propTypes = {
  step: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
};
