import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function CreateTodo() {
    const dispatch = useDispatch();
    const todo = useRef(null);
    const onChangeHandler = () => {
        dispatch(addTodo(todo.current.value));
        todo.current.value = "";
    }

    return (
        <>
            <input
                type='text'
                className="bg-slate-400 w-[90%] p-2 rounded-l-lg dark:text-white focus:outline-none"
                placeholder="Add a new todo..."
                ref={todo}
            />
            <button
                className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none'
                onClick={onChangeHandler}
            >Add</button>
        </>
    )
}

export default CreateTodo