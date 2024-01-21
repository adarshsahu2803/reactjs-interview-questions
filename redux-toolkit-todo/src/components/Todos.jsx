import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlices'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <li 
                key={todo.id}>
                    {todo.text}
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className='bg-gray-700 rounded border border-gray-700
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900
                text-base outline-none text-gray-100 py-1 px-3 leading-8
                transition-colors duration-200 ease-in-out'
                    >Delete</button>
                </li>
            ))}
        </>
    )
}

export default Todos