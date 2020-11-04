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
        terms: false,
        errorMessage: ''
    });
    // const userEmailInput = React.createRef();
    function handleChange(event) {
        const value =
            event.target.type === 'checkbox' ?
                event.target.checked : event.target.value;
        setFormState({
            ...formState,
            [event.target.name]: value
        });
        console.log('handleChange: ', formState);
    };.

    function handleSubmit(event) {
        event.preventDefault();


        if (formState.email === '') {
            setFormState({
                ...formState,
                errorMessage: 'Please provide a valid e-mail address.'
            });
        } else if (formState.email === prohibitedTlds.topLevelDomain) {
            setFormState({
                ...formState,
                errorMessage: 'We are not accepting subscriptions from ' + prohibitedTlds.country + ' emails.'
            });
        } else if (formState.terms == false) {
            setFormState({
                ...formState,
                errorMessage: 'You must accept the terms and conditions.'
            });
        } else {
            setFormState({
                ...formState,
                errorMessage: ''
            });
            props.stateChanger();
        };

        // if (formState.terms === false) {
        //     setFormState(formState.errorMessage = 'You must accept the terms and conditions.');

        // } else if (formState.email === '') {
        //     setFormState(formState.errorMessage = 'Please provide a valid e-mail address.');
        // } else if (formState.email === prohibitedTlds.topLevelDomain) {
        //     setFormState(formState.errorMessage = 'We are not accepting subscriptions from ' + prohibitedTlds.country + ' emails.');
        // } else {
        //     setFormState(formState.errorMessage = '');
        //     props.stateChanger();
        // }

        // if (emailTldExtractor(formState.email) === '') {
        //     setFormState(formState.errorMessage = 'Please provide a valid e-mail address.');
        // } else {
        //     if (emailTldExtractor(formState.email) === prohibitedTlds.topLevelDomain) {
        //         setFormState(formState.errorMessage = 'We are not accepting subscriptions from ' + prohibitedTlds.country + ' emails.');
        //         console.log( formState.errorMessage );
        //     } else {
        //         setFormState(formState.errorMessage = "");
        //         props.stateChanger();
        //     };
        // }

        console.log('handleSubmit: ',formState);
        alert('email: ' + formState.email + ', terms: ' + formState.terms + ', errorMessage: ' + formState.errorMessage);
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
                        type="email"
                        name='email'
                        vaue={formState.email}
                        onChange={handleChange}
                        className='email'
                        size='20'
                        placeholder="Type your email address here..."
                        required
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

//ref={userEmailInput}