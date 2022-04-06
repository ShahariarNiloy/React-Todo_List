import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState<any>("")
  const [todos, setTodos] = useState<any>([])
  const [status, setStatus] = useState<any>("all")
  const [filterTodos, setFilterTodos] = useState<any>([])
  
  useEffect(()=>{
    filterHandler()
  }, [todos, status])

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter((todo:any)=> todo.completed == true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo:any)=> todo.completed == false))
        break;
      default:
        setFilterTodos(todos)
        break;
    }
  }

  return (
    <div className="App">
     <header>
       <b>Niloy's Todo List</b>
     </header>
     <Form  todos={todos}
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}
      setStatus = {setStatus}
      
      />
     <TodoList todos= {todos} setTodos={setTodos} filterTodos = {filterTodos} />
    </div>
  );
}

export default App;
