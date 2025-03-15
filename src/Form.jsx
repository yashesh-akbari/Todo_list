import React, { useState } from 'react'

function Form() {

  let [name,setname]=useState("");
  let [age,setAge]=useState("");
  let [formSubmit,setformSubmit]=useState(null);

  let handleFormSubmit=(e)=>{
    e.preventDefault();
    setformSubmit({name,age});

    setname="";
    setAge="";
  }

  let handleName=(e)=>{
    setname(e.target.value);
  }

  let HandleAge=(e)=>{
    setAge(e.target.value);
  }


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        Name: <input type="text" value={name} onChange={handleName} />
        Age: <input type="number" value={age} onChange={HandleAge}/>
        <button type='submit'>submit</button>
      </form>
      {formSubmit && (<div>
        <h1>form data</h1>
        <p>Name: {formSubmit.name}</p>
        <p>Age: {formSubmit.age}</p>
        <p></p>
      </div>)}
    </div>
  )
}

export default Form