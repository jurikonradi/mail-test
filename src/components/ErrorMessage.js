import React from "react";

import './ErrorMessage.sass';

function ErrorMessage(props) {
    return (
        <div>
            <p className="ErrorMessage">{props.message}</p>
        </div>
    );
};

export default ErrorMessage;