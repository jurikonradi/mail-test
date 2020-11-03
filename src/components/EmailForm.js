import React, { useState } from "react";

import arrowIcon from './../assets/images/ic_arrow.svg';
import ErrorMessage from './ErrorMessage';
import './EmailForm.sass'
import './ErrorMessage.sass'
import emailTldExtractor from './../utils/emailTldExtractor';
import SocialApps from './SocialApps';

const probihidetTlds = {
    "country": "Columbia",
    "topLevelDomain": "co"
};

function EmailForm(props) {
    const [errorMessage, setErrorMessage] = useState('');
    const userEmailInput = React.createRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userEmailInput.current.value);

        if (emailTldExtractor(userEmailInput.current.value) === '') {
            setErrorMessage(`Please provide a valid e-mail address.`);
        } else {
            if (emailTldExtractor(userEmailInput.current.value) === probihidetTlds.topLevelDomain) {
                setErrorMessage(`We are not accepting subscriptions from ${probihidetTlds.country} emails.`);
                console.log({ errorMessage });
            } else {
                setErrorMessage("");
                props.stateChanger();
            };
        }
    };

    return (
        <div className='form'>
            <div>
                <h1>Subscribe to newsletter</h1>
                <p>Subscribe to our newsletter and get 10% discount on pineapple glasses.</p>
            </div>
            <div className='prevent-growin-by-child'>
                <form onSubmit={handleSubmit} className='email-box'>
                    <input
                        type="email"
                        className='email'
                        size='20'
                        placeholder="Type your email address here..."
                        ref={userEmailInput}
                        required
                    />
                    <input type="image" id="image" alt="Submit"
                        src={arrowIcon}
                        width="58" height="58"
                    />
                </form>
            </div>
            {errorMessage && <ErrorMessage message={errorMessage} />}
            <div className='terms'>
                <label className="terms-container">I agree to <a href="#t">terms of service</a>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
            </div>
            <SocialApps />
        </div>
    );
};

export default EmailForm;