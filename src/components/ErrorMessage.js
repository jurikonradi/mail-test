import React from "react";

import './ErrorMessage.sass';

function ErrorMessage(props) {
    return (
        <div>
            <p className="error-message">{props.message}</p>
        </div>
    );
};

export default ErrorMessage;