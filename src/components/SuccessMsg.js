import React from "react";
import './SuccessMsg.sass'
import successIcon from './../assets/images/ic_success.svg'
import SocialApps from './SocialApps';

function SuccessMsg() {
    return (
        <div className='form'>
            <img className='success-icon' src={successIcon} alt='Success Icon' width="44" height="77" />
            <h1>Thanks for subscribing!</h1>
            <p>You have successfully subscribed to our email listing. Check your email for the discount code.</p>
            <hr />
            <SocialApps />
        </div>)
}
export default SuccessMsg;