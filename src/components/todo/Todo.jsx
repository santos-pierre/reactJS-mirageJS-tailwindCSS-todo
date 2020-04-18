import React from 'react';
import { useState } from 'react';


const Todo = ({ data, axios }) => {
    const [todo,setTodo] = useState(data);
    
    const changeStatus = (id) => {
        axios
        .put(`/api/todos/changeStatus/${id}`)
        .then(() => {
            setTodo({...todo, done: !todo.done});
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <li className="border-t">
            <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                    <span
                        role="checkbox"
                        tabIndex="0"
                        aria-checked={todo.done}
                        className={`${todo.done ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                        onClick={() => changeStatus(todo.id)}
                        >
                        <span
                            aria-hidden={todo.done}
                            className={`${todo.done ? 'translate-x-5' : 'translate-x-0'} relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                        >
                            <span
                                className={`${todo.done ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}>
                                <svg
                                    className="h-3 w-3 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 12 12">
                                    <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span
                                className={`${todo.done ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}>
                                <svg
                                    className="h-3 w-3 text-indigo-600"
                                    fill="currentColor"
                                    viewBox="0 0 12 12">
                                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                </svg>
                            </span>
                        </span>
                    </span>
                    <div className={`${todo.done ? 'line-through' : ''} text-sm leading-5 font-medium text-indigo-600 truncate`}>
                        {todo.title}
                    </div>
                </div>
            </div>
        </li>
    );
}


export default Todo;