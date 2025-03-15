import React from 'react'

function Greet() {
  let date=new Date();
  // let time=date.getHours();
  let time=date.getHours();
  // let time=17;
  console.log(time);

  let greettime=()=>{
    (time>5 && time<12)?alert("Good Moring"):(time>=12 && time<=18)?alert("Good Afternoon"):alert("Good evening")
  }
  

  return (
    <div>
      {greettime()}
    </div>
  )
}

export default Greet