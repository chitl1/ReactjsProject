import './index.css';
import { useEffect, useState } from 'react';

const tabs = ["posts","comments","albums"]
function UseEffectHook() {
  const [datas, setDatas] = useState([])
  const [type, setType] = useState("posts");
  const [showGotoTop, setShowGotoTop] = useState(false);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => {
        setDatas(json)
      })
  },[type])
  
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY >=200){
        setShowGotoTop(true)
      }else{
        setShowGotoTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    //cleanup func
    return () =>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  return (
    <div className="callapi-container">
      <div>
        {
          tabs.map((tab)=>(
            <button key={tab}
            style={type === tab ? {color:'#fff',backgroundColor:'#333'}:{}}
            onClick={()=> setType(tab)}>{tab}</button>
          ))
        }
      </div>
      <ul>
        {
          datas.map((item) => (
            <li key={item.id}>{item.title || item.name}</li>
          ))
        }  
      </ul>
      {
        showGotoTop &&     
          <button style={{ position: 'fixed', right: 10, bottom: 20}}>go to top</button>

      }
    </div>
  );
}

export default UseEffectHook;