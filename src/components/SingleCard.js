import React from 'react'
import "./SingleCard.css"

export const SingleCard = ({ card }) => {
  return (
    <div className='card'>
      <img
        className='front'
        src={card.src}
        alt="front" />
      <img
        className='back'
        src="/img/cardCover.png"
        alt="cover" />
    </div>
  )
}
