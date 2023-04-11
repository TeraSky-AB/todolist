import React, { useState, useEffect } from 'react'
import Switch from "react-switch"

function DarkModeEnabler() {
    const [darkModeEnabled, setDarkDarkModeEnabled] = useState(false)

    useEffect(() => {
        document.firstElementChild.setAttribute("class", darkModeEnabled ? "dark" : "light");
    }, [darkModeEnabled])

    return (
        <span className='flex justify-center gap-2 font-semibold'>Dark Mode:<Switch onChange={setDarkDarkModeEnabled} checked={darkModeEnabled} /></span>
    )
}

export default DarkModeEnabler