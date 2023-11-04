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

const courses = [
    {
        id: 1,
        name: "js"
    },
    {
        id:2,
        name:"ts"
    },
    {
        id:3,
        name:"reactjs"
    }
]

function BindingRadio() {
    const [check, setCheck] = useState();
    const handleSubmit = () =>{
        console.log(check)
    }
    return (
        <>
        {courses.map((course) => (
            <div key={course.id}>
                <input type="radio" checked={check === course.id} 
                onChange={()=>{setCheck(course.id)}}
                /> {course.name}<br/>
            </div>
        ))}
         <button onClick={handleSubmit}>Đăng ký</button>
        </>
    )
}

function BindingCheckbox(){
    const [check, setCheck] = useState([]);
    const handleSubmit = () =>{
    }
    const handleCheck =(id) => {
        const checked = check.includes(id)
        if(checked)
        {
            setCheck(check.filter(item => item !== id))
        }else{
            setCheck([...check, id])
        }
    }

    return(
        <>
        {courses.map((course) => (
            <div key={course.id}>
                <input type="checkbox" value={course.id} checked={check.includes(course.id)} 
                onChange={()=>{handleCheck(course.id)}}
                /> {course.name}<br/>
            </div>
        ))}
         <button onClick={handleSubmit}>Đăng ký</button>
        </>
    )
}


export default BindingCheckbox;