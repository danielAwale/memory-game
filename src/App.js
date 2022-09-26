import { useState } from 'react';
import './App.css';

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


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  }

  console.log(cards);
  return (
    <div>
      <h1>Panda's Pic! Memory Game</h1>
      <button onClick={shuffleCards}>Let's Play!
      </button>
    </div>
  );
}

export default App;
