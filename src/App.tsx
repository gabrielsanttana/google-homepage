import styles from './App.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FaBars, FaKeyboard, FaSearch, FaTh} from 'react-icons/fa';
import GoogleLogo from './assets/google-logo.png';
import KeyboardIcon from './assets/keyboard.png';
import MicIcon from './assets/mic.svg';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.leftMenuItem}>
          <FaBars color="#999" />

          <nav>
            <ul>
              <li>
                <a href="#">All</a>
              </li>

              <li>
                <a href="#">Images</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.rightMenuItem}>
          <nav>
            <ul>
              <li>
                <a href="#">Gmail</a>
              </li>

              <li>
                <a href="#">Images</a>
              </li>
            </ul>
          </nav>

          <FaTh color="#999" />

          <img
            src="https://avatars.githubusercontent.com/u/47339825?s=460&u=185ed18386f6fe2aac392ab8968a25139dc1c087&v=4"
            alt="Avatar Image"
          />
        </div>
      </header>

      <main>
        <div>
          <img
            alt="Google"
            height="92"
            src={GoogleLogo}
            width="272"
            data-atf="1"
          />

          <div className={styles.inputContainer}>
            <FaSearch color="#9aa0a6" />
            <input type="text" autoFocus />
            <div>
              <FaKeyboard color="#" size="20" />
              <img src={MicIcon} alt="Mic Icon" />
            </div>
          </div>

          <div className={styles.buttonsContainer}>
            <button>Pesquisa Google</button>

            <button>Sinto-me com sorte</button>
          </div>

          <div className={styles.info}>
            Disponibilizado pelo Google em: <a href="#">English</a>{' '}
            <a href="#">Português (Brasil)</a>{' '}
          </div>
        </div>
      </main>

      <footer>
        <div className={styles.countryContainer}>
          <span>Brazil</span>
        </div>

        <div className={styles.linksContainer}>
          <ul className={styles.leftSidelinks}>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>

          <ul className={styles.rightSidelinks}>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
