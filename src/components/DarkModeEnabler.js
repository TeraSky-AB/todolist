import React, { useState, useEffect } from 'react'
import Switch from "react-switch"

function DarkModeEnabler() {
    const darkThemeKey = "DarkTheme"
    const [darkModeEnabled, setDarkDarkModeEnabled] = useState(JSON.parse(localStorage.getItem(darkThemeKey)) || false)

    useEffect(() => {
        document.firstElementChild.setAttribute("class", darkModeEnabled ? "dark" : "light");
        localStorage.setItem(darkThemeKey, JSON.stringify(darkModeEnabled))
    }, [darkModeEnabled])

    return (
        <span className='flex justify-center gap-2 font-semibold'>Dark Mode:<Switch onChange={setDarkDarkModeEnabled} checked={darkModeEnabled} /></span>
    )
}

export default DarkModeEnabler