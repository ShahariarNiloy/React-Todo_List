import React from 'react';

function Todo(props:any) {
    const deletehandler = () =>{
         props.setTodos(props.todos.filter((el:any)=>el.id !== props.todo.id))
    }
    const completehandler = () =>{
        props.setTodos(props.todos.map((item:any)=>{
            if(item.id === props.todo.id){
                return {
                    ...item, 
                    completed : !item.completed
                }
            }
            return item
        }))
    }
    return (
        <div>
            <div className="todo" >
                <li className= {`todo-item ${props.todo.completed? 'completed' : ''}`} >{props.text}</li>
                <button onClick={completehandler} className='complete-btn'><i className='fas fa-check'></i></button>
                <button onClick={deletehandler} className='trash-btn'><i className='fas fa-trash'></i></button>
            </div>
        </div>
    );
}

export default Todo;