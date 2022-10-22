import React,{useState,useRef,useEffect} from 'react'
import './App.css'
import TodoList  from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "todoListItems"

function App() {
  const [todos,setTodos] = useState((localStorage.getItem(LOCAL_STORAGE_KEY)?.length)?JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)):[])
  const todoNameRef = useRef()

useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
},[todos])

function toggletodo(id){
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

function deleteSingleItem(id){
const newTodos = [...todos]
setTodos(newTodos.filter(todo => todo.id!=id))
}



  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    if(name.trim()==="") return;
    setTodos(prevTodos =>{
      return [...prevTodos,{id:uuidv4(),name:name,complete:false}]
    })
    todoNameRef.current.value="";
  }

  function handleClearAllTodos(){
   const newTodos = todos.filter(todo => !todo.complete)
   setTodos(newTodos)
  }
  return (
    <div className='container'>
    <h1>TodoList</h1>
    <input id='todoInput' ref={todoNameRef} placeholder="Todo" type="text" />
    <br />
    <button id='addTodo' onClick={handleAddTodo}>Add Todo</button>
    <button id='clearCompletedTodo' onClick={handleClearAllTodos}>Clear Completed Todos</button>
    <br />
    <p id='leftedItemCount'>{todos.filter(todo => !todo.complete).length||"Nothing"} left to do</p>
    <div id='todoContainer'>
    <TodoList toggletodo={toggletodo} deleteSingleItem={deleteSingleItem} todos={todos} />
    </div>
    </div>
  ) 
}

export default App;
