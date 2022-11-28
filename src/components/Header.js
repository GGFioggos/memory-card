import React, { useState, useEffect } from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>Memory Card game</h1>
            <div>Score: {props.score}</div>
            <div>High Score: {props.highscore}</div>
        </div>
    );
};

export default Header;
