import './App.css';
import { useState } from 'react';

const gifts = [
  'NHÀ',
  'Ô TÔ',
  '10 TỶ'
]
function App() {
  const [gift, setgift] = useState();
  const randomGift = () =>  {
    const i = Math.floor(Math.random() * gifts.length)
    setgift(gifts[i])
  }
  return (
    <div className="App">
      <h1> { gift || "CHƯA CÓ PHẦN THƯỞNG"}</h1>
      <button onClick={randomGift}>
        Lấy Thưởng
      </button>
    </div>
  );
}

export default App;
