import React, { useEffect, useState } from 'react'

const Todo = () => {
  const[data,setData]=useState([])
  const[todo,setTodo]=useState("")
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>res.json())
    .then((res)=>setData(res))
  },[])

  function handleClick(e){
    e.preventDefault()
    console.log(todo)
    if(todo.trim() !=="")
    {
      const newTodo = {

        id : data.length+1,
        title : todo,

      }
      setData([...data,newTodo])
      setTodo("")    
    }

  }
  function handleDel(id){
    const del= data.filter((data)=>data.id !==id)
    setData(del)
  }
 
   
  return (
   
    <div className='container'>
      <h2 className='text-center fw-bolder'>
        To Do List 
      </h2>
      <div className="box">
        <form action="">
        <div className="input">
        <input type="text" 
          placeholder='Enter tasks'
          onChange={(e)=>setTodo(e.target.value)}
          value={todo}
          />
          <button onClick={handleClick}><i class="fa fa-plus-square-o" aria-hidden="true" id='add'></i></button>
        </div>
        </form>
      </div>
       <ol  >
       {data.map((item)=>(
          <li key={item.id} className='box'>
           
            {item.title} <i class="fa fa-trash-o" aria-hidden="true" id='del' onClick={()=>handleDel(item.id)}></i>
            
          </li>
          ))}
       </ol>
    </div>
  )
}

export default Todo