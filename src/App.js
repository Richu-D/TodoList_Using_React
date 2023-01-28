import React,{useState,useRef,useEffect} from 'react'
import './App.css'
import TodoList  from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import EditBox from './EditBox';

const LOCAL_STORAGE_KEY = "todoListItems"

function App() {
  const [todos,setTodos] = useState((localStorage.getItem(LOCAL_STORAGE_KEY)?.length)?JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)):[])
  const todoNameRef = useRef()
  const [editPanal,setEditPanel] = useState(false)
  const [editId,setEditId] = useState("")
  const [currentText,setcurrentText] = useState("")

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
setTodos(newTodos.filter(todo => todo.id!==id))
}
function editSingleItem(id){
  setEditId(id)
  const todo = todos.find(todo => todo.id === id)
  setcurrentText(todo.name)
  setEditPanel(prev => !prev)
}

 function handleSave(text){
  if(text.trim()){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === editId)
    todo.name = text.trim()
    setTodos(newTodos)
    setEditPanel(false)
  }
 }
 function handleInput(event){
  if(event.key==="Enter"){
    handleAddTodo(event)
  }
 }
  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    if(!name.trim()) return;
    setTodos(prevTodos =>{
      return [...prevTodos,{id:uuidv4(),name:name.trim(),complete:false}]
    })
    todoNameRef.current.value="";
  }

  function clearAllCompletedTodos(){
   const newTodos = todos.filter(todo => !todo.complete)
   setTodos(newTodos)
  }
  return (
    <>
    {
      editPanal && <EditBox currentText={currentText} setcurrentText={setcurrentText} handleSave={handleSave} setEditPanel={setEditPanel} />
    }
    <div className='container'>
    <h1>TodoList</h1>
    <input className='todoInput' ref={todoNameRef} onKeyDown={(event)=>handleInput(event)} placeholder="Todo" type="text" />
    <br />
    <button id='addTodo' onClick={handleAddTodo}>Add Todo</button>
    <button id='clearCompletedTodo' onClick={clearAllCompletedTodos}>Clear Completed Todos</button>
    <br />
    <p id='leftedItemCount'>{todos.filter(todo => !todo.complete).length||"Nothing"} left to do</p>
    <div id='todoContainer'>
    <TodoList toggletodo={toggletodo} editSingleItem={editSingleItem} deleteSingleItem={deleteSingleItem} todos={todos} />
    </div>
    </div>
    </>
  ) 
}

export default App;
