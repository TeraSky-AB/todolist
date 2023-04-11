import React, { useState } from 'react'

function TodoItem({item, deleteTodo, checkTodo}) {
    const [ doneState, setDoneState ] = useState(item.state)

    const changeTodoState = () => {
        setDoneState(!doneState)
        checkTodo(item.id)
    }

    return (
        <div className="relative w-full items-center">
            <label className='flex w-10/12 justify-start items-center gap-5 cursor-pointer'>
                <input type="checkbox" checked={doneState} onChange={changeTodoState} className='custom-checkbox checked:before:custom-checkbox-checked cursor-pointer' />
                <span className='text-justify max-w-[90%]'>{item.text} <span className='text-xs text-slate-600'>{item.date.toLocaleString()}</span></span>
            </label>
            <button onClick={() => deleteTodo(item.id)} className='absolute right-0 top-1/2 translate-y-[-50%] text-red-600 pl-[6px] hover:border-l-red-600 hover:border-l-[2px] font-semibold'>Delete</button>
        </div>
    )
}

export default TodoItem