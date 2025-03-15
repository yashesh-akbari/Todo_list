import React, { useEffect, useState } from 'react'



function Counter() {

  let value=Number(localStorage.getItem('counter'))||0;
  let [onclick,setonclick]=useState(value);
  
  useEffect(()=>{localStorage.setItem('counter',[onclick])},[onclick])

  let add=()=>{
    setonclick(++onclick);
  }
  let sub=()=>{
    setonclick(--onclick);
  }
  return (
    <div>
      <p>counter {onclick}</p>
      <button onClick={add}>Increment counter</button>
      <button onClick={sub}>
        Decrement counter
      </button>
    </div>
  )
}

export default Counter