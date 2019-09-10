import React from 'react';
import './NotFound.css';

const NotFound = (props) => {
    return (
        <div id="not-found">
            <button onClick={() => props.history.goBack()}>Go Back</button>
        </div>
    );
};

export default NotFound;
