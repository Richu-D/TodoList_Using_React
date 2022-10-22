import React from 'react'
import Todo from './Todo'

function TodoList({todos,toggletodo,deleteSingleItem}) {
    todos = [...todos].reverse()
  return (
    
    todos.map(todo =>{
        return <Todo deleteSingleItem={deleteSingleItem} toggletodo={toggletodo} key={todo.id} todo={todo}/>  
    })
      )
    }
    
export default TodoList 