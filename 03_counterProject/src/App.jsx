import { useState } from 'react'

import './App.css'

function App() {
  let [value,setValue]=useState(10);
  let[randomNum,setRandomNum]=useState(null);
  const generateRandom = () => Math.floor(Math.random() * 10 + 1);
  const message=()=>{
    const random=generateRandom();
    console.log(random);
    setRandomNum(random)
    setValue(prevvalue=>Math.floor(value*random))
  };
  const message2=()=>{
    const random=generateRandom();
    setRandomNum(random)
    console.log(random);
    
    setValue(prevvalue=>Math.floor(value/random))

  };
  const handleReset = () => {
    setValue(10); 
    setRandomNum(null);
  };
  return (
    <>
    <h1>Sandeep Choudhary</h1>
    <h2>Counter Value:{value}</h2>
    <button onClick={message}>multiply</button>
    <br />
    <button onClick={message2}>divide</button>
    <h2>
        Random Num to do operation: {randomNum !== null ? randomNum : 'notGenerated'}
    </h2>
    <button onClick={handleReset}> reset </button>
    </>
  )
}

export default App;
