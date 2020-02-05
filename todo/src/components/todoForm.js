import React ,{useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/reducer';

import Todo from './todo';



 const TodoForm =()=>{
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const [newTodo, setNewTodo] = useState('')

    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();        
        dispatch({type: 'Set_Task', payload: newTodo})
        setNewTodo('');
               
    }

    const toggleCompleted = (id) => {
        dispatch({type: 'Toggle_Completed', payload: id})
    }

    const handleDestroy = () => {
        dispatch({ type: "Destroy_Completed" })
    }

    console.log(newTodo);

    return(
        <div>
            <form onSubmit = {handleSubmit} >
                <input
                    type = "text"
                    placeholder = 'What To Do?'
                    value = {newTodo}
                    onChange = {handleChange}
                />
                <button type = "submit" >Submit</button>
            </form>
            <div>
                {state.map((todo) =>{
                    return <Todo 
                                todo = {todo} 
                                toggleCompleted = {toggleCompleted}
                                key = {todo.id}
                            />
                    
                })}                
            </div>
            <button onClick = {handleDestroy}>Remove Completed</button>
        </div>
    )
}

export default TodoForm