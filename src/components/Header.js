import React, { useState, useEffect } from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <h1>Memory Card game</h1>
            <div className="stats">
                <div>Score: {props.score}</div>
                <div>High Score: {props.highscore}</div>
            </div>
            <div className="hint">Click every card only once!</div>
        </div>
    );
};

export default Header;
