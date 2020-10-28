import React, { useState } from "react";

import arrowIcon from './../assets/images/ic_arrow.svg';
import ErrorMessage from './ErrorMessage';
import './EmailForm.sass'
import './ErrorMessage.sass'
import emailTldExtractor from './../utils/emailTldExtractor';

const probihidetTlds = {
    "country": "Columbia",
    "topLevelDomain": "co"
};

function EmailForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const userEmailInput = React.createRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userEmailInput.current.value);

        if (emailTldExtractor(userEmailInput.current.value) === '') {
            setErrorMessage(`Please provide a valid e-mail address`);
        } else {
            if (emailTldExtractor(userEmailInput.current.value) === probihidetTlds.topLevelDomain) {
                setErrorMessage(`We are not accepting subscriptions from ${probihidetTlds.country} emails.`);
                console.log({ errorMessage });
            } else {
                setErrorMessage("");
            };
        }
    };

    return (
        <div>
            <div className='prevent-growin-by-child' id='form-container'>
                <form onSubmit={handleSubmit} className='email-box'>
                    <input
                        type="email"
                        className='email'
                        size='20'
                        placeholder="Type your email address here..."
                        ref={userEmailInput}
                        required
                    />
                    <input type="image" id="image" alt="Submit" width="58" height="58"
                         />
                </form>
            </div>
            <ErrorMessage message={errorMessage} />
        </div>
    );
};

export default EmailForm;

//<input src={arrowIcon}