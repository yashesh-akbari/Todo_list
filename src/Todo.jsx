import React, { useState } from 'react'

function Todo() {

  // let value=localStorage.getItem("todolist");

  let [todolists,settodolist]=useState([]);
  let [name,setname]=useState("");
  let [display,setdisplay]=useState(false);

  let add=(e)=>{
    setname(e.target.value);
  }

  let deletetodoList=(index)=>{
    let updatetodo=todolists.filter((_,i)=>i!==index)
    settodolist(updatetodo);
  }
  let rander=(todolists)=>{
   return todolists.map((task,index)=>
   <li className='m-2 text-3xl border flex justify-between p-5 gap-3' key={index}>{task}{"           "}    <button className="border bg-red-400 text-xl p-1 rounded-4xl ml-3" onClick={()=>deletetodoList(index)}>delete</button></li>
  );
  }


  let handlesubmit=(e)=>{
    e.preventDefault();
  //  let updatedTodoList=[...todolists,name]
   settodolist([...todolists,name])
    setname("")
    setdisplay(true);
    // localStorage.setItem("todolist",JSON.stringify(updatedTodoList));
  }

  return (
    <div>
      <form onSubmit={handlesubmit} method='get'>
        <h1 className='text-4xl text-emerald-600 font-extrabold text-center'>First Todo List</h1>
        <div className='flex text-center justify-center mt-3 mb-3'>
        <label htmlFor="" className='text-3xl'>Task Name: </label>
        <input type="text" value={name} onChange={add} className='m-2 border' required/>
        </div>
        <button type="submit" className='border bg-green-200 ml-auto flex mr-auto rounded-4xl p-3 m-3' >submit</button>
      </form>
      {display && (<div>
        <ul>{rander(todolists)}</ul>
      </div>)}
    </div>
  )
}

export default Todo