// import logo from './logo.svg';
import './App.sass';

import pineappleLogo from './assets/images/logo_pineapple.svg';
import pineappleLogoLetters from './assets/images/pineapple..svg';
import EmailForm from './components/EmailForm';

function App({ }) {
  // const [count, setCount] = React.useState(0);
  return (
    <div className='main'>
      <div className='left-container'>
        <nav>
          <a href="#">
            <div id='logo'>
              <img src={pineappleLogo} alt="Pineapple Logo" />
              <img id='logo-letters' src={pineappleLogoLetters} alt="Pineapple Logo Letters" />
            </div>
          </a>
          <div>
            <ul className='links'>
              <li><a href="#">About</a>
              </li>
              <li><a href="#">How it works</a>
              </li>
              <li><a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='form-container'>
          <div className='form'>
            <div>
              <h1>Subscribe to newsletter</h1>
              <p>Subscribe to our newsletter and get 10% discount on pineapple glasses.</p>
            </div>
            <div>
              <EmailForm />
            </div>
            <div className='terms'>
              <label className="terms-container">I agree to <a href="">terms of service</a>
                <input type="checkbox" checked="checked" />
                <span className="checkmark"></span>
              </label>
            </div>
            <hr />
            <div className='social-apps'>
              <a href="#" className='facebook-logo'></a>
              <a href="#" className='insta-logo'></a>
              <a href="#" className='twitter-logo'></a>
              <a href="#" className='youtube-logo'></a>
            </div>
          </div>
        </div>
      </div>
      <div className='background-img'>
        <p> </p>
      </div>
    </div>
  );
};

export default App;

/* Original:
import logo from './logo.svg';
import './App.sass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
