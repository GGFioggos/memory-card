import React, { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
import Header from './Header';

const Game = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cardsArr, addCard] = useState([]);

    const handleScore = () => {
        setScore((prevScore) => prevScore++);
    };

    const handleHighScore = () => {
        setHighScore(score);
    };

    const handleCard = (cardName) => {
        addCard((prevArr) => [...prevArr, cardName]);
    };

    const reset = () => {
        setScore(0);
        addCard([]);
    };

    const handleGameLogic = (cardName) => {
        if (!cardsArr.includes(cardName)) {
            handleCard(cardName);
            handleScore();
        } else {
            handleHighScore();
            reset();
        }
    };

    return (
        <div>
            <Header score={score} highscore={highScore}></Header>
            <div className="card-container" id="card-container">
                <CardContainer
                    handleGameLogic={handleGameLogic}
                    score={score}
                    highScore={highScore}
                />
            </div>
        </div>
    );
};

export default Game;
