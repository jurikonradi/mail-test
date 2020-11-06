import React, { useState } from "react";

import './App.sass';
import './sass/_typography.sass';

import pineappleLogo from './assets/images/logo_pineapple.svg';
import pineappleLogoLetters from './assets/images/pineapple..svg';

import EmailForm from './components/EmailForm';
import SuccessMsg from './components/SuccessMsg';

function App() {

  const [formIsSubmitted, setFormIsSubmitted] = useState({
    submitted: false,
    email: ''
  });
  const changeFormState = (argEmail) => {
    formIsSubmitted.submitted ? setFormIsSubmitted({
        submitted: false,
        email: argEmail }) 
    : setFormIsSubmitted({
        submitted: true,
        email: argEmail
    });
  };

  return (
    <div className='main'>
      <div className='left-container'>
        <nav>
          <a href="#t">
            <div id='logo'>
              <img src={pineappleLogo} alt="Pineapple Logo" />
              <img id='logo-letters' src={pineappleLogoLetters} alt="Pineapple Logo Letters" />
            </div>
          </a>
          <div>
            <ul className='links'>
              <li><a href="#t">About</a>
              </li>
              <li><a href="#t">How it works</a>
              </li>
              <li><a href="#t">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='form-container'>
          <div className='filler'></div>
          { !formIsSubmitted.submitted ? 
            <EmailForm 
              stateChangeFunc={ changeFormState}
              
              /> 
            : <SuccessMsg 
            
              email={formIsSubmitted.email}
              /> }
          <div className='filler'></div>
        </div>
      </div>
      <div className='background-img'>
        <p> </p>
      </div>
    </div>
  );
};

export default App;