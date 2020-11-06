import React, { useState } from "react";

import arrowIcon from './../assets/images/ic_arrow.svg';
import ErrorMessage from './ErrorMessage';
import './EmailForm.sass'
import './ErrorMessage.sass'
import emailTldExtractor from './../utils/emailTldExtractor';
import SocialApps from './SocialApps';

const prohibitedTlds = {
    "country": "Columbia",
    "topLevelDomain": "co"
};

function EmailForm(props) {
    const [formState, setFormState] = useState({
        email: '',
        email2: '',
        terms: false,
        errorMessage: ''
    });

    function handleChange(event) {
        const value =
            event.target.type === 'checkbox' ?
                event.target.checked : event.target.value;
        setFormState({
            ...formState,
            [event.target.name]: value
        });
    };

    let resultEmail = '';

    function handleSubmit(event) {
        event.preventDefault();

        // formState.email - mobile input
        // formState.email2 - desktop input
        if (formState.email2 !== '') {
            resultEmail = formState.email2;
        } else if (formState.email !== '') {
            resultEmail = formState.email;
        }
        console.log('resultEmail: ', resultEmail);

        console.log(formState);

        if (emailTldExtractor(resultEmail) === '') {
            setFormState({
                ...formState,
                errorMessage: 'Please provide a valid e-mail address.'
            });
        } else if (emailTldExtractor(resultEmail) === prohibitedTlds.topLevelDomain) {
            setFormState({
                ...formState,
                errorMessage: 'We are not accepting subscriptions from ' + prohibitedTlds.country + ' emails.'
            });
        } else if (formState.terms === false) {
            setFormState({
                ...formState,
                errorMessage: 'You must accept the terms and conditions.'
            });
        } else {
            setFormState({
                ...formState,
                errorMessage: ''
            });
            props.stateChangeFunc(resultEmail);
        };
    }

    return (
        <div className='form'>
            <div>
                <h1>Subscribe to newsletter</h1>
                <p>Subscribe to our newsletter and get 10% discount on pineapple glasses.</p>
            </div>
            <div className='prevent-growin-by-child'>
                <form
                    onSubmit={handleSubmit} className='email-box'
                >
                    <input
                        className='email'
                        type="email"
                        name='email'
                        value={formState.email}
                        onChange={handleChange}
                        size='17'
                        placeholder="Your email"
                        
                    />
                    <input
                        className='email-desktop'
                        type="email"
                        name='email2'
                        value={formState.email2}
                        onChange={handleChange}
                        size='40'
                        placeholder="Your email"
                        
                    />
                    <input type="image" id="image" alt="Submit"
                        src={arrowIcon}
                        width="58" height="58"
                    />
                </form>
            </div>
            <div className='terms'>
                <label className="terms-container">I agree to <a href="#t">terms of service</a>
                    <input
                        type="checkbox"
                        name='terms'
                        checked={formState.terms}
                        onChange={handleChange} />
                    <span className="checkmark"></span>
                </label>
            </div>

            {formState.errorMessage && <ErrorMessage message={formState.errorMessage} />}

            <SocialApps />
        </div>
    );
};

export default EmailForm;