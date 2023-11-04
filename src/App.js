import './App.css';
import { useState } from 'react';

const gifts = [
  'keo',
  'banh',
  'nha',
  'oto',
  '1ty'
]
function App() {
  const [gift, setgift] = useState();
  const randomGift = () =>  {
    const i = Math.floor(Math.random() * gifts.length)
    setgift(gifts[i])
  }
  return (
    <div className="App">
      <h1> { gift || "chua co phan thuwong"}</h1>
      <button onClick={randomGift}>
        lay thuong
      </button>
    </div>
  );
}

export default App;
