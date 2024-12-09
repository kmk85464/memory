import React from "react";
const Card = ({ card, handleClick, isFlipped }) => {
    return (
        <div
            className={`card ${isFlipped ? "flipped" : ""}`}
            onClick={() => handleClick(card.id)}>
            {isFlipped ? <span>{card.content}</span> : <span>?</span>}
        </div>
    );
};
export default Card;
