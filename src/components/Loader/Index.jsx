import React from 'react';
import './style.css'
function Loader() {
    return (
        <div className="dot-spinner">
            <div className="dot-spinner__dot" />
            <div className="dot-spinner__dot" />
            <div className="dot-spinner__dot" />
            <div className="dot-spinner__dot" />
            <div className="dot-spinner__dot" />
            <div className="dot-spinner__dot" />
            <div className="dot-spinner__dot" />
            <div className="dot-spinner__dot" />
        </div>
    );
}

export default Loader;
