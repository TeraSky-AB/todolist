import React, { useState } from 'react'

function TodoAdder({addTodo}) {
    const [ newTodo, setNewTodo ] = useState("")

    return (
        <div className='w-1/2 mx-auto flex gap-1'>
            <input type='text' value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder='Enter new Todo here !' className='rounded-md text-black p-1 w-full'/>
            <button onClick={(e) => {
                    e.preventDefault()
                    if(newTodo !== "") {
                        addTodo(newTodo)
                        setNewTodo("")
                    } 
                }} className='bg-green-600 px-2 py-1 rounded-md font-bold text-xl'><span className='relative bottom-[2px]'>+</span></button>
        </div>
    )
}

export default TodoAdder