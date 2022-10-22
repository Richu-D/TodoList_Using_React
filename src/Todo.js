import React from 'react'

function Todo({todo,toggletodo,deleteSingleItem}) {
  return (
  
        <div className='flex'>
            <span>
            <input className='todoItems' id={todo.id} type="checkbox" onClick={()=>{toggletodo(todo.id)}} defaultChecked={todo.complete} />
            <label htmlFor={todo.id} className='strikethrough'>{todo.name}</label>
            </span> 
            <button className='deleteIndividualItem' onClick={()=>{deleteSingleItem(todo.id)}} >delete</button>
        </div>

  )
}

export default Todo