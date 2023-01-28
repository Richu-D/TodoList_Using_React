import React from 'react'

function Todo({todo,toggletodo,deleteSingleItem,editSingleItem}) {
  return (
  
        <div className='todoItem'>
            <span>
            <input className='todoItems' id={todo.id} type="checkbox" onClick={()=>{toggletodo(todo.id)}} defaultChecked={todo.complete} />
            <label htmlFor={todo.id} className='strikethrough'>{todo.name}</label>
            </span> 
            <div>
            <button className='editIndividualItem' onClick={()=>{editSingleItem(todo.id)}} >Edit</button>
            <button className='deleteIndividualItem' onClick={()=>{deleteSingleItem(todo.id)}} >delete</button>
            </div>
        </div>

  )
}

export default Todo