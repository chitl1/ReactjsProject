import React, { useState } from "react";
import './index.css';

function Binding() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const handleSubmit = () =>{
        console.log({
            name, mail
        })
    }
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <input value={mail} onChange={e => setMail(e.target.value)}/>
            <button onClick={handleSubmit}>Đăng ký</button>
        </div>
    );
}

export default Binding;