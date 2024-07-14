import PropTypes from 'prop-types';

function Button({children}) {
  return (
    <button>
      {children}
    </button>
  );
}

Button.propTypes = {
  // children is a component that is passed as a prop to Button
  children: PropTypes.node.isRequired,
};


export default Button;
