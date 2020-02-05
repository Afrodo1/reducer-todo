import React from 'react';

 const Todo = ({todo, toggleCompleted}) => {
    return(
        <div>
            <h3>{todo.item} : {todo.completed ? <span>complete</span> : <span>incomplete</span>}</h3>
    <button onClick = {() => toggleCompleted(todo.id)}>Push to {todo.completed ? 'Incomplete': 'Complete'}</button>
        </div>
    )
}
export default Todo