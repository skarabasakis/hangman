import PropTypes from 'prop-types';
import Button from "./button";
import { IconReload, IconSettings } from "./icons";

function Header({onReload}) {
    return (
      <header>
        <div>
          <h1>Hangman</h1>
          <nav>
            <Button onClick={onReload}>
              <IconReload />
            </Button>
            <Button>
              <IconSettings />
            </Button>
          </nav>
        </div>
      </header>
    );
}

Header.propTypes = {
  onReload: PropTypes.func.isRequired,
};

export default Header;
