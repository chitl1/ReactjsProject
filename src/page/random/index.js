import './index.css';
import { useState } from 'react';

const gifts = [
    'NHÀ',
    'Ô TÔ',
    '10 TỶ'
  ]

function RandomGift() {
    const [gift, setgift] = useState();

  const handleRandomGift = () =>  {
    const i = Math.floor(Math.random() * gifts.length)
    setgift(gifts[i])
  }
  return (
    <div className="gift-container">
      <h1> { gift || "CHƯA CÓ PHẦN THƯỞNG"}</h1>
      <button onClick={handleRandomGift}>
        Lấy Thưởng
      </button>
    </div>
  );
}

export default RandomGift;