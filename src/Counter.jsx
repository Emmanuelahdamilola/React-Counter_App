import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  function handleCounterIncrement(){
    if(count < 10){
      setCount(prev => prev + 1);
      setErrorMsg('')
    }else{
      setErrorMsg("You've reached the limit!");
    }
  }

  function handleCounterDecrement(){
    if(count === 0){
      setCount(count);
      setErrorMsg("You can't go below 0");
    }else{
      setCount(count - 1);
      setErrorMsg('');
    }
  }

  return (
    <>
    <div className='counterBox'>
      <h1 className='counter'>{count}</h1>
      </div>
      {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
    <div className='counterBtnBox'>
    <button onClick={handleCounterIncrement}>Increase</button>
    <button onClick={handleCounterDecrement}>Decrease</button>
    </div>
    </>
  )
}

export default Counter
