import Button from "./button";
import { IconReload, IconSettings } from "./icons";


function Header() {
    return (
      <header>
        <div>
          <h1>Hangman</h1>
          <nav>
            <Button>
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

export default Header;
