import { useState } from 'react';
import './App.css';
import { SingleCard } from './components/SingleCard';

const cardImages = [
  { "src": "/img/annoyed.png" },
  { "src": "/img/bored.png" },
  { "src": "/img/computertime.png" },
  { "src": "/img/cuteface.png" },
  { "src": "/img/pawwws.png" },
  { "src": "/img/pets.png" },
  { "src": "/img/shelftime.png" },
  { "src": "/img/sleepy.png" },
]

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  }

  const handleChoice = (card) => {
    return choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  console.log(choiceOne, choiceTwo);

  return (
    <div className='App'>
      <h1>Panda's Pic! Memory Game</h1>
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
              handleChoice={handleChoice} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
