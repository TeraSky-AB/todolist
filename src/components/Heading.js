import React from 'react'
import DarkModeEnabler from './DarkModeEnabler'

// This is the main header component
function Heading() {
    return (
    <div className='font-sans dark:text-white mb-6'>
        <h1 className='text-8xl font-bold mb-4 '>ToDo List</h1>
        <DarkModeEnabler />
    </div>
    )
}

export default Heading