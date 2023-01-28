import React from 'react'
import Todo from './Todo'

function TodoList({todos,toggletodo,deleteSingleItem,editSingleItem}) {
    todos = [...todos].reverse()
  return (
    
    todos.map(todo =>{
        return <Todo deleteSingleItem={deleteSingleItem} editSingleItem={editSingleItem} toggletodo={toggletodo} key={todo.id} todo={todo}/>  
    })
      )
    }
    
export default TodoList 