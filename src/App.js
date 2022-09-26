import { useEffect, useState } from 'react';
import './App.css';
import { SingleCard } from './components/SingleCard';

const cardImages = [
  { "src": "/img/annoyed.png", matched: false },
  { "src": "/img/bored.png", matched: false },
  { "src": "/img/computertime.png", matched: false },
  { "src": "/img/cuteface.png", matched: false },
  { "src": "/img/pawwws.png", matched: false },
  { "src": "/img/pets.png", matched: false },
  { "src": "/img/shelftime.png", matched: false },
  { "src": "/img/sleepy.png", matched: false },
]

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  }

  const handleChoice = (card) => {
    return choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevValue => {
          return prevValue.map((card) => {
            if (card.src === choiceTwo.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  }



  return (
    <div className='App'>
      <h1>Panda's Pik! Memory Game</h1>
      <button
        onClick={shuffleCards}>
        Let's Play!
      </button>


      <div className='card-grid'>
        {cards.map(card => {
          return (
            <SingleCard
              card={card}
              key={card.id}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
