import React from 'react'

function Index(props) {
  let alertFun=()=>{
   return alert("Hello,"+`[${props.title}]!`)
  }

  return (
    <>
    <div>{alertFun()}</div>
    </>
      
  )
}

export default Index