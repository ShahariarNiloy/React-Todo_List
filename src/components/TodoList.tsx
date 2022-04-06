import React from "react";
import Todo from "./Todo";

function TodoList(props: any) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {props.filterTodos.map((todo: any) => (
            <Todo
              todos={props.todos}
              setTodos={props.setTodos}
              text={todo.text}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
