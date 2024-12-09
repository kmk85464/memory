import React, { useState } from "react";
import Card from "./Card";
const Board = () => {
    const [cards, setCards] = useState(shuffleCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    // Función para mezclar cartas
    function shuffleCards() {
        const cardImages = ["🍎", "🍌", "🍇", "🍓", "🍒", "🍍"];
        const deck = [...cardImages, ...cardImages]; // Duplicar las imágenes
        return deck
            .map((card) => ({ id: Math.random(), content: card, flipped: false }))
            .sort(() => Math.random() - 0.5);
    }
    // Manejar clic en una carta
    const handleCardClick = (id) => {
        const clickedCard = cards.find((card) => card.id === id);
        if (flippedCards.length < 2 && !clickedCard.flipped) {
            const newFlippedCards = [...flippedCards, clickedCard];
            setFlippedCards(newFlippedCards);
            // Si hay 2 cartas volteadas, verificar si coinciden
            if (newFlippedCards.length === 2) {
                if (newFlippedCards[0].content === newFlippedCards[1].content) {
                    setMatchedCards([...matchedCards, ...newFlippedCards.map((c) => c.id)]);
                    setFlippedCards([]);
                } else {
                    // Volver a voltear las cartas después de un tiempo
                    setTimeout(() => {
                        setCards((prevCards) =>
                            prevCards.map((card) =>
                                newFlippedCards.some((c) => c.id === card.id)
                                    ? { ...card, flipped: false }
                                    : card
                            )
                        );
                        setFlippedCards([]);
                    }, 1000);
                }
            }
            // Actualizar estado para mostrar la carta volteada
            setCards((prevCards) =>
                prevCards.map((card) =>
                    card.id === id ? { ...card, flipped: true } : card
                )
            );
        }
    };
    return (
        <div className="board">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    handleClick={handleCardClick}
                    isFlipped={flippedCards.some((c) => c.id === card.id) || matchedCards.includes(card.id)}
                />
            ))}
            {matchedCards.length === cards.length && <p>¡Ganaste el juego!</p>}
        </div>
    );
};
export default Board;
