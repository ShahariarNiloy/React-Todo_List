import React from 'react';

function Form(props:any) {
    const inputTextHandler = (e:any) =>{
        props.setInputText(e.target.value)
    }
    const submitTodoHandler = (e:any) =>{
        e.preventDefault()
        props.setTodos([
            ...props.todos, {text : props.inputText, completed: false, id: Math.floor(Math.random()*1000)}
        ])
        props.setInputText("")
    }
    const statusHandler = (e:any) =>{
        props.setStatus(e.target.value) 
    }
    return (
        <div>
            <form>
                <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;