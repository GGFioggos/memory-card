import React, { useState, useEffect } from 'react';

const CardContainer = (props) => {
    const { handleGameLogic, score, highScore } = props;

    let images = [
        {
            id: '0',
        },
        {
            id: '1',
        },
        {
            id: '2',
        },
        {
            id: '3',
        },
        {
            id: '4',
        },
    ];

    const [cards, setNewCards] = useState(images);

    const shuffle = (newCards) => {
        for (let i = newCards.length - 1; i > 0; i--) {
            let randomIdx = Math.floor(Math.random() * i);
            [newCards[randomIdx], newCards[i]] = [
                newCards[i],
                newCards[randomIdx],
            ];
        }
    };

    useEffect(() => {
        const newCards = [...cards];
        shuffle(newCards);
        setNewCards(newCards);
    }, [score, highScore]);
};

export default CardContainer;
