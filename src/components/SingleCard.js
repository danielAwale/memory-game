import React from 'react'
import "./SingleCard.css"

export const SingleCard = ({ card, handleChoice }) => {
  const handleEvent = () => {
    return handleChoice(card);
  }
  return (
    <div className='card'>
      <img
        className='front'
        src={card.src}
        alt="front" />
      <img
        className='back'
        src="/img/cardCover.png"
        alt="cover"
        onClick={handleEvent} />
    </div>
  )
}
