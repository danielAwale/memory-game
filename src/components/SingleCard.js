import React from 'react'
import "./SingleCard.css"

export const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleEvent = () => {
    if (!disabled)
      return handleChoice(card);
  }
  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}>
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

    </div>
  )
}
